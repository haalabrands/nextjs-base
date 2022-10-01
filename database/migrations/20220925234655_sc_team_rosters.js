const tableName = 'sc_team_rosters';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('slug', 100).notNullable();
		table.smallint('year').unsigned().notNullable();
		table.integer('team_id').unsigned().notNullable();
		table.integer('player_id').unsigned().notNullable();

		table.integer('player_position_id').unsigned();

		table.integer('cards_qty').unsigned().defaultTo(0);

		table.integer('page_views').unsigned().defaultTo(0);

		table.text('info');

		table.unique(['slug'], { indexName: 'roster_slug' });
		table.unique(['year', 'team_id', 'player_id'], {
			indexName: 'sc_roster_idx',
		});

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
