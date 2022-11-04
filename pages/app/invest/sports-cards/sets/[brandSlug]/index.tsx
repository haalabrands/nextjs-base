import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../../layouts/AuthLayout';
import config from '../../../../../../config';
import SportsCardMenuCard from '../../../../../../components/cards/SportsCardMenuCard';
import Link from 'next/link';
import { ChevronRightIcon, FaceFrownIcon } from '@heroicons/react/20/solid';

const pageSlug = 'sets';
const baseApiUrl = config.sportsCardApiUrl;
const sportsCardPageUrl = config.sportsCardPageUrl;

// This function gets called at build time
export async function getStaticPaths() {
	// Call API to get all available brands
	const res = await fetch(`${baseApiUrl}/brands`);
	const brands = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = brands.map((brand: any) => ({
		params: { brandSlug: brand.slug },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const brandSlug = params?.brandSlug;

	// Get the active brand details
	const brandRes = await fetch(`${baseApiUrl}/brands/${brandSlug}`);
	const brand = await brandRes.json();

	// Get all sets for this brand
	const setRes = await fetch(`${baseApiUrl}/${pageSlug}/byBrand/${brandSlug}`);
	const sets = await setRes.json();

	// the Page component will receive props below at build time
	return {
		props: {
			brand: JSON.stringify(brand),
			sets: JSON.stringify(sets),
		},
	};
};

const Page: NextPage = ({ brand, sets }: any) => {
	brand = JSON.parse(brand);
	sets = JSON.parse(sets);

	const pageTitle = brand.name +' Sets';

	return (
		<AuthLayout>
			<div className="pageContainer columns">
				{/* Left column */}
				<div className="pageSideColumn hidden w-56 xl:block">
					<SportsCardMenuCard activeSlug={pageSlug} />

					<div className="pageCard">
						<div className="border-b border-gray-300">
							<div className="bg-gray-900 text-gray-100 font-bold uppercase text-sm text-center">
								Full Width Block
							</div>
						</div>
						<div className="p-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
						</div>
					</div>
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
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
							<div className="mt-4">
								{sets[0] ? (
									<ul role="list" className="mt-4 divide-y divide-gray-200">
										{sets.map((set: any) => (
											<li key={`set_${set.id}`}>
												<a
													href={`${sportsCardPageUrl}/${pageSlug}/${brand.slug}/${set.slug}`}
													className="block hover:bg-gray-50"
												>
													<div className="flex items-center px-4 py-4 sm:px-6">
														<div className="flex min-w-0 flex-1 items-center">
															<div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
																<div>
																	<p className="truncate text-xl font-medium text-gray-700">
																		{set.year} {brand.name} {set.name} ({set.sport})
																	</p>
																</div>
															</div>
															<ChevronRightIcon
																className="h-5 w-5 text-gray-400"
																aria-hidden="true"
															/>
														</div>
													</div>
												</a>
											</li>
										))}
									</ul>
								) : (
									<div className="text-center">
										<div className="flex justify-center">
											<FaceFrownIcon className="h-48 w-48 text-gray-100" />
										</div>
										<p className="mt-8 text-lg text-gray-500">
											No {brand.name} sets have been added yet.
										</p>
										<div className="mt-6">
											<Link href={`${sportsCardPageUrl}/${pageSlug}/add?brand=${brand.slug}`}>

												<a className="inline-flex items-center rounded-md border border-transparent bg-jacarta-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-jacarta-600 focus:outline-none focus:ring-2 focus:ring-jacarta-800 focus:ring-offset-2">
													<svg
														className="-ml-1 mr-2 h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
													</svg>
													Add a Set
												</a>
											</Link>
										</div>
									</div>
								)}
							</div>
						</header>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
