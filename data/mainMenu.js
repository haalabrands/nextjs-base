import { HomeIcon, ShoppingBagIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

const menu = [
	{
		label: 'Dashboard',
		slug: 'dashboard',
		icon: HomeIcon
	},
	{
		label: 'Shops',
		slug: 'shops',
		icon: ShoppingBagIcon
	},
	{
		label: 'Admin',
		slug: 'admin',
		icon: WrenchScrewdriverIcon,
		subs: [
			{ label: 'Logs', slug: 'logs' },
			{ label: 'Text & Language', slug: 'language' },
		],
	},
];

export default menu;
