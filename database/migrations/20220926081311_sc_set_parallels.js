const tableName = 'sc_set_parallels';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.integer('set_id').unsigned().notNullable();
		table.integer('set_group_id').unsigned().notNullable();
		table.integer('brand_parallel_id').unsigned().notNullable();
		-table.smallint('max_print').unsigned();

		table.integer('page_views').unsigned().defaultTo(0);

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
