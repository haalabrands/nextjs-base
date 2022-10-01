const tableName = 'sc_teams';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('slug', 30).notNullable();

		table.integer('sport_id').unsigned().notNullable();
		table.integer('established');
		table.smallint('first_year').unsigned();
		table.smallint('last_year').unsigned();

		table.integer('players_qty').unsigned().defaultTo(0);
		table.integer('cards_qty').unsigned().defaultTo(0);
		table.integer('rosters_qty').unsigned().defaultTo(0);

		table.integer('page_views').unsigned().defaultTo(0);

		table.string('img_src');
		table.text('info');

		table.json('aliases');

		table.unique(['slug'], { indexName: 'sc_team_slug' });
		table.index(['last_year'], 'sc_team_active_idx');

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
