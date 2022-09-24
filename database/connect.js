import knex from 'knex';
import knexfile from '../knexfile';

//const environment = process.env.NODE_ENV || 'local'

let cachedConnection;

const connect = () => {
	if (cachedConnection) {
		return cachedConnection;
	}

	const config = knexfile;
	//const config = knexfile[environment];

	if (!config) {
		throw new Error(
			`Failed to get knex configuration for env: ${process.env.NODE_ENV}`
		);
	}
	console.log('*** New knex db connection');
	const connection = knex(config);
	cachedConnection = connection;

	return connection;
};

export default connect;
