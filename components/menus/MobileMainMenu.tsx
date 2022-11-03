import { Disclosure } from '@headlessui/react';
import {
	ArchiveBoxIcon,
	BanknotesIcon,
	HomeIcon,
	PaintBrushIcon,
	ShoppingBagIcon,
	WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

/*interface Props {}*/

const menu = [
	{ name: 'Dashboard', href: '/app', icon: HomeIcon, current: false },
	{
		name: 'Inventory',
		href: '/app/inventory',
		icon: ArchiveBoxIcon,
	},
	{
		name: 'Shops',
		href: '/app/shop',
		icon: ShoppingBagIcon,
		subs: [
			{ name: 'Reports', href: '/app/shop/reports' },
			{ name: 'Brands', href: '/app/shop/brands' },
			{ name: 'Shops', href: '/app/shop/channels' },
			{ name: 'Listings', href: '/app/shop/listings' },
			{ name: 'Orders', href: '/app/shop/orders' },
			{ name: 'Shipments', href: '/app/shop/shipments' },
			{ name: 'Customers', href: '/app/shop/customers' },
			{ name: 'Settings', href: '/app/shop/settings' },
		],
	},
	{
		name: 'Projects',
		href: '/app/projects',
		icon: PaintBrushIcon,
		current: false,
	},
	{ name: 'Investments', href: '/app/invest', icon: BanknotesIcon, current: true },
	{
		name: 'Admin',
		href: '/app/admin',
		icon: WrenchScrewdriverIcon,
		current: false,
		subs: [
			{ name: 'Logs', href: '/app/admin/logs', current: false },
			{ name: 'Text & Language', href: '/app/admin/language', current: false },
		],
	},
];

const MobileMainMenu = (): JSX.Element => {
	return (
		<>
			{menu.map((item) => (
				<Disclosure.Button
					key={item.name}
					as="a"
					href={item.href}
					className="block px-4 py-2 text-base font-medium text-gray-400 hover:text-gray-50"
				>
					{item.name}
				</Disclosure.Button>
			))}
		</>
	);
};

export default MobileMainMenu;
