import type { NextApiRequest, NextApiResponse } from 'next';
import { SetModel, setTableName } from '../../../../models/scSetModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posted data
		const data = req.body;

		const db = connect();

		console.log('Adding set...');
		const results: SetModel = await db(setTableName).insert(data);
		console.log('Set added.');
		res.status(200).json(results);
	} catch (err) {
		console.log('Error adding set.', err.message);
		res.status(500).json(null);
	}
}
