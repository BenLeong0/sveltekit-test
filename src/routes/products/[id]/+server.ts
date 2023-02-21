import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params }) => {
	return new Response(
		JSON.stringify({
			id: params.id,
			comment: 'hi :3'
		})
	);
};
