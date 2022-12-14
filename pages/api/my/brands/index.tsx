import type { NextApiRequest, NextApiResponse } from 'next';
import { BrandModel, brandTableName } from '../../../../models/BrandModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: BrandModel = await db
			.select()
			.from(brandTableName)
			.orderBy('id', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
