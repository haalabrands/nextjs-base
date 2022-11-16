import type { NextApiRequest, NextApiResponse } from 'next';
import { ChannelModel, channelTableName } from '../../../../models/ChannelModel';
import connect from '../../../../database/connect';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();

	try {
		const results: ChannelModel = await db
			.select()
			.from(channelTableName)
			.orderBy('id', 'ASC');

		res.status(200).json(results);
	} catch (err) {
		res.status(500).json([]);
	}
}
