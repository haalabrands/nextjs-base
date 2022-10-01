export const tableName = 'sc_set_parallels';

/**
 * Full model schema
 */
export interface SetParallelModel {
	id: number;
	slug: string;
	set_id: number;
	brand_parallel_id: number;
	set_insert_id: number | null;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
