const tableName = 'sc_brands';

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert([
		{
			name: 'Bowman',
			slug: slugify('Bowman'),
			img_src: '/img/brands/bowman_logo.png',
		},
		{
			name: 'Donruss',
			slug: slugify('Donruss'),
			img_src: '/img/brands/donruss_logo.png',
		},
		{
			name: 'Fleer',
			slug: slugify('Fleer'),
			img_src: '/img/brands/fleer_logo.png',
		},
		{ name: 'Goudey', slug: slugify('Goudey') },
		{
			name: 'Leaf',
			slug: slugify('Leaf'),
			img_src: '/img/brands/leaf_cards_logo.png',
		},
		{
			name: 'NetPro',
			slug: slugify('NetPro'),
			img_src: '/img/brands/netpro_logo.png',
		},
		{
			name: 'O-Pee-Chee',
			slug: slugify('O-Pee-Chee'),
			img_src: '/img/brands/o-pee-chee_logo.png',
		},
		{
			name: 'Pacific',
			slug: slugify('Pacific'),
			img_src: '/img/brands/pacific_logo.jpg',
		},
		{
			name: 'Panini',
			slug: slugify('Panini'),
			img_src: '/img/brands/panini-logo.png',
		},
		{
			name: 'Pinnacle',
			slug: slugify('Pinnacle'),
			img_src: '/img/brands/pinnacle_logo.png',
		},
		{
			name: 'Topps',
			slug: slugify('Topps'),
			img_src: '/img/brands/topps_logo.svg',
		},
		{ name: 'SAGE', slug: slugify('SAGE'), img_src: '/img/brands/sage-logo.png' },
		{
			name: 'Skybox',
			slug: slugify('Skybox'),
			img_src: '/img/brands/skybox_logo.png',
		},
		{ name: 'Ultra', slug: slugify('Ultra') },
		{
			name: 'Upper Deck',
			slug: slugify('Upper Deck'),
			img_src: '/img/brands/upper-deck_logo.png',
		},
	]);
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
