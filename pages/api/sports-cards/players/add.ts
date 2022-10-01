import type { NextApiRequest, NextApiResponse } from 'next';
import { PlayerModel, playerTableName } from '../../../../models/scPlayerModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posted data
		const data = req.body;

		const db = connect();

		console.log('Adding player...');
		const results: PlayerModel = await db(playerTableName).insert(data);
		console.log('Player added.');
		res.status(200).json(results);
	} catch (err) {
		console.log('Error adding player.', err.message);
		res.status(500).json(null);
	}
}
