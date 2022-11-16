import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../layouts/AuthLayout';
import Link from 'next/link';
import config from '../../../../config';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const moduleName = 'Shops';
const moduleSlug = 'shops';
const moduleBaseUrl = config.appUrl+'/app/'+moduleSlug;

const pageSlug = 'marketplaces';
const pageTitle = 'Marketplaces';

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(`${config.apiUrl}/${moduleSlug}/${pageSlug}`);
	const marketplaces = await response.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			marketplaces: JSON.stringify(marketplaces),
		},
	};
};

const Page: NextPage = ({ marketplaces }: any) => {
	marketplaces = JSON.parse(marketplaces);

	return (
		<AuthLayout>
			<div className="pageContainer columns">
				{/* Left column */}
				<div className="pageSideColumn hidden w-56 xl:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Card Title
							</h2>
							<div></div>
						</div>
					</div>
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded">
						<header>
							<h2 className="cardTitle">
								{moduleName}
							</h2>
							<h1 className="cardHeadline mt-4">
								{pageTitle}
							</h1>
						</header>
						<div className="my-12">
							{
								marketplaces ? (
									<ul className="mt-12 flex flex-col divide-y border-y border-gray-200 divide-gray-200 text-lg">
										{
											marketplaces.map((marketplace: any) => (
												<li key={`Marketplace${marketplace.id}`} className="py-4">{marketplace.name}</li>
											))
										}
									</ul>
								) : (
									<div className="text-center">
										<div className="flex justify-center">
											<ShoppingCartIcon className="w-16 text-gray-300" />
										</div>
										<h3 className="cardTitle mt-4">
											No marketplaces
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											Get started by adding a new marketplace.
										</p>
										<div className="mt-8">
											<Link href={`${moduleBaseUrl}/${pageSlug}/add`}>
												<a className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
													<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
													Marketplace
												</a>
											</Link>
										</div>
									</div>
								)
							}
						</div>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<Link href={`${moduleBaseUrl}/${pageSlug}/add`}>
								<a>+ Add Marketplace</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
