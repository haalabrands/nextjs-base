import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon, FaceFrownIcon } from '@heroicons/react/20/solid';
import config from '../../../../../../config';
import Link from 'next/link';

const pagePath = 'sets';

// This function gets called at build time
export async function getStaticPaths() {
	// Call API to get all available brands
	const res = await fetch(config.sportsCardApiUrl + '/brands');
	const brands = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = brands.map((brand) => ({
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
	const brandRes = await fetch(config.sportsCardApiUrl + '/brands/' + brandSlug);
	const brand = await brandRes.json();

	// Get all sets for this brand
	const setRes = await fetch(
		config.sportsCardApiUrl + '/' + pagePath + '/' + brandSlug
	);
	const sets = await setRes.json();

	// the Page component will receive props below at build time
	return {
		props: {
			brand: JSON.stringify(brand),
			sets: JSON.stringify(sets),
		},
	};
};

/*const getSetList = async (brandSlug: string) => {
	const response = await fetch(config.sportsCardApiUrl +'/sports-cards/'+brandSlug+'/sets');
	const sets = await response.json();

	return sets;
}*/

const Page: NextPage = ({ brand, sets }) => {
	brand = JSON.parse(brand);
	sets = JSON.parse(sets);

	console.log('sets: ', sets);
	//const router = useRouter();
	//const routePath = router.asPath;

	/*if (!brandSlug) {
		// Missing brand. Redirect user back to main directory
		router.push(config.sportsCardPageUrl+'/brands')
	}*/

	const pageTitle = 'Trading Cards : Sets by ' + brand.name;

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="sets" addNew="/" />
					<div className="mt-2">
						<Link href={config.sportsCardPageUrl + '/brands'}>
							<a className="text-sm text-indigo-500">&laquo; All Brands</a>
						</Link>
					</div>
					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							{sets[0] ? (
								<ul role="list" className="mt-4 divide-y divide-gray-200">
									{sets.map((set) => (
										<li key={`set${set.id}`}>
											<a
												href={`${config.sportsCardPageUrl}/${pagePath}/${brand.slug}/${set.slug}`}
												className="block hover:bg-gray-50"
											>
												<div className="flex items-center px-4 py-4 sm:px-6">
													<div className="flex min-w-0 flex-1 items-center">
														<div className="flex-shrink-0">
															<img
																className="h-16 w-16 rounded-full"
																src={set.imageUrl}
																alt={set.name}
															/>
														</div>
														<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
															<div>
																<p className="truncate text-xl font-medium text-gray-700">
																	{set.name}
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
										<Link href={config.sportsCardPageUrl + `/` + pagePath + `/` + brand.slug + `/add`}>
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
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
