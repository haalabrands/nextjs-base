const tableName = 'sc_set_groups';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.integer('set_id').unsigned();
		table
			.enum('type', ['base', 'base_subset', 'insert', 'variant'])
			.notNullable();
		table.integer('brand_insert_id').unsigned();

		table.integer('set_size').unsigned();
		table.smallint('added_cards_qty').unsigned().defaultTo(0);
		table.string('num_prefix');
		table.string('num_start');
		table.string('num_end');

		table.mediumint('max_print');
		table.boolean('is_serialed');

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
