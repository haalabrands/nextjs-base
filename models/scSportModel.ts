export const sportTableName = 'sc_sports';

/**
 * Full model schema
 */
export interface SportModel {
	id: number;
	slug: string;
	name: string;
	img_src: string | null;
	created_at: string;
	updated_at: string;
}
