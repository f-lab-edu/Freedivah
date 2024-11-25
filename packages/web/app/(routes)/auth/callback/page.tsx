export default async function AuthCallbackPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const params = await searchParams;

	/**
	 * @todo 상태에 따른 분기처리 방법 더 고민해보기
	 */
	if (params.error) {
		const errorData = JSON.parse(params.error as string);
		return <ErrorFeedback />;
	}

	if (params.isNewUser === "true") {
		return <NewUserWelcome />;
	}

	return <LoginSuccess />;
}

function ErrorFeedback() {
	return <div>ErrorFeedback</div>;
}

function NewUserWelcome() {
	return <div>NewUserWelcome</div>;
}

function LoginSuccess() {
	return <div>LoginSuccess</div>;
}
