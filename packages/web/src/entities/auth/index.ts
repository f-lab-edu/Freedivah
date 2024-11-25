import { api } from "@/shared/config/api";
import type { AuthProvider } from "@shared/types/authTypes";

export const authAPI = {
	providerLogin: (provider: AuthProvider) =>
		api.get<{ url: string }>(`/auth/provider?provider=${provider}`),
};
