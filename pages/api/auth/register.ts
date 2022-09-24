import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../database/connect';
import { UserRegistrationProps } from '../../../models/userModel';
import { hash } from 'bcryptjs';

const passwordHash = async (plaintextPassword: string) => {
	const hashedPassword = await hash(plaintextPassword, 8);

	return hashedPassword;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const db = connect();
	const userTable = 'users';

	const inputData: UserRegistrationProps = req.body.input;
	const { email, username } = inputData;

	const emailTaken = await db(userTable).where({ email: email }).first();
	if (emailTaken) {
		return res
			.status(400)
			.json({ email: 'An account with this email address already exists.' });
	}

	const usernameTaken = await db(userTable)
		.where({ username: username })
		.first();
	if (usernameTaken) {
		return res
			.status(400)
			.json({ username: 'An account with this username already exists.' });
	}

	// Prepare user object for database insert
	const hashedPassword = await passwordHash(inputData.password);
	if (!(typeof hashedPassword === 'string' && hashedPassword !== '')) {
		// Throw error and end process
		return res.status(400).json({
			message: 'There was a problem creating your account. Try again later.',
		});
	}

	inputData.password = hashedPassword;
	delete inputData.password_confirm;

	db(userTable)
		.insert({
			...inputData,
		})
		.then((userIdKeys: Array<number>) => {
			const userId = userIdKeys[0];

			db(userTable)
				.where('id', userId)
				.first()
				.then(function (user: unknown) {
					return res.status(200).json(user);
				});
		})
		.catch(function (err: unknown) {
			console.error('Error', err);
			return res.status(400).json({});
		});
}
