const tableName = 'sc_cards';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('slug', 100).notNullable();
		table.string('name').notNullable();
		table.smallint('year').unsigned().notNullable();
		table.smallint('brand_id').unsigned().notNullable();
		table.integer('set_id').unsigned().notNullable();
		table.integer('set_group_id').unsigned().notNullable();
		table.integer('set_parallel_id').unsigned();

		table.string('card_number');
		table.integer('serial_number').unsigned();

		table.json('player_ids').notNullable();
		table.json('team_ids');

		table.boolean('is_rookie');
		table.boolean('is_auto');
		table.boolean('is_relic');
		table.boolean('is_diecut');
		table.boolean('is_sticker');
		table.boolean('is_checklist');
		table.boolean('is_multiplayer');
		table.boolean('has_error');

		table.integer('page_views').unsigned().defaultTo(0);

		table.string('img_src');
		table.text('info');

		table.unique(['slug'], { indexName: 'card_slug' });

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
