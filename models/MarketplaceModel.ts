export const marketplaceTableName = 'marketplaces';

/**
 * Full model schema
 */
export interface MarketplaceModel {
	id: number;
	slug: string;
	name: string;
	url: string;
	img_src?: string | null;

	created_at: string;
	updated_at: string;
}
