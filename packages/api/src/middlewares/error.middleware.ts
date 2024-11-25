import { NextFunction, Request, Response } from "express";

export interface ApiError {
	success: false;
	error: {
		code: string; // 애플리케이션 에러 코드 (예: AUTH_001, USER_002)
		message: string; // 사용자에게 보여줄 메시지
		details?: string; // 개발자를 위한 상세 메시지
		timestamp: string; // 에러 발생 시간
		path: string; // 에러가 발생한 엔드포인트
		traceId: string; // 요청 추적을 위한 ID
		stack?: string; // 개발 환경에서만 포함
	};
}

const generateId = () => {
	const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
	const random = Math.random().toString(36).substring(2, 8);
	return `${timestamp}-${random}`;
};

export const errorMiddleware = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const isDev = process.env.NODE_ENV === "development";
	const status = error.status || 500;

	const errorResponse: ApiError = {
		success: false,
		error: {
			code: error.code || `ERR_${status}`,
			message: error.message || "Internal Server Error",
			details: error.details,
			timestamp: new Date().toISOString(),
			path: req.path,
			traceId: generateId(),
		},
		...(isDev && { stack: error.stack }),
	};

	return res.status(status).json(errorResponse);
};
