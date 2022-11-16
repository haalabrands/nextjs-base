const tableName = 'brands';

// Seeder user
const seedUserId = 1;

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert({
		type: 'personal',
		slug: 'personal',
		name: 'Personal',
		is_active: true,
		creator_user_id: seedUserId,
		owner_user_id: seedUserId
	});
};
