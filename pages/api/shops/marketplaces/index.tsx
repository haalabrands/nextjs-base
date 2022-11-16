import type { NextApiRequest, NextApiResponse } from 'next';
import { MarketplaceModel, marketplaceTableName } from '../../../../models/MarketplaceModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: MarketplaceModel = await db
			.select()
			.from(marketplaceTableName)
			.orderBy('id', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
