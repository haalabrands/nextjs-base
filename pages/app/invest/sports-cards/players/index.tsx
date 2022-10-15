import { GetStaticProps, NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import config from '../../../../../config';
import { playerPhoto } from '../../../../../models/scPlayerModel';

const baseUrl = config.sportsCardPageUrl;

const pagePath = 'players';

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const response = await fetch(`${config.sportsCardApiUrl}/players`);
	const players = await response.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			players: JSON.stringify(players),
		},
	};
};

const Page: NextPage = ({ players }) => {
	players = JSON.parse(players);
	const pageTitle = 'Players';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav
						activeTab="players"
						addNew={`${baseUrl}/${pagePath}/add`}
						addNewLabel="Add Player"
					/>
					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							<ul role="list" className="divide-y divide-gray-200">
								{players.map((player) => (
									<li key={`player${player.id}`}>
										<a
											href={`${baseUrl}/${pagePath}/${player.slug}`}
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
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
