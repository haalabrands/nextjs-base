import { Menu } from '@headlessui/react';
import LogoutButton from '../buttons/LogoutButton';

interface Props {
	isAuthenticated: boolean,
}

const menu = [
	{ label: 'My Profile', slug: 'profile' },
	{ label: 'Account Settings', slug: 'settings' },
];

const UserMenu = ({ isAuthenticated }: Props): JSX.Element => {
	return (
		<>
			{menu.map((item) => (
				<Menu.Item key={`UserMenu${item.slug}`}>
					<a
						href={`/app/account/${item.slug}`}
						className='block px-4 py-2 text-sm text-gray-700'
					>
						{item.label}
					</a>
				</Menu.Item>
			))}

			{isAuthenticated && (
				<Menu.Item key="signoutBtn">
					<LogoutButton />
				</Menu.Item>
			)}
		</>
	);
};

export default UserMenu;
