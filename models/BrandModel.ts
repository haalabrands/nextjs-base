export const brandTableName = 'brands';

/**
 * Full model schema
 */
export interface BrandModel {
	id: number;
	slug: string;
	name: string;
	type: string;
	is_active: boolean;
	domain?: string|null;
	homepage_url?: string|null;
	img_src?: string|null;

	creator_user_id: number;
	owner_user_id: number;

	created_at: string;
	updated_at: string|null;
	deactivated_at: string|null;
}
