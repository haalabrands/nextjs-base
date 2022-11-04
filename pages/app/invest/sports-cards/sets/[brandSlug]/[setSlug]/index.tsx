import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../../../layouts/AuthLayout';
import SportsCardMenuCard from '../../../../../../../components/cards/SportsCardMenuCard';
import config from '../../../../../../../config';
import Link from 'next/link';
import { classNames } from '../../../../../../../util/helpers';
import TradingCard from '../../../../../../../components/modules/TradingCards/TradingCard';
//import { PlusIcon } from '@heroicons/react/24/outline';
//import CardBoxRow from '../../../../../../../components/sports-cards/CardBoxRow';
//import CardSetRow from '../../../../../../../components/sports-cards/CardSetRow';

const pageSlug = 'sets';
const baseApiUrl = config.sportsCardApiUrl;
const basePageUrl = config.sportsCardPageUrl;

const tabs = [
	{ name: 'Overview', slug: 'overview', current: true },
	{ name: 'Cards', slug: 'cards', current: false },
/*	{ name: 'Base Cards', slug: '#', current: false },
	{ name: 'Inserts', slug: '#', current: false },
	{ name: 'Parallels', slug: '#', current: false },*/
	{ name: 'Players', slug: 'players', current: false },
	{ name: 'Media', slug: 'media', current: false },
	{ name: 'Events', slug: 'events', current: false },
	{ name: 'Price History', slug: 'prices', current: false },
	{ name: 'Shop', slug: 'prices', current: false },
];

const cards = [
	{
		id: 1,
		name: 'Card Name',
		href: '#',
		img_src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		img_alt: "",
	},
	{
		id: 2,
		name: 'Card Name',
		href: '#',
		img_src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
		img_alt: "",
	},
	{
		id: 3,
		name: 'Card Name',
		href: '#',
		img_src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
		img_alt: "",
	},
	{
		id: 4,
		name: 'Card Name',
		href: '#',
		img_src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
		img_alt: "",
	},
	// More products...
]

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	/*// Call API to get all available brands
	const res = await fetch(`${baseApiUrl}/brands`);
	const brands = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = brands.map((brand) => ({
		params: { brandSlug: brand.slug },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };*/

	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking' //indicates the type of fallback
	}
}

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const brandSlug = params?.brandSlug;
	const setSlug = params?.setSlug;

	// Get all sets for this brand
	const setRes = await fetch(baseApiUrl +'/'+pageSlug+'/'+setSlug);
	const set = await setRes.json();

	// Get the active brand details
	const brandRes = await fetch(baseApiUrl +'/brands/'+brandSlug);
	const brand = await brandRes.json();

	// Get list of brands
	const brandsRes = await fetch(baseApiUrl +'/brands/');
	const brands = await brandsRes.json();

	// Get list of sports
	const sportRes = await fetch(baseApiUrl +'/sports/');
	const sports = await sportRes.json();

	// the Page component will receive props below at build time
	return {
		props: {
			brand: JSON.stringify(brand),
			brands: JSON.stringify(brands),
			set: JSON.stringify(set),
			sports: JSON.stringify(sports),
		},
	};
};

const Page: NextPage = ({ brand, brands, set, sports }: any) => {
	brand = JSON.parse(brand);
	set = JSON.parse(set);
	sports = JSON.parse(sports);
	brands = JSON.parse(brands);

	const pageTitle = `${set.year} ${brand.name} ${set.name}`;

	return (
		<AuthLayout>
			<div className="pageContainer columns">
				{/* Left column */}
				<div className="pageSideColumn hidden w-56 xl:block">
					<SportsCardMenuCard activeSlug={pageSlug} />

					<div className="pageCard p-4">
						<h2 className="cardTitle">
							Empty Card
						</h2>
						<div className="mt-4">

						</div>
					</div>
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded">
						<header>
							<h2 className="cardTitle">
								Sports Cards
							</h2>
							<h1 className="cardHeadline mt-4">
								{pageTitle}
							</h1>
							<div className="mt-1 uppercase font-bold text-xs text-gray-500">
								<Link href={`${basePageUrl}/sports/${set.sport}`}>
									<a className="hover:text-indigo-500">{set.sport}</a>
								</Link>
							</div>
							<div className="">
								<div className="sm:hidden">
									<label htmlFor="tabs" className="sr-only">
										Select a tab
									</label>
									{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
									<select
										id="tabs"
										name="tabs"
										className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										defaultValue={tabs.find((tab) => tab.current).name}
									>
										{tabs.map((tab) => (
											<option key={tab.slug}>{tab.name}</option>
										))}
									</select>
								</div>
								<div className="hidden sm:block">
									<div className="border-b border-gray-100">
										<nav className="-mb-px flex space-x-8" aria-label="Tabs">
											{tabs.map((tab) => (
												<a
													key={tab.slug}
													href={tab.slug}
													className={classNames(
														tab.current
															? 'border-indigo-500 text-indigo-600'
															: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
														'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
													)}
													aria-current={tab.current ? 'page' : undefined}
												>
													{tab.name}
												</a>
											))}
										</nav>
									</div>
								</div>
							</div>
						</header>
						<div className="mt-8">
							<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
								{cards.map((card) => (
									<TradingCard id={card.id} title={card.name} />
								))}
							</div>
							<div className="mt-10">

							</div>
						</div>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard">
						<div className="w-full px-4 pb-4">
							<dl className="grid grid-cols-2 gap-x-4 gap-y-8">

								<div className="border-t-2 border-transparent pt-4">
									<dt className="text-base font-medium text-gray-500">Cards</dt>
									<dd className="text-3xl font-bold tracking-tight text-gray-900">300</dd>
								</div>

								<div className="border-t-2 border-transparent pt-4">
									<div className="flex-shrink-0 self-center">
										<svg className="cardStdAspectRatio border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
											<path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0"></path>
										</svg>
									</div>
								</div>

								<div className="border-t-2 border-gray-100 pt-4">
									<dt className="text-base font-medium text-gray-500">Inserts</dt>
									<dd className="text-3xl font-bold tracking-tight text-gray-900">5</dd>
								</div>

								<div className="border-t-2 border-gray-100 pt-4">
									<dt className="text-base font-medium text-gray-500">Parallels</dt>
									<dd className="text-3xl font-bold tracking-tight text-gray-900">12</dd>
								</div>
							</dl>

							<dl className="mt-4 flex flex-col gap-y-4">
								<div className="border-t-2 border-gray-100 pt-4">
									<dt className="text-base font-medium text-gray-500">Avg Price</dt>
									<dd className="text-xl font-bold tracking-tight text-gray-900">$25,123,456</dd>
								</div>
								<div className="border-t-2 border-gray-100 pt-4">
									<dt className="text-base font-medium text-gray-500">Highest Price</dt>
									<dd className="text-xl font-bold tracking-tight text-gray-900">$25,123,456</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
