import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../../../components/navbars/TradingCardPageNav';
import config from '../../../../../../../config';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import CardBoxRow from '../../../../../../../components/sports-cards/CardBoxRow';
import CardSetRow from '../../../../../../../components/sports-cards/CardSetRow';

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
	const year = params?.year;
	const setSlug = params?.setSlug;
	console.log('brandSlug: ',brandSlug)
	console.log('year: ',year)
	console.log('setSlug: ',setSlug)

	/*// Get the active brand details
	const brandRes = await fetch(config.sportsCardApiUrl +'/brands/'+brandSlug);
	const brand = await brandRes.json();

	// Get all sets for this brand
	const setRes = await fetch(config.sportsCardApiUrl +'/'+pagePath+'/'+brandSlug);
	const sets = await setRes.json();*/

	// the Page component will receive props below at build time
	return {
		props: {
			//brand: JSON.stringify(brand),
			//sets: JSON.stringify(sets),
		},
	};
};

const Page: NextPage = (/*{ brand, sets }*/) => {
	const pageTitle = 'Trading Cards : Set XYZ';

	return (
		<AuthLayout>
			<div className="">
				<div className="bg-white pt-4 px-8">
					<PageHeader title={pageTitle} />
					<TradingCardPageNav activeTab="sets" />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<div className="pl-8 pt-4 bg-white">
						<Link href={config.sportsCardPageUrl + '/sets'}>
							<a className="text-sm text-indigo-500">&laquo; Card Brands</a>
						</Link>
						<Link href={config.sportsCardPageUrl + '/sets/xyz'}>
							<a className="block text-sm text-indigo-500">&laquo; XYZ Sets</a>
						</Link>
					</div>
					<div className="mx-auto w-full flex-grow lg:flex">
						<div className="min-w-0 flex-1 bg-white xl:flex lg:w-3/4 lg:flex-shrink-0">
							<div className="border-b border-gray-200 bg-white lg:w-1/3 lg:flex-shrink-0 lg:border-b-0 lg:border-r lg:border-gray-200">
								<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
									{/* Start left column */}
									<div className="relative h-full" style={{ minHeight: '12rem' }}>
										<div className="inset-0 rounded-lg border-2 border-dashed border-gray-200">
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
									{/* End left column */}
								</div>
							</div>

							<div className="bg-white lg:min-w-0 lg:w-2/3">
								<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
									{/* Start main column*/}
									<div className="relative h-full" style={{ minHeight: '36rem' }}>
										<div className="inset-0 rounded-lg border-2 border-dashed border-gray-200">
											<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
												Set Details
											</h3>

											<div className="py-2 px:4 lg:px-8">
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
															className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
														>
															<option></option>
															{/*{sports && sports.map((sport: any) => {
																return <option key={sport.slug} value={sport.slug}>{sport.name}</option>;
															})}*/}
														</select>
													</div>
												</div>
											</div>
											<div className="py-2 px:4 lg:px-8">
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
															className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														/>
													</div>
												</div>
											</div>
											<div className="py-2 px:4 lg:px-8">
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
															className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														/>
													</div>
												</div>
											</div>
											<div className="py-2 px:4 lg:px-8">
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
											<div className="py-2 px:4 lg:px-8">
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
									</div>
									{/* End main column */}
								</div>
							</div>
						</div>

						<div className="bg-gray-50 pr-4 sm:pr-6 lg:w-1/4 lg:flex-shrink-0 lg:border-b-0 lg:border-r lg:border-gray-200 lg:pr-8">
							<div className="h-full py-6 pl-6">
								{/* Start right column column */}
								<div className="relative h-full" style={{ minHeight: '16rem' }}>
									<div className="inset-0 rounded-lg border-2 border-dashed border-gray-200">
										<h3 className="text-center py-4 text-lg font-semibold text-gray-500 uppercase">
											Parallels
										</h3>

										<div className="py-2 px:4 lg:px-8">
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
										<div className="py-2 px:4 lg:px-8">
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
										<div className="py-2 px:4 lg:px-8">
											<label
												htmlFor="p1Serial"
												className="block text-sm font-semibold leading-6 text-gray-900"
											>
												Serial Numbered
											</label>
											<div className="mt-1">
												<input
													type="number"
													id="p1Serial"
													className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
												<div className="relative flex items-start">
													<div className="flex h-5 items-center">
														<input
															id="p1Serial"
															aria-describedby="comments-description"
															name="p1_serialed"
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
													</div>
													<div className="ml-3 text-sm">
														<label htmlFor="comments" className="font-medium text-gray-700">
															New comments
														</label>
														<span id="comments-description" className="text-gray-500">
															<span className="sr-only">New comments </span>so you always know what's happening.
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="py-2 px:4 lg:px-8">
											<label
												htmlFor="p1Image"
												className="block text-sm font-semibold leading-6 text-gray-900"
											>
												Photo
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
								{/* End right column column */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
