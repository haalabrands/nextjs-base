const tableName = 'marketplaces';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('slug', 20).notNullable();
		table.string('name', 191).notNullable();
		table.string('url', 191).notNullable();
		table.string('img_src');

		table.unique(['slug']);

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
	await knex.schema.dropTable(tableName);
};
