import { Disclosure, Menu } from '@headlessui/react';
import LogoutButton from '../buttons/LogoutButton';

interface Props {
	isAuthenticated: boolean;
	isMobile: boolean;
}

const menu = [
	{label: 'Account Settings', slug: 'settings', uri: 'account/settings'},
	{label: 'My Brands', slug: 'brands', uri: 'brands'},
];

const UserMenu = ({isAuthenticated, isMobile = false}: Props): JSX.Element => {
	return (
		<>
			{menu.map((item) => {
				const key = `UserMenu${item.slug}`;
				const href = `/app/my/${item.uri}`;
				if (isMobile) {
					return (
						<Disclosure.Button
							key={key}
							as="a"
							href={href}
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
						>
							{item.label}
						</Disclosure.Button>
					);
				} else {
					return (
						<Menu.Item key={key}>
							<a href={href} className="block px-4 py-2 text-sm text-gray-700">
								{item.label}
							</a>
						</Menu.Item>
					);
				}
			})}

			{
				(() => {
					if (isAuthenticated) {
						if (isMobile) {
							return (
								<Disclosure.Button
									key={`mobileUserMenuLogout`}
									as="a"
									href={`/app/logout`}
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
								>
									Sign Out
								</Disclosure.Button>
							);
						} else {
							return (
								<Menu.Item key="signoutBtnMobile">
									<LogoutButton/>
								</Menu.Item>
							);
						}
					}
				})()
			}
		</>
	);
};

export default UserMenu;
