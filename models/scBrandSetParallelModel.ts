export const tableName = 'sc_brand_set_parallels';

/**
 * Full model schema
 */
export interface BrandSetParallelModel {
	id: number;
	slug: string;
	name: string;
	brand_id: number;
	brand_set_id: number;
	brand_insert_id: number | null;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
