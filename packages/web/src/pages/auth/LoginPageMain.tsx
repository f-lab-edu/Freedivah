"use client";
import { authAPI } from "@/entities";

export default function LoginPageMain() {
	const handleProviderLogin = async () => {
		try {
			const {
				data: { url },
			} = await authAPI.providerLogin("google");
			window.location.href = url;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-4xl font-bold mb-8">Login</h1>
			<button
				onClick={handleProviderLogin}
				className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
			>
				Login with Google
			</button>
		</main>
	);
}
