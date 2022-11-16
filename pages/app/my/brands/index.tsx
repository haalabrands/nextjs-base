import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../layouts/AuthLayout';
import Link from 'next/link';
import config from '../../../../config';
import { PlusIcon } from '@heroicons/react/20/solid';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { timestampToDate } from '../../../../util/helpers';

const pageBaseUrl = config.appUrl+'/app/my';
const apiBaseUrl = `${config.apiUrl}/my`
const pageSlug = 'brands';
const pageTitle = 'My Brands';

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(`${apiBaseUrl}/${pageSlug}`);
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
							<h1 className="cardHeadline mt-4">
								{pageTitle}
							</h1>
						</header>
						<div className="my-8">
							{
								brands.length ? (
									<table className="w-full leading-normal">
										<thead>
										<tr
											className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											<th className="px-5 py-3">
												Brand
											</th>
											<th className="px-5 py-3">
												Added
											</th>
											<th className="px-5 py-3">
												Status
											</th>
											<th className="px-5 py-3">

											</th>
										</tr>
										</thead>
										<tbody>
										{
											brands.map((brand: any) => (
												<tr key={`Brand${brand.id}`} className="border-b border-gray-200 text-sm bg-white">
													<td className="px-5 py-5 text-base">
														<span className="inline-block">
															{brand.name}
														</span>
														{
															brand.homepage_url && (
																<Link href={brand.homepage_url}>
																	<a className="inline-block ml-3" target="_blank">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
																			<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
																		</svg>
																	</a>
																</Link>
															)
														}
													</td>
													<td className="px-5 py-5">
														<p className="text-gray-900 whitespace-no-wrap">
															{timestampToDate(brand.created_at)}
														</p>
													</td>
													<td className="px-5 py-5">
														<div className={`relative inline-block px-3 py-1 font-semibold ${brand.is_active ? 'text-green-900' : 'text-red-900'} leading-tight`}>
															<span className={`absolute inset-0 ${brand.is_active ? 'bg-green-200' : 'bg-red-200'} opacity-50 rounded-full`}></span>
															<span className="relative">{brand.is_active ? 'Active' : 'Inactive'}</span>
														</div>
													</td>
													<td className="px-5 py-5">
														<Link href={`${pageBaseUrl}/${pageSlug}/${brand.slug}/edit`}>
															<a className="inline-block ml-3">
																<div className="flex items-center">
																	<div className="inline-block">
																		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
																			<path
																				d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"></path>
																		</svg>
																	</div>
																	<div className="inline-block ml-2 mt-1">
																		Edit
																	</div>
																</div>
															</a>
														</Link>
													</td>
												</tr>
											))
										}
										</tbody>
									</table>
								) : (
									<div className="text-center">
										<div className="flex justify-center">
											<BuildingStorefrontIcon className="w-16 text-gray-300" />
										</div>
										<h3 className="cardTitle mt-4">
											No brands Found
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											Get started by adding a new brand.
										</p>
										<div className="mt-8">
											<Link href={`${pageBaseUrl}/${pageSlug}/add`}>
												<a className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
													<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
													Brand
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
							<Link href={`${pageBaseUrl}/${pageSlug}/add`}>
								<a>+ Add Brand</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
