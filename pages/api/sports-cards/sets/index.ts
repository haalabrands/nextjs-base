import type { NextApiRequest, NextApiResponse } from 'next';
import { setTableName } from '../../../../models/scSetModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { brand, sport, year } = req.query;

	try {
		const db = connect();

		let query = db;
		if (brand && brand.length) {
			query = query.where('brand', brand);
		}
		if (sport && sport.length) {
			query = query.where('sport', sport);
		}
		if (year && year.length) {
			query = query.where('year', year);
		}

		const sets = await query
			.select()
			.from(setTableName)
			.orderBy('slug', 'DESC');
		//console.log('api sets: ', sets);

		res.status(200).json(sets);
	} catch (err) {
		res.status(500).json([]);
	}
}
