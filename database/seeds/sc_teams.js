const tableName = 'sc_teams';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	let insertData = [];
	let sportId;

	/*
	Baseball
	 */
	sportId = 1;
	currentMLBTeams.forEach(function (team) {
		team.sport_id = sportId;
		team.slug = slug(team.name, 'mlb');
		insertData.push(team);
	});

	/*
	Basketball
	 */
	sportId = 2;
	currentNBATeams.forEach(function (team) {
		team.sport_id = sportId;
		team.slug = slug(team.name, 'nba');
		insertData.push(team);
	});

	/*
	Football
	 */
	sportId = 3;
	currentNFLTeams.forEach(function (team) {
		team.sport_id = sportId;
		team.slug = slug(team.name, 'nfl');
		insertData.push(team);
	});

	/*
	Hockey
	 */
	sportId = 4;
	currentNHLTeams.forEach(function (team) {
		team.sport_id = sportId;
		team.slug = slug(team.name, 'nhl');
		insertData.push(team);
	});

	await knex(tableName).insert(insertData);
};

const slug = (name, prefix = null) => {
	let str = slugify(name);
	return prefix ? prefix.toLowerCase() + '-' + str : str;
};

const slugify = (str) => {
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
};

const currentMLBTeams = [
	{
		name: 'Arizona Diamondbacks',
		first_year: 1998,
	},
	{
		name: 'Atlanta Braves',
		first_year: 1871,
	},
	{
		name: 'Baltimore Orioles',
		first_year: 1901,
	},
	{
		name: 'Boston Red Sox',
		first_year: 1901,
	},
	{
		name: 'Chicago Cubs',
		first_year: 1874,
	},
	{
		name: 'Chicago White Sox',
		first_year: 1901,
	},
	{
		name: 'Cincinnati Reds',
		first_year: 1882,
	},
	{
		name: 'Cleveland Guardians',
		first_year: 1901,
	},
	{
		name: 'Colorado Rockies',
		first_year: 1993,
	},
	{
		name: 'Detroit Tigers',
		first_year: 1901,
	},
	{
		name: 'Houston Astros',
		first_year: 1962,
	},
	{
		name: 'Kansas City Royals',
		first_year: 1969,
	},
	{
		name: 'Los Angeles Angels',
		first_year: 1961,
	},
	{
		name: 'Los Angeles Dodgers',
		first_year: 1884,
	},
	{
		name: 'Miami Marlins',
		first_year: 1993,
	},
	{
		name: 'Milwaukee Brewers',
		first_year: 1969,
	},
	{
		name: 'Minnesota Twins',
		first_year: 1901,
	},
	{
		name: 'New York Mets',
		first_year: 1962,
	},
	{
		name: 'New York Yankees',
		first_year: 1901,
	},
	{
		name: 'Oakland Athletics',
		first_year: 1901,
	},
	{
		name: 'Philadelphia Phillies',
		first_year: 1883,
	},
	{
		name: 'Pittsburgh Pirates',
		first_year: 1882,
	},
	{
		name: 'San Diego Padres',
		first_year: 1969,
	},
	{
		name: 'San Francisco Giants',
		first_year: 1883,
	},
	{
		name: 'Seattle Mariners',
		first_year: 1977,
	},
	{
		name: 'St. Louis Cardinals',
		first_year: 1882,
	},
	{
		name: 'Tampa Bay Rays',
		first_year: 1998,
	},
	{
		name: 'Texas Rangers',
		first_year: 1961,
	},
	{
		name: 'Toronto Blue Jays',
		first_year: 1977,
	},
	{
		name: 'Washington Nationals',
		first_year: 1969,
	},
];

const currentNBATeams = [
	{
		name: 'Boston Celtics',
		first_year: 1946,
	},
	{
		name: 'Brooklyn Nets',
		first_year: 1976,
	},
	{
		name: 'New York Knicks',
		first_year: 1946,
	},
	{
		name: 'Philadelphia 76ers',
		first_year: 1949,
	},
	{
		name: 'Toronto Raptors',
		first_year: 1995,
	},
	{
		name: 'Chicago Bulls',
		first_year: 1966,
	},
	{
		name: 'Cleveland Cavaliers',
		first_year: 1970,
	},
	{
		name: 'Detroit Pistons',
		first_year: 1948,
	},
	{
		name: 'Indiana Pacers',
		first_year: 1976,
	},
	{
		name: 'Milwaukee Bucks',
		first_year: 1968,
	},
	{
		name: 'Atlanta Hawks',
		first_year: 1949,
	},
	{
		name: 'Charlotte Hornets',
		first_year: 1988,
	},
	{
		name: 'Miami Heat',
		first_year: 1988,
	},
	{
		name: 'Orlando Magic',
		first_year: 1989,
	},
	{
		name: 'Washington Wizards',
		first_year: 1961,
	},
	{
		name: 'Denver Nuggets',
		first_year: 1976,
	},
	{
		name: 'Minnesota Timberwolves',
		first_year: 1989,
	},
	{
		name: 'Oklahoma City Thunder',
		first_year: 1967,
	},
	{
		name: 'Portland Trail Blazers',
		first_year: 1970,
	},
	{
		name: 'Utah Jazz',
		first_year: 1974,
	},
	{
		name: 'Golden State Warriors',
		first_year: 1946,
	},
	{
		name: 'Los Angeles Clippers',
		first_year: 1970,
	},
	{
		name: 'Los Angeles Lakers',
		first_year: 1948,
	},
	{
		name: 'Phoenix Suns',
		first_year: 1968,
	},
	{
		name: 'Sacramento Kings',
		first_year: 1948,
	},
	{
		name: 'Dallas Mavericks',
		first_year: 1980,
	},
	{
		name: 'Houston Rockets',
		first_year: 1967,
	},
	{
		name: 'Memphis Grizzlies',
		first_year: 1995,
	},
	{
		name: 'New Orleans Pelicans',
		first_year: 2002,
	},
	{
		name: 'San Antonio Spurs',
		first_year: 1976,
	},
];

const currentNFLTeams = [
	{
		name: 'Arizona Cardinals',
		established: 1898,
		first_year: 1920,
		aliases: JSON.stringify([
			'The Cards',
			'The Gridbirds',
			'The Redbirds',
			'Birdgang',
			'The Big Red',
			'The Football Cardinals',
		]),
	},
	{
		name: 'Atlanta Falcons',
		first_year: 1966,
		aliases: JSON.stringify(['The Dirty Birds', 'Grits Blitz']),
	},
	{
		name: 'Baltimore Ravens',
		first_year: 1996,
	},
	{
		name: 'Buffalo Bills',
		first_year: 1960,
	},
	{
		name: 'Carolina Panthers',
		first_year: 1995,
	},
	{
		name: 'Chicago Bears',
		established: 1919,
		first_year: 1920,
	},
	{
		name: 'Cincinnati Bengals',
		established: 1967,
		first_year: 1968,
	},
	{
		name: 'Cleveland Browns',
		established: 1944,
		first_year: 1946,
	},
	{
		name: 'Dallas Cowboys',
		first_year: 1960,
	},
	{
		name: 'Denver Broncos',
		first_year: 1970,
	},
	{
		name: 'Detroit Lions',
		first_year: 1930,
	},
	{
		name: 'Green Bay Packers',
		first_year: 1921,
	},
	{
		name: 'Houston Texans',
		first_year: 2002,
	},
	{
		name: 'Indianapolis Colts',
		first_year: 1953,
	},
	{
		name: 'Jacksonville Jaguars',
		first_year: 1995,
	},
	{
		name: 'Kansas City Chiefs',
		first_year: 1970,
	},
	{
		name: 'Las Vegas Raiders',
		first_year: 1970,
	},
	{
		name: 'Los Angeles Chargers',
		first_year: 1970,
	},
	{
		name: 'Los Angeles Rams',
		first_year: 1937,
	},
	{
		name: 'Miami Dolphins',
		first_year: 1970,
	},
	{
		name: 'Minnesota Vikings',
		first_year: 1961,
	},
	{
		name: 'New England Patriots',
		first_year: 1970,
	},
	{
		name: 'New Orleans Saints',
		first_year: 1967,
	},
	{
		name: 'New York Giants',
		first_year: 1925,
	},
	{
		name: 'New York Jets',
		first_year: 1970,
	},
	{
		name: 'Philadelphia Eagles',
		first_year: 1933,
	},
	{
		name: 'Pittsburgh Steelers',
		first_year: 1933,
	},
	{
		name: 'San Francisco 49ers',
		first_year: 1950,
	},
	{
		name: 'Seattle Seahawks',
		first_year: 1976,
	},
	{
		name: 'Tampa Bay Buccaneers',
		first_year: 1976,
	},
	{
		name: 'Tennessee Titans',
		first_year: 1970,
	},
	{
		name: 'Washington Commanders',
		first_year: 1932,
	},
];

const currentNHLTeams = [
	{
		name: 'Boston Bruins',
		first_year: 1924,
	},
	{
		name: 'Buffalo Sabres',
		first_year: 1970,
	},
	{
		name: 'Detroit Red Wings',
		first_year: 1926,
	},
	{
		name: 'Florida Panthers',
		first_year: 1993,
	},
	{
		name: 'Montreal Canadiens',
		established: 1909,
		first_year: 1917,
	},
	{
		name: 'Ottawa Senators',
		first_year: 1992,
	},
	{
		name: 'Tampa Bay Lightning',
		first_year: 1992,
	},
	{
		name: 'Toronto Maple Leafs',
		first_year: 1917,
	},
	{
		name: 'Carolina Hurricanes',
		established: 1972,
		first_year: 1979,
	},
	{
		name: 'Columbus Blue Jackets',
		first_year: 2000,
	},
	{
		name: 'New Jersey Devils',
		first_year: 1974,
	},
	{
		name: 'New York Islanders',
		first_year: 1972,
	},
	{
		name: 'New York Rangers',
		first_year: 1926,
	},
	{
		name: 'Philadelphia Flyers',
		first_year: 1967,
	},
	{
		name: 'Pittsburgh Penguins',
		first_year: 1967,
	},
	{
		name: 'Washington Capitals',
		first_year: 1974,
	},
	{
		name: 'Arizona Coyotes',
		first_year: 1979,
	},
	{
		name: 'Chicago Blackhawks',
		first_year: 1926,
	},
	{
		name: 'Colorado Avalanche',
		established: 1972,
		first_year: 1979,
	},
	{
		name: 'Dallas Stars',
		first_year: 1967,
	},
	{
		name: 'Minnesota Wild',
		first_year: 2000,
	},
	{
		name: 'Nashville Predators',
		first_year: 1998,
	},
	{
		name: 'St. Louis Blues',
		first_year: 1967,
	},
	{
		name: 'Winnipeg Jets',
		first_year: 1999,
	},
	{
		name: 'Anaheim Ducks',
		first_year: 1993,
	},
	{
		name: 'Calgary Flames',
		first_year: 1972,
	},
	{
		name: 'Edmonton Oilers',
		established: 1972,
		first_year: 1979,
	},
	{
		name: 'Los Angeles Kings',
		first_year: 1967,
	},
	{
		name: 'San Jose Sharks',
		first_year: 1991,
	},
	{
		name: 'Seattle Kraken',
		first_year: 2021,
	},
	{
		name: 'Vancouver Canucks',
		established: 1945,
		first_year: 1970,
	},
	{
		name: 'Vegas Golden Knights',
		first_year: 2017,
	},
];
