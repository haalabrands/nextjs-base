const tableName = 'sc_players';

const sportId = (sportSlug) => {
	switch (sportSlug) {
		case 'baseball':
			return 1;
		case 'basketball':
			return 2;
		case 'football':
			return 3;
		case 'hockey':
			return 4;
		case 'mma':
			return 5;
		case 'soccer':
			return 6;
		case 'tennis':
			return 7;
		case 'wrestling':
			return 8;
		case 'golf':
			return 9;
		case 'auto-racing':
			return 10;
		case 'cricket':
			return 11;
		case 'rugby':
			return 12;
		default:
			throw Error('Missing sport for slug value: "' + sportSlug + '"');
			return null;
	}
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	let insertData = [];

	players.forEach((player) => {
		player.slug = slugify(player.name);
		insertData.push(player);
	});

	await knex(tableName).insert(insertData);
};

const players = [
	{
		name: 'Michael Jordan',
		rookie_year: 1984,
		final_year: 2003,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('basketball')]),
		numbers: JSON.stringify([23, 45]),
		aliases: JSON.stringify(['Air Jordan', 'Mike', 'His Airness', 'the GOAT']),
		img_src: '/img/players/j/michael-jordan.jpg',
		birthdate: '1963-08-17',
		height_cm: 198,
		weight_kg: 89,
		hof_year: 2009,
		bat_side: 'right',
		throw_side: 'right',
		shoot_side: 'right',
		draft_round: 1,
		draft_pick: 3,
	},
	{
		name: 'Tom Brady',
		rookie_year: 2000,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('football')]),
		numbers: JSON.stringify([12]),
		aliases: JSON.stringify([
			'TB12',
			'Tom Terrific',
			'Touchdown Tom',
			'the GOAT',
			'Comeback Kid',
		]),
		img_src: '/img/players/b/tom-brady.jpg',
		birthdate: '1977-08-03',
		height_cm: 193,
		weight_kg: 102,
		throw_side: 'right',
		draft_round: 6,
		draft_pick: 199,
	},
	{
		name: 'Mickey Mantle',
		rookie_year: 1951,
		final_year: 1968,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('baseball')]),
		numbers: JSON.stringify([6, 7]),
		img_src: '/img/players/m/mickey-mantle.jpg',
		birthdate: '1931-10-20',
		deathdate: '1995-08-13',
		height_cm: 180,
		weight_kg: 88,
		bat_side: 'both',
		throw_side: 'right',
		hof_year: 1974,
	},
	{
		name: 'Wayne Gretzky',
		rookie_year: 1978,
		final_year: 1999,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('hockey')]),
		numbers: JSON.stringify([99]),
		img_src: '/img/players/g/wayne-gretzky.jpg',
		birthdate: '1961-01-26',
		shoot_side: 'left',
		hof_year: 1999,
		height_cm: 183,
		weight_kg: 83,
	},
	{
		name: 'Tiger Woods',
		rookie_year: 1996,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('golf')]),
		img_src: '/img/players/w/tiger-woods.jpg',
		birthdate: '1975-12-30',
		swing_side: 'right',
	},
	{
		name: 'Cristiano Ronaldo',
		rookie_year: 2001,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('soccer')]),
		img_src: '/img/players/r/cristiano-ronaldo.jpg',
		birthdate: '1985-02-05',
	},
	{
		name: 'Conor McGregor',
		rookie_year: 2008,
		talent_level: 'generational',
		sport_ids: JSON.stringify([sportId('mma')]),
		img_src: '/img/players/m/conor-mcgregor.jpg',
		birthdate: '1988-07-14',
	},
	{
		name: 'Serena Williams',
		rookie_year: 1995,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('tennis')]),
		img_src: '/img/players/w/serena-williams.jpg',
		birthdate: '1981-09-26',
	},
	{
		name: 'Hulk Hogan',
		rookie_year: 1977,
		final_year: 2012,
		talent_level: 'legend',
		sport_ids: JSON.stringify([sportId('wrestling')]),
		img_src: '/img/players/h/hulk-hogan.jpg',
		birthdate: '1953-08-11',
	},
];

const slug = (name, prefix = null) => {
	let str = slugify(name);
	return prefix ? prefix.toLowerCase() + '-' + str : str;
};

function slugify(str) {
	str = str.replace(/^\s+|\s+$/g, '');

	// Make the string lowercase
	str = str.toLowerCase();

	// Remove accents, swap ñ for n, etc
	var from =
		'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
	var to =
		'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	// Remove invalid chars
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		// Collapse whitespace and replace by -
		.replace(/\s+/g, '-')
		// Collapse dashes
		.replace(/-+/g, '-');

	return str;
}
