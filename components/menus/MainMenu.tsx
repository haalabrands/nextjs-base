import {
	ArchiveBoxIcon,
	BanknotesIcon,
	HomeIcon,
	PaintBrushIcon,
	ShoppingBagIcon,
	WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { classNames } from '../../util/helpers';

interface Props {
	activeModule: string
}

const menu = [
	{
		label: 'Dashboard',
		slug: 'dashboard',
		icon: HomeIcon
	},
	{
		label: 'Inventory',
		slug: 'inventory',
		icon: ArchiveBoxIcon,
	},
	{
		label: 'Shops',
		slug: 'shops',
		icon: ShoppingBagIcon,
		subs: [
			{ label: 'Reports', slug: 'reports' },
			{ label: 'Brands', slug: 'brands' },
			{ label: 'Shops', slug: 'channels' },
			{ label: 'Listings', slug: 'listings' },
			{ label: 'Orders', slug: 'orders' },
			{ label: 'Shipments', slug: 'shipments' },
			{ label: 'Customers', slug: 'customers' },
			{ label: 'Settings', slug: 'settings' },
		],
	},
	{
		label: 'Projects',
		slug: 'projects',
		icon: PaintBrushIcon
	},
	{
		label: 'Investments',
		slug: 'invest',
		icon: BanknotesIcon
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

const MainMenu = ({ activeModule }: Props): JSX.Element => {
	return (
		<>
			{menu.map((item) => {
				const uri = item.slug === 'dashboard' ? '' : item.slug;
				const href = '/app/'+uri;

				const activeLink = activeModule === item.slug;

				return (
					<a
						key={item.slug}
						href={href}
						className={classNames(
							activeLink
								? 'border-red text-white'
								: 'border-transparent text-gray-300 hover:text-white hover:border-jacarta-300',
							'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
						)}
						aria-current={activeLink ? 'page' : undefined}
					>
						{item.label}
					</a>
				)
			})}
		</>
	);
};

export default MainMenu;
