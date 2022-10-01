const tableName = 'sc_set_boxes';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.integer('set_id').unsigned();

		table.smallint('cards_per_pack').unsigned();
		table.smallint('packs_per_box').unsigned();
		table.smallint('boxes_per_case').unsigned();

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
