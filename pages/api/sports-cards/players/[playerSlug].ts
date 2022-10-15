import type { NextApiRequest, NextApiResponse } from 'next';
import { playerTableName } from '../../../../models/scPlayerModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { playerSlug } = req.query;
	console.log('Getting player data:', playerSlug);

	try {
		const db = connect();

		const player = await db
			.from(playerTableName)
			.where('slug', playerSlug)
			.first();
		console.log('api player: ', player);

		res.status(200).json(player);
	} catch (err) {
		res.status(500).json([]);
	}
}
