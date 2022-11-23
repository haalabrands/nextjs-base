const tableName = 'users';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	const hashedPassword = '$2a$08$8PyzAwyE2m48PhSMGIw7z.rPo.2tKQjzmUUBcuF8UzLf9UcR6jv4q'; // "demo"

	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert([
		{
			username: 'demo',
			full_name: 'Seeded Demo User',
			greeting: 'Demo User',
			email: 'demo3@test.com',
			password: hashedPassword
		}
	]);
};
