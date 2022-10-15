export const setTableName = 'sc_sets';

/**
 * Full model schema
 */
export interface SetModel {
	id: number;
	slug: string;
	year: number;
	brand: string;
	sport: string;
	brand_set_id: number | null;
	name: string | null;
	base_set_size: number | null;
	total_set_size: number | null;
	added_cards_qty: number;
	release_date: string | null;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
