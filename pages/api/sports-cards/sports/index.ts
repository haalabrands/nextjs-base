import type { NextApiRequest, NextApiResponse } from 'next';
import { SportModel, sportTableName } from '../../../../models/scSportModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: SportModel = await db
			.select()
			.from(sportTableName)
			.orderBy('slug', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
