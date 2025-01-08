import { supabase } from "../config/supabase";

interface Profile {
	/**
	 * @todo type 정의
	 */
}

type SupabaseResponse<T> = {
	data: T | null;
	error: { message: string; code: string } | null;
};
export class UserModel {
	async findByUserId(authUserId: string) {
		return supabase.from("profiles").select("*").eq("id", authUserId);
	}

	async createUser(id: string): Promise<SupabaseResponse<Profile>> {
		const now = new Date().toISOString();
		return supabase.from("profiles").insert([
			{
				id,
				created_at: now,
				updated_at: now,
			},
		]);
	}
}
