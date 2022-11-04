import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import config from '../../../../../config';
import SportsCardMenuCard from '../../../../../components/cards/SportsCardMenuCard';
import { playerPhoto } from '../../../../../models/scPlayerModel';

const pageSlug = 'sports';
const baseUrl = config.sportsCardPageUrl;
const baseApiUrl = config.sportsCardApiUrl;

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(`${baseApiUrl}/sports`);
	const sports = await response.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			sports: JSON.stringify(sports),
		},
	};
};

const Page: NextPage = ({ sports }: any) => {
	sports = JSON.parse(sports);

	const pageTitle = 'Sports';

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
							<div className="mt-8">
								<ul role="list" className="divide-y divide-gray-200">
									{sports.map((player: any) => (
										<li key={`player${player.id}`}>
											<a
												href={`${baseUrl}/${pageSlug}/${player.slug}`}
												className="block hover:bg-gray-50"
											>
												<div className="flex items-center px-4 py-4 sm:px-6">
													<div className="flex min-w-0 flex-1 items-center">
														<div className="flex-shrink-0">
															<img
																className="h-16 w-16 rounded-full"
																src={playerPhoto(player)}
																alt={player.name}
															/>
														</div>
														<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
															<div>
																<p className="truncate text-xl font-medium text-gray-700">
																	{player.name}
																</p>
																{/*<p className="mt-2 flex items-center text-sm text-gray-500">
																<span className="truncate">{player.sports}</span>
															</p>*/}
															</div>
															{/*<div className="hidden md:block">
															<div>
																<p className="text-sm text-gray-900">
																	Applied on <time dateTime={player.date}>{player.dateFull}</time>
																</p>
																<p className="mt-2 flex items-center text-sm text-gray-500">
																	<CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
																	{player.stage}
																</p>
															</div>
														</div>*/}
														</div>
													</div>
													<div>
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
