const tableName = 'marketplaces';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(tableName).del();

	await knex(tableName).insert([
		{ id: 1, slug: 'amazon', name: 'Amazon', url: 'https://amazon.com', img_src: '/img/empty-image.min.png' },
		{ id: 2, slug: 'ebay', name: 'eBay', url: 'https://ebay.com', img_src: '/img/empty-image.min.png' },
		{ id: 3, slug: 'etsy', name: 'Etsy', url: 'https://etsy.com', img_src: '/img/empty-image.min.png' },
	]);
};
