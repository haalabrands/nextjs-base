const tableName = 'channels';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
	await knex.schema.createTable(tableName, function (table) {
		table.increments('id');
		table.integer('brand_id').unsigned().notNullable();
		table.string('marketplace_slug').notNullable();
		table.boolean('is_active').defaultTo(true);
		table.enum('status', ['connected', 'disconnected', 'suspended']).defaultTo('disconnected');
		table.string('name', 191).notNullable();
		table.string('shop_url', 191);

		table.json('shop_data');

		table.integer('creator_user_id').unsigned().notNullable();
		table.integer('owner_user_id').unsigned().notNullable();

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
		table.timestamp('connected_at');
		table.timestamp('orders_last_import_at');
		table.timestamp('feedback_last_import_at');
		table.timestamp('listings_last_sync_at');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
	await knex.schema.dropTable(tableName);
};
