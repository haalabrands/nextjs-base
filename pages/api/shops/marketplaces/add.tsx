import type { NextApiRequest, NextApiResponse } from 'next';
import { MarketplaceModel, marketplaceTableName } from '../../../../models/MarketplaceModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posted data
		const data = req.body;

		const db = connect();

		console.log('Adding marketplace...');
		const results: MarketplaceModel = await db(marketplaceTableName).insert(data);
		console.log('Marketplace added.');
		res.status(200).json(results);
	} catch (err: any) {
		console.log('Error adding marketplace.', err.message);
		res.status(500).json(null);
	}
}
