import type { NextApiRequest, NextApiResponse } from 'next';
import { brandTableName } from '../../../../models/scBrandModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { brandSlug } = req.query;
	console.log('Getting Brand data for: ' + brandSlug);

	try {
		const db = connect();

		const brand = await db
			.select()
			.from(brandTableName)
			.where('slug', brandSlug)
			.first();

		res.status(200).json(brand);
	} catch (err) {
		res.status(500).json([]);
	}
}
