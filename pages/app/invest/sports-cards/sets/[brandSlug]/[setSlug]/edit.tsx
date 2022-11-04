import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../../../layouts/AuthLayout';
import SportsCardMenuCard from '../../../../../../../components/cards/SportsCardMenuCard';
import config from '../../../../../../../config';
import { PlusIcon } from '@heroicons/react/24/outline';
import CardBoxRow from '../../../../../../../components/sports-cards/CardBoxRow';
import CardSetRow from '../../../../../../../components/sports-cards/CardSetRow';

const pageSlug = 'sets';
const baseApiUrl = config.sportsCardApiUrl;
//const basePageUrl = config.sportsCardPageUrl;

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
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
								Boxes & Packs
							</h3>

							<CardBoxRow name="Hobby Box" enabled={true} open={true} />

							<div className="my-8 relative mx-8">
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center">
									<button
										type="button"
										className="inline-flex items-center rounded-full border border-gray-300 bg-jacarta-500 px-4 py-1.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<PlusIcon
											className="-ml-1.5 mr-1 h-5 w-5 text-white"
											aria-hidden="true"
										/>
										<span>Add Box</span>
									</button>
								</div>
							</div>
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
							<h3 className="cardHeadline mt-4">
								{pageTitle}
							</h3>
							<div>
								<div className="py-2">
									<div className="">
										<label
											htmlFor="sport"
											className="block text-sm font-semibold leading-6 text-gray-900"
										>
											Sport
										</label>
										<div className="mt-1">
											<select
												id="sport"
												name="sport_slug"
												value={set.sport}
												onChange={changeSport}
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
											>
												<option></option>
												{sports && sports.map((sport: any) => {
													return <option key={sport.slug} value={sport.slug}>{sport.name}</option>;
												})}
											</select>
										</div>
									</div>
								</div>
								<div className="py-2">
									<div className="">
										<label
											htmlFor="setYear"
											className="block text-sm font-semibold leading-6 text-gray-900"
										>
											Year
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="setYear"
												name="year"
												value={set.year}
												onChange={changeYear}
												className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="py-2">
									<div className="">
										<label
											htmlFor="sport"
											className="block text-sm font-semibold leading-6 text-gray-900"
										>
											Sport
										</label>
										<div className="mt-1">
											<select
												id="brand"
												name="brand_slug"
												value={set.brand}
												onChange={changeBrand}
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
											>
												<option></option>
												{brands && brands.map((brand: any) => {
													return <option key={brand.slug} value={brand.slug}>{brand.name}</option>;
												})}
											</select>
										</div>
									</div>
								</div>
								<div className="py-2">
									<div className="">
										<label
											htmlFor="setName"
											className="block text-sm font-semibold leading-6 text-gray-900"
										>
											Set Name
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="setName"
												name="name"
												value={set.name}
												onChange={changeSetName}
												className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="py-2">
									<div className="">
										<label
											htmlFor="releaseDate"
											className="block text-sm font-semibold leading-6 text-gray-900"
										>
											Release Date
										</label>
										<div className="mt-1">
											<input
												type="text"
												id="releaseDate"
												name="release_date"
												className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="py-2">
									<label
										htmlFor="setImage"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Set Photo
									</label>
									<div className="mt-1 flex items-center">
										<span className="w-24 max-w-24 aspect-ratio-card overflow-hidden bg-gray-100">
											<img
												src="/img/empty-card.jpg"
												className="h-full object-contain"
												alt=""
											/>
										</span>
										<button
											type="button"
											className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Add|Change
										</button>
									</div>
								</div>

								<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
									Sub Sets & Inserts
								</h3>
								<CardSetRow name="Base Set" enabled={true} open={true} />

								<div className="border-t border-t-gray-300 my-4"></div>

								<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
									Inserts
								</h3>

								<div className="my-8 relative mx-8">
									<div
										className="absolute inset-0 flex items-center"
										aria-hidden="true"
									>
										<div className="w-full border-t border-gray-300"></div>
									</div>
									<div className="relative flex justify-center">
										<button
											type="button"
											className="inline-flex items-center rounded-full border border-gray-300 bg-jacarta-500 px-4 py-1.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
												className="-ml-1.5 mr-1 h-5 w-5 text-white"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 4.5v15m7.5-7.5h-15"
												></path>
											</svg>
											<span>Add Insert</span>
										</button>
									</div>
								</div>
							</div>
						</header>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
								Parallels
							</h3>

							<div className="py-2">
								<label
									htmlFor="p1Name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Parallel Name
								</label>
								<div className="mt-1">
									<input
										type="text"
										id="p1Name"
										step="1"
										className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
							<div className="py-2">
								<label
									htmlFor="p1PrintMax"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Max Print
								</label>
								<div className="mt-1">
									<input
										type="number"
										id="p1PrintMax"
										className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
							<div className="py-2">
								<label
									htmlFor="p1Serial"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Serial Number
								</label>
								<div className="mt-1">
									<input
										type="number"
										id="p1Serial"
										className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div className="my-8 relative mx-8">
								<div
									className="absolute inset-0 flex items-center"
									aria-hidden="true"
								>
									<div className="w-full border-t border-gray-300"></div>
								</div>
								<div className="relative flex justify-center">
									<button
										type="button"
										className="inline-flex items-center rounded-full border border-gray-300 bg-jacarta-500 px-4 py-1.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="-ml-1.5 mr-1 h-5 w-5 text-white"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 4.5v15m7.5-7.5h-15"
											></path>
										</svg>
										<span>Add Parallel</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
