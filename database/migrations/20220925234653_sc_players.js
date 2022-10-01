const tableName = 'sc_players';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('slug', 191).notNullable();

		table.date('birthdate');
		table.date('deathdate');
		table.tinyint('height_cm').unsigned();
		table.tinyint('weight_kg').unsigned();

		table.enum('bat_side', ['left', 'right', 'both']);
		table.enum('shoot_side', ['left', 'right', 'both']);
		table.enum('swing_side', ['left', 'right', 'both']);
		table.enum('throw_side', ['left', 'right', 'both']);

		table.smallint('rookie_year').unsigned();
		table.smallint('final_year').unsigned();
		table.tinyint('draft_round').unsigned();
		table.smallint('draft_pick').unsigned();
		table.smallint('hof_year').unsigned();

		table.enum('value_category', [
			'common',
			'key',
			'star',
			'all-star',
			'mvp',
			'legend',
		]);
		table.smallint('cards_qty').unsigned().defaultTo(0);

		table.integer('page_views').unsigned().defaultTo(0);

		table.json('numbers');
		table.json('sport_ids');
		table.json('team_ids');
		table.json('roster_ids');
		table.json('achievement_ids');
		table.json('aliases');

		table.string('img_src');
		table.text('info');

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
