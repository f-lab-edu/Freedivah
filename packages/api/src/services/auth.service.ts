import type { AuthProvider } from "@shared/types/authTypes";
import { supabase } from "../config/supabase";
import { UserModel } from "../models/user.model";
export class AuthService {
	private userModel: UserModel;

	constructor() {
		this.userModel = new UserModel();
	}

	async getProviderAuthUrl(provider: AuthProvider): Promise<string> {
		try {
			const idDev = process.env.NODE_ENV === "development";
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: provider,
				options: {
					redirectTo: `${process.env.NEXT_PUBLIC_API_URL}/api/auth/provider/callback`,
					/**
					 * @warning 이 설정을 삭제하면 시스템이 정상적으로 작동하지 않습니다.
					 * Supabase가 자동으로 OAuth 제공자(예: Google OAuth) 페이지로 리다이렉트되는 동작을 방지하고,
					 * 이를 통해 추가적인 서버 측 로직을 처리할 수 있도록 설정합니다.
					 */
					skipBrowserRedirect: true,
					queryParams: {
						prompt: idDev ? "select_account" : "none",
					},
				},
			});

			if (error || !data.url) {
				throw new Error("Failed to generate Google auth URL");
			}
			return data.url;
		} catch (error) {
			throw error;
		}
	}

	async getUserSessionData(code: string) {
		try {
			const { data, error } = await supabase.auth.exchangeCodeForSession(code);

			if (error) {
				throw error;
			}
			if (!data.session?.user?.email || !data.session?.user?.id) {
				throw new Error("User data not found");
			}

			return {
				userId: data.user.id,
				access_token: data.session.access_token,
				refresh_token: data.session.refresh_token
			};
		} catch (error) {
			throw error;
		}
	}

	async isNewUser(authUserId: string): Promise<boolean> {
		try {
			const { data, error } = await this.userModel.findByUserId(authUserId);
			if (error) {
				throw error;
			}

			return Boolean(!data);
		} catch (error) {
			throw error;
		}
	}

	async createUser(userData: { id: string }) {
		try {
			return this.userModel.createUser(userData.id);
		} catch (error) {
			throw error;
		}
	}
}
