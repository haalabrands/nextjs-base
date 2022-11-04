import { signOut } from 'next-auth/react';

interface Props {
	classes?: string;
	label?: string;
}

const LogoutButton = ({label = 'Sign Out', classes = 'block px-4 py-2 text-sm text-gray-700'}: Props): JSX.Element => {
	return (
		<button
			type="button"
			onClick={(e) => {
				e.preventDefault();
				signOut();
			}}
			className={classes}
		>
			{label}
		</button>
	);
};

export default LogoutButton;
