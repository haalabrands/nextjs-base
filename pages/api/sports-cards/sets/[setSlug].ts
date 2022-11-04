import type { NextApiRequest, NextApiResponse } from 'next';
import { setTableName } from '../../../../models/scSetModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { setSlug } = req.query;
	//console.log('Getting ' + setSlug +' set');

	try {
		const db = connect();

		const set = await db
			.select()
			.from(setTableName)
			.where('slug', setSlug)
			.orderBy('slug', 'ASC')
			.first();
		//console.log('api set: ', set);

		res.status(200).json(set);
	} catch (err) {
		res.status(500).json([]);
	}
}
