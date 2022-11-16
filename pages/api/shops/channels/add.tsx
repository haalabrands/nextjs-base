import type { NextApiRequest, NextApiResponse } from 'next';
import { ChannelModel, channelTableName } from '../../../../models/ChannelModel';
import connect from '../../../../database/connect';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the posted data
		const data = req.body;

		const db = connect();

		console.log('Adding channel...');
		const results: ChannelModel = await db(channelTableName).insert(data);
		console.log('Channel added.');
		res.status(200).json(results);
	} catch (err: any) {
		console.log('Error adding channel.', err.message);
		res.status(500).json(null);
	}
}
