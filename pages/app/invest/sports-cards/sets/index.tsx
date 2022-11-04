import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import config from '../../../../../config';
import SportsCardMenuCard from '../../../../../components/cards/SportsCardMenuCard';
import Link from 'next/link';

const pageSlug = 'brands';
const basePageUrl = config.sportsCardPageUrl;
const baseApiUrl = config.sportsCardApiUrl;

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(`${baseApiUrl}/brands`);
	const brands = await response.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			brands: JSON.stringify(brands),
		},
	};
};

const Page: NextPage = ({ brands }: any) => {
	brands = JSON.parse(brands);

	const pageTitle = 'Brands & Sets';

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
								<ul
									role="list"
									className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
								>
									{brands.map((brand: any) => (
										<li
											key={brand.email}
											className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow"
										>
											<div className="flex flex-1 flex-col justify-center p-8">
												<Link href={`${basePageUrl}/sets/${brand.slug}`}>
													<a>
														<img
															className="mx-auto w-full max-w-sm max-h-24"
															src={brand.img_src ?? '/img/default-avatar.png'}
															alt={brand.name}
														/>
													</a>
												</Link>
											</div>
											<div className="flex items-center justify-center">
												<Link href={`${basePageUrl}/sets/${brand.slug}`}>
													<a>
														<h3 className="py-2 text-sm font-semibold text-gray-900">
															{brand.name}
														</h3>
													</a>
												</Link>
											</div>
										</li>
									))}
								</ul>
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
