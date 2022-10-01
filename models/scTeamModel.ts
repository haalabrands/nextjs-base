export const tableName = 'sc_teams';

/**
 * Full model schema
 */
export interface SportTeamModel {
	id: number;
	slug: string;
	name: string;
	sport_id: number;
	established: number | null;
	first_year: number | null;
	last_year: number | null;
	players_qty: number;
	cards_qty: number;
	rosters_qty: number;
	img_src?: string | null;
	info?: string | null;
	aliases: JSON | null;
	created_at: string;
	updated_at: string;
}
