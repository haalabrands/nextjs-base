import type { NextApiRequest, NextApiResponse } from 'next';
import { brandTableName } from '../../../../models/scBrandModel';
import { setTableName } from '../../../../models/scSetModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { brandSlug } = req.query;
	console.log('Getting sets for ' + brandSlug);

	try {
		const db = connect();

		const brand = await db
			.select('id', 'name', 'slug')
			.from(brandTableName)
			.where('slug', brandSlug);
		console.log('api brand: ', brand);

		const sets = await db
			.select()
			.from(setTableName)
			.where('brand', brandSlug)
			.orderBy('slug', 'ASC');
		console.log('api sets: ', sets);

		res.status(200).json(sets);
	} catch (err) {
		res.status(500).json([]);
	}
}
