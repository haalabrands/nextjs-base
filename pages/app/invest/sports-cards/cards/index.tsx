import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon, FaceFrownIcon } from '@heroicons/react/20/solid';
import config from '../../../../../config';
import Link from 'next/link';

const pagePath = 'cards';
const baseApiUrl = config.sportsCardApiUrl;

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const cardsRes = await fetch(`${baseApiUrl}/cards/`);
	const cards = await cardsRes.json();
	console.log('cards', cards);

	// the Page component will receive props below at build time
	return {
		props: {
			cards: JSON.stringify(cards),
		},
	};
};

const Page: NextPage = ({ cards }: any) => {
	cards = JSON.parse(cards);

	const pageTitle = 'Sports Cards';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="sets" addNew={`${config.sportsCardPageUrl}/${pagePath}/add`} />
					<div className="mt-2">
						<PageHeader title={pageTitle} />
						<div>

						</div>
					</div>
					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							{cards[0] ? (
								<ul role="list" className="mt-4 divide-y divide-gray-200">
									{/*{cards.map((set: any) => (
										<li key={`card_${card.id}`}>
											<a
												href={`${config.sportsCardPageUrl}/${pagePath}/${brand.slug}/${card.slug}`}
												className="block hover:bg-gray-50"
											>
												<div className="flex items-center px-4 py-4 sm:px-6">
													<div className="flex min-w-0 flex-1 items-center">
														<div className="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
															<div>
																<p className="truncate text-xl font-medium text-gray-700">
																	{card.year} {brand.name} {card.name} ({card.sport})
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
									))}*/}
								</ul>
							) : (
								<div className="text-center">
									<div className="flex justify-center">
										<FaceFrownIcon className="h-48 w-48 text-gray-100" />
									</div>
									<p className="mt-8 text-lg text-gray-500">
										No sports cards have been added yet.
									</p>
									<div className="mt-6">
										<Link href={`${config.sportsCardPageUrl}/${pagePath}/add`}>
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
												Add New Card
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
