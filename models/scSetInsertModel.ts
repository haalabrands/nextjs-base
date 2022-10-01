export const tableName = 'sc_set_inserts';

/**
 * Full model schema
 */
export interface SetInsertModel {
	id: number;
	slug: string;
	set_id: number;
	insert_id: number;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
