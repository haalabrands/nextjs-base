export const playerTableName = 'sc_players';

/**
 * Full model schema
 */
export interface PlayerModel {
	id: number;
	slug: string;
	name: string;

	birthdate?: string | null;
	deathdate?: string | null;
	height_cm?: number | null;
	weight_kg?: number | null;
	bat_side?: string | null;
	shoot_side?: string | null;
	swing_side?: string | null;
	throw_side?: string | null;

	rookie_year?: number | null;
	final_year?: number | null;
	draft_round?: number | null;
	draft_pick?: number | null;
	hof_year?: number | null;

	value_category?: string | null;
	cards_qty?: number;

	img_src: string | null;
	info?: string | null;

	numbers?: JSON | null;
	sport_ids?: JSON | null;
	team_ids?: JSON | null;
	roster_ids?: JSON | null;
	achievement_ids?: JSON | null;
	aliases?: JSON | null;

	created_at: string;
	updated_at: string;
}
