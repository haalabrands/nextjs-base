import { Disclosure, Menu } from '@headlessui/react';
import LogoutButton from '../buttons/LogoutButton';

interface Props {
	isAuthenticated: boolean,
}

const menu = [
	{ name: 'My Profile', href: '#' },
	{ name: 'Settings', href: '#' },
];

const MobileUserMenu = ({ isAuthenticated }: Props): JSX.Element => {
	return (
		<>
			{menu.map((item) => (
				<Disclosure.Button
					key={item.name}
					as="a"
					href={item.href}
					className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
				>
					{item.name}
				</Disclosure.Button>
			))}

			{isAuthenticated && (
				<Menu.Item key="signoutBtnMobile">
					<LogoutButton />
				</Menu.Item>
			)}
		</>
	);
};

export default MobileUserMenu;
