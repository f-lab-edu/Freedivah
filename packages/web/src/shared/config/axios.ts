import axios from "axios";

export const createAxiosInstance = (baseURL: string) => {
	const instance = axios.create({
		baseURL,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
	});

	instance.interceptors.request.use(
		(config) => {
			/**
			 * @todo 토큰 재발급
			 * ContextAPI에 저장된 AccessToken 없는 경우, Cookie에 저장된 RefreshToken으로 재발급
			 * supabase: setSession 메서드 사용 
			 * -> 목적: 외부 인증(SSO, OAuth)과 Supabase 세션 동기화
			 * -> 동작: 외부에서 제공된 토큰으로 세션 강제 설정
			 */
			console.log("Request:", config.method, config.url);
			return config;
		},
		(error) => {
			console.error("Request Error:", error);
			return Promise.reject(error);
		},
	);
	instance.interceptors.response.use(
		(response) => {
			console.log("Response:", response.status);
			return response;
		},
		(error) => {
			console.error("Response Error:", error);
			return Promise.reject(error);
		},
	);
	return instance;
};
