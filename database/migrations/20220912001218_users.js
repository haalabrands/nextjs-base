/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable('users', function (table) {
		table.increments('id');
		table.string('username', 40).notNullable();
		table.string('email', 191).notNullable();
		table.string('full_name', 191).notNullable();
		table.string('phone', 20);
		table.string('greeting', 40);
		table.string('password', 191);

		table.string('avatar', 191);

		table.unique('username');
		table.unique('email');

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTable('users');
};
