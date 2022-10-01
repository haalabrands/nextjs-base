export const tableName = 'sc_team_rosters';

/**
 * Full model schema
 */
export interface TeamRosterModel {
	id: number;
	slug: string;
	team_id: number;
	player_id: number;
	year: number;
	players_qty: number;
	cards_qty: number;
	info: string;
	created_at: string;
	updated_at: string;
}
