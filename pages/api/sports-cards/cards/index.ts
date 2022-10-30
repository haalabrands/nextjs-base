import type { NextApiRequest, NextApiResponse } from 'next';
import { CardModel, cardTableName } from '../../../../models/scCardModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: CardModel = await db
			.select()
			.from(cardTableName)
			.orderBy('id', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
