export const tableName = 'sc_brand_sets';

/**
 * Full model schema
 */
export interface BrandSetModel {
	id: number;
	slug: string;
	brand_id: number;
	name: string;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
