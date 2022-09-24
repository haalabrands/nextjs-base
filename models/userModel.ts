/**
 * User model schema
 */
export interface UserProps {
	id: number;
	username: string;
	email: string;
	password: string;
	greeting: string;
	full_name: string;
	phone: string | null;
}

/**
 * Input data collected during account registration
 */
export interface UserRegistrationProps {
	full_name: string;
	username: string;
	email: string;
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
