export const tableName = 'sc_set_boxes';

/**
 * Full model schema
 */
export interface SetBoxModel {
	id: number;
	set_id: number;
	brand_insert_id: number;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
