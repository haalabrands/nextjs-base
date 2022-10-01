export const tableName = 'sc_leagues';

/**
 * Full model schema
 */
export interface LeagueModel {
	id: number;
	slug: string;
	name: string;
	sport_id: number;
	abbreviation: string | null;
	img_src: string | null;
	created_at: string;
	updated_at: string;
}
