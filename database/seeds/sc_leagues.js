const tableName = 'sc_leagues';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	let insertData = [];
	let name;
	let sportId;

	/*
	Baseball
	 */
	sportId = 1;
	name = 'Major League Baseball';
	insertData.push({
		abbreviation: 'MLB',
		slug: slug('MLB'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/mlb-logo.png',
	});

	/*
	Basketball
	 */
	sportId = 2;
	name = 'National Basketball Association';
	insertData.push({
		abbreviation: 'NBA',
		slug: slug('NBA'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/nba-logo.png',
	});

	/*
	American Football
	 */
	sportId = 3;
	name = 'National Football League';
	insertData.push({
		abbreviation: 'NFL',
		slug: slug('NFL'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/nfl-logo.png',
	});

	/*
	Hockey
	 */
	sportId = 4;
	name = 'National Hockey League';
	insertData.push({
		abbreviation: 'NHL',
		slug: slug('NHL'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/nhl-logo.png',
	});

	/*
	MMA
	 */
	sportId = 5;
	name = 'Ultimate Fighting Championship';
	insertData.push({
		abbreviation: 'UFC',
		slug: slug('UFC'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/ufc-logo.png',
	});

	/*
	Soccer
	 */
	sportId = 6;
	name = 'Fédération internationale de Football Association';
	insertData.push({
		abbreviation: 'FIFA',
		slug: slug('FIFA'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/fifa-logo.png',
	});

	/*
	Wrestling
	 */
	sportId = 8;
	name = 'World Wrestling Entertainment';
	insertData.push({
		abbreviation: 'WWE',
		slug: slug('WWE'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/wwe-logo.png',
	});

	/*
	Golf
	 */
	sportId = 9;
	name = 'Professional Golfers Association';
	insertData.push({
		abbreviation: 'PGA',
		slug: slug('PGA'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/pga-logo.png',
	});

	/*
	Racing
	 */
	sportId = 10;
	name = 'NASCAR';
	insertData.push({
		abbreviation: 'NASCAR',
		slug: slug(name),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/nascar-logo.png',
	});

	name = 'Formula One';
	insertData.push({
		abbreviation: 'F1',
		slug: slug('F1'),
		name: name,
		sport_id: sportId,
		img_src: '/img/leagues/formula1-logo.png',
	});

	await knex(tableName).insert(insertData);
};

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
