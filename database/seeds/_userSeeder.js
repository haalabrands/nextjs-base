const tableName = 'users';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert([
		{
			username: 'demo',
			full_name: 'Seeded Demo User',
			greeting: 'Demo User',
			email: 'demo@test.com'
		}
	]);
};
