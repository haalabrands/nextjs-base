import type { NextApiRequest, NextApiResponse } from 'next';
import { BrandModel, brandTableName } from '../../../../models/BrandModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posted data
		const data = req.body;

		const db = connect();

		console.log('Adding brand...');
		const results: BrandModel = await db(brandTableName).insert(data);
		console.log('Brand added.');
		res.status(200).json(results);
	} catch (err: any) {
		console.log('Error adding brand.', err.message);
		res.status(500).json(null);
	}
}
