export const tableName = 'sc_cards';

/**
 * Full model schema
 */
export interface CardModel {
	id: number;
	slug: string;
	year: number;
	brand_id: number;
	set_id: number;
	set_group_id: number | null;
	set_parallel_id: number | null;
	card_number: string;
	serial_number: number;
	player_ids: JSON | null;
	team_ids: JSON | null;
	is_rookie: boolean;
	is_auto: boolean;
	is_relic: boolean;
	is_diecut: boolean;
	is_sticker: boolean;
	is_checklist: boolean;
	is_multiplayer: boolean;
	has_error: boolean;
	img_src: string | null;
	info: string | null;
	created_at: string;
	updated_at: string;
}
