export const brandTableName = 'sc_brands';

/**
 * Full model schema
 */
export type BrandModel = {
	id: number;
	slug: string;
	name: string;
	start_year?: number | null;
	end_year?: number | null;
	img_src?: string | null;
	info?: string | null;
	created_at?: string;
	updated_at?: string | null;
};
