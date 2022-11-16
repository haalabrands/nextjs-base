export interface IUser {
	id: number;
	username: string;
	email: string;
	greeting: string;
	full_name: string;
	phone: string | null;
	avatar: string | null;
	password: string;
	created_at: string;
	updated_at: string;
}

export interface IUserSession {
	id?: number | null;
	username?: string | null;
	greeting?: string | null;
	avatar?: string | null;
}

/**
 * Input data collected during account registration
 */
export interface UserRegistrationProps {
	full_name: string;
	username: string;
	email: string;
	greeting?: string;
	avatar?: string | null;
	password: string;
	password_confirm?: string;
}

export const validationRules = {
	username: {
		minLength: 4,
		maxLength: 40,
	},
	email: {
		minLength: 6,
		maxLength: 100,
	},
	full_name: {
		minLength: 1,
		maxLength: 100,
	},
	greeting: {
		minLength: 1,
		maxLength: 40,
	},
	password: {
		minLength: 6,
		maxLength: 100,
	},
};
