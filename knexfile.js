const { loadEnvConfig } = require('@next/env');

const isDevEnvironment = process.env.NODE_ENV !== 'production';
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = loadEnvConfig(
	'./',
	isDevEnvironment
).combinedEnv;

const migrationsTable = 'migrations';
const migrationsDir = './database/migrations';
const seederDir = './database/seeds';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: 'mysql2',
	connection: {
		host: DB_HOST,
		port: DB_PORT,
		database: DB_NAME,
		user: DB_USER,
		password: DB_PASSWORD,
	},
	acquireConnectionTimeout: 6000,
	pool: {
		min: 0,
		max: 2,
	},
	migrations: {
		tableName: migrationsTable,
		directory: migrationsDir,
	},
	seeds: {
		directory: seederDir,
	},

	/*test: {
		client: 'sqlite3',
		connection: {
			filename: './dev.sqlite3',
		},
		migrations: {
			tableName: migrationsTable,
			directory: migrationsDir,
		},
		seeds: {
			directory: seederDir,
		},
	},

	local: {
		client: 'mysql2',
		connection: {
			host: DB_HOST,
			port: DB_PORT,
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASSWORD,
		},
		acquireConnectionTimeout: 6000,
		pool: {
			min: 0,
			max: 2,
			/!*afterCreate: function (conn, done) {
        // in this example we use pg driver's connection API
        conn.query('SET timezone="UTC";', function (err) {
          if (err) {
            // first query failed,
            // return error and don't try to make next query
            done(err, conn);
          } else {
            // do the second query...
            conn.query(
              'SELECT set_limit(0.01);',
              function (err) {
                // if err is not falsy,
                //  connection is discarded from pool
                // if connection aquire was triggered by a
                // query the error is passed to query promise
                done(err, conn);
              });
          }
        });
      }*!/
		},
		migrations: {
			tableName: migrationsTable,
			directory: migrationsDir,
		},
		seeds: {
			directory: seederDir,
		},
	},

	production: {
		client: 'mysql2',
		connection: {
			host: DB_HOST,
			port: DB_PORT,
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASSWORD,
		},
		acquireConnectionTimeout: 6000,
		pool: {
			min: 0,
			max: 7,
		},
		migrations: {
			tableName: migrationsTable,
			directory: migrationsDir,
		},
		seeds: {
			directory: seederDir,
		},
	},*/
};
