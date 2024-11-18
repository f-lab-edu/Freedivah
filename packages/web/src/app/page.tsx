import { logger } from "@freedivah/shared";

logger('Shared is connected', {
	state: 'ON',
});

export default function Home() {
	return (
		<main>
			<h1>Hello Freedivah</h1>
		</main>
	);
}
