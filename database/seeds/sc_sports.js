const tableName = 'sc_sports';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert([
		{ id: 1, slug: 'baseball', name: 'Baseball' },
		{ id: 2, slug: 'basketball', name: 'Basketball' },
		{ id: 3, slug: 'football', name: 'Football' },
		{ id: 4, slug: 'hockey', name: 'Hockey' },
		{ id: 5, slug: 'mma', name: 'MMA' },
		{ id: 6, slug: 'soccer', name: 'Soccer' },
		{ id: 7, slug: 'tennis', name: 'Tennis' },
		{ id: 8, slug: 'wrestling', name: 'Wrestling' },
		{ id: 9, slug: 'golf', name: 'Golf' },
		{ id: 10, slug: 'auto-racing', name: 'Auto Racing' },
		{ id: 11, slug: 'cricket', name: 'Cricket' },
		{ id: 12, slug: 'rugby', name: 'Rugby' },
		{ id: 13, slug: 'x-games', name: 'X Games' },
		{ id: 14, slug: 'olympic-sports', name: 'Olympic Sports' },
		{ id: 15, slug: 'horse-racing', name: 'Horse Racing' },
		// All values above are hard-coded in seeder files. Do not modify.
	]);
};
