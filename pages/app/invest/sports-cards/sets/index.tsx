import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import Link from 'next/link';
import config from '../../../../../config';

const baseUrl = '/app/invest/sports-cards';

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(config.sportsCardApiUrl + '/sports-cards/sets');
	const brands = await response.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			brands: JSON.stringify(brands),
		},
	};
};

const Page: NextPage = ({ brands }) => {
	brands = JSON.parse(brands);
	//console.log('brands: ', brands[0])
	const pageTitle = 'Trading Card Brands & Sets';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="sets" />
					<div className="mt-4">
						<PageHeader title={pageTitle} />
						<div className="overflow-hidden bg-gray-50 shadow sm:rounded-md">
							<ul
								role="list"
								className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4"
							>
								{brands.map((brand) => (
									<li
										key={brand.email}
										className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow"
									>
										<div className="flex flex-1 flex-col justify-center p-8">
											<Link href={baseUrl + '/sets/' + brand.slug}>
												<a>
													<img
														className="mx-auto w-auto max-w-[160px] max-h-24"
														src={brand.img_src ?? '/img/default-avatar.png'}
														alt={brand.name}
													/>
												</a>
											</Link>
										</div>
										<div className="flex items-center justify-center">
											<Link href={baseUrl + '/sets/' + brand.slug}>
												<a>
													<h3 className="py-4 text-lg font-semibold text-gray-900">
														{brand.name}
													</h3>
												</a>
											</Link>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
