export const setTableName = 'sc_sets';

/**
 * Full model schema
 */
export interface SetModel {
	id: number;
	slug: string;
	year: number;
	year_end: number | null;
	brand_id: number;
	brand_set_id: number;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
