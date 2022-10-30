const tableName = 'sc_sets';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('slug', 100).notNullable();
		table.string('sport').notNullable();
		table.smallint('year').unsigned().notNullable();
		table.string('brand').notNullable();
		table.string('name');
		table.integer('brand_set_id').unsigned();

		table.integer('base_set_size').unsigned();
		table.integer('total_set_size').unsigned();
		table.smallint('added_cards_qty').unsigned().defaultTo(0);

		table.integer('page_views').unsigned().defaultTo(0);

		table.string('img_src');
		table.text('info');

		table.unique(['slug'], { indexName: 'sc_set_slug' });
		table.index(['year'], { indexName: 'sc_set_year_idx' });
		table.index(['brand'], { indexName: 'sc_set_brand_idx' });
		table.index(['sport'], { indexName: 'sc_set_sport_idx' });

		table.date('release_date');

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
