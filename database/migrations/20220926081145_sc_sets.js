const tableName = 'sc_sets';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('slug', 100).notNullable();
		table.smallint('year').unsigned().notNullable();
		table.smallint('year_end').unsigned();
		table.integer('brand_id').unsigned().notNullable();
		table.integer('brand_set_id').unsigned().notNullable();

		table.smallint('card_qty').unsigned();
		table.date('release_date');

		table.integer('page_views').unsigned().defaultTo(0);

		table.string('img_src');
		table.text('info');

		table.unique(['slug'], { indexName: 'sc_set_slug' });

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
