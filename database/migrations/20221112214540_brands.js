const tableName = 'brands';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.string('slug', 20).notNullable();
		table.string('name', 191).notNullable();
		table.enum('type', ['business', 'personal']).defaultTo('personal');
		table.boolean('is_active').defaultTo(true);
		table.string('domain', 191);
		table.string('homepage_url', 191);
		table.string('img_src');

		table.integer('creator_user_id').unsigned().notNullable();
		table.integer('owner_user_id').unsigned().notNullable();

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
		table.timestamp('deactivated_at');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
	await knex.schema.dropTable(tableName);
};
