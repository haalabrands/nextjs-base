const tableName = 'sc_leagues';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('slug', 30).notNullable();
		table.integer('sport_id').notNullable();
		table.string('abbreviation');

		table.integer('page_views').unsigned().defaultTo(0);

		table.string('img_src');
		table.text('info');

		table.unique(['slug'], { indexName: 'sport_slug' });

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.dropTable(tableName);
};