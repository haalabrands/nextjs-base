import type { NextApiRequest, NextApiResponse } from 'next';
import { PlayerModel, playerTableName } from '../../../../models/scPlayerModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: PlayerModel = await db
			.select()
			.from(playerTableName)
			.orderBy('id', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
