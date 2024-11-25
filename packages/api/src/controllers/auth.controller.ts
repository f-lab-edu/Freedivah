import { AuthProvider } from "@shared/types/authTypes";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
	private authService: AuthService;

	constructor() {
		this.authService = new AuthService();
	}

	async providerAuthStart(req: Request, res: Response, next: NextFunction) {
		try {
			const { provider } = req.query;
			if (!provider) {
				throw new Error("Missing authentication provider");
			}

			const authUrl = await this.authService.getProviderAuthUrl(
				provider as AuthProvider,
			);
			return res.status(200).json({ url: authUrl });
		} catch (error) {
			next(error)
		}
	}

	async providerAuth(req: Request, res: Response, next: NextFunction) {
		try {
			const code = req.query.code;
			const error = req.query.error;

			if (error || !code) {
				throw new Error(error?.toString() || "No auth code provided");
			}

			const { userId, access_token, refresh_token } = await this.authService.getUserSessionData(code as string);
			const isNewUser = await this.authService.isNewUser(userId);

			if (isNewUser) {
				await this.authService.createUser({ id: userId });
			}

			// 쿠키 설정
			res.cookie("s-access-token", access_token, {
				maxAge: 60 * 1000, // 1분
				secure: process.env.NODE_ENV === "production",
			});

			res.cookie("sb-refresh-token", refresh_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
			});

			/**
			 * @info Supabase가 리다이렉트를 자동으로 수행하기 때문에 JSON으로 응답을 처리할 수 없습니다. 
			 */
			return res.redirect(
				`${process.env.NEXT_PUBLIC_WEB_URL}/auth/callback?isNewUser=${isNewUser}`
			);
		} catch (error) {
			return res.redirect(
				`${process.env.NEXT_PUBLIC_WEB_URL}/auth/callback?error=${encodeURIComponent(
					error instanceof Error ? error.message : 'An unknown error occurred'
				)}`
			);
		}
	}
}
