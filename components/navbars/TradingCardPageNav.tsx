import { classNames } from '../../util/helpers';
import Link from 'next/link';

interface Props {
	activeTab: string;
	addNew?: any;
	addNewLabel?: string;
	searchHandler?: any;
}

const baseUrl = '/app/invest/sports-cards';

const tabs = [
	{ slug: '', label: 'Overview', current: false },
	{ slug: 'shop', label: 'Shop', current: false },
	{ slug: 'watchlist', label: 'Watchlist', current: false },
	{ slug: 'collections', label: 'Collections', current: false },
	{ slug: 'players', label: 'Players', current: false },
	{ slug: 'sports', label: 'Sports', current: false },
	{ slug: 'sets', label: 'Brands & Sets', current: false },
	{ slug: 'reports', label: 'Reports', current: false },
];

const TradingCardPageNav = ({
	activeTab,
	addNew = null,
	addNewLabel = 'Add New',
	searchHandler = null,
}: Props): JSX.Element => {
	const isActiveTab = (tabSlug: string): boolean => {
		return tabSlug === activeTab;
	};

	return (
		<div className="relative border-b border-gray-200 pb-5 sm:pb-0">
			<div className="md:flex md:items-center md:justify-between">
				<div className="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
					{searchHandler && (
						<button
							type="button"
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
							onClick={searchHandler}
						>
							Search
						</button>
					)}
					{typeof addNew === 'string' ? (
						<Link href={addNew}>
							<a className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								{addNewLabel}
							</a>
						</Link>
					) : addNew ? (
						<button
							type="button"
							className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							{addNewLabel}
						</button>
					) : (
						''
					)}
				</div>
			</div>
			<div className="mt-4">
				<div className="sm:hidden">
					<select
						id="current-tab"
						name="current-tab"
						className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						defaultValue={activeTab}
					>
						{tabs.map((tab) => (
							<option key={tab.slug}>{tab.label}</option>
						))}
					</select>
				</div>
				<div className="hidden sm:block">
					<nav className="-mb-px flex space-x-8">
						{tabs.map((tab) => (
							<a
								key={tab.slug}
								href={`${baseUrl}/${tab.slug}`}
								className={classNames(
									isActiveTab(tab.slug)
										? 'border-indigo-500 text-indigo-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
									'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
								)}
								aria-current={isActiveTab(tab.slug)}
							>
								{tab.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default TradingCardPageNav;
