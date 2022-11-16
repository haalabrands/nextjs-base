export const channelTableName = 'channels';

/**
 * Full model schema
 */
export interface ChannelModel {
	id: number;
	brand_id: number;
	marketplace_slug: string;
	is_active: boolean;
	status: string;
	name: string;
	shop_url?: string|null;

	creator_user_id: number;
	owner_user_id: number;

	shop_data?: JSON;

	created_at: string;
	updated_at?: string|null;
	connected_at?: string|null;
	orders_last_import_at?: string|null;
	feedback_last_import_at?: string|null;
	listings_last_sync_at?: string|null;
}
