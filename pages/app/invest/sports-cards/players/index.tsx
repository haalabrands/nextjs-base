import { NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const baseUrl = '/app/invest/sports-cards';

const players = [
	{
		id: 1,
		slug: 'michael-jordan',
		name: 'Michael Jordan',
		sports: [
			{ slug: 'baseball', label: 'Baseball' },
			{ slug: 'basketball', label: 'Basketball' },
		],
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/cardladder-71d53.appspot.com/o/cards%2Fthumb_ndLOcgBZiOMgKZHR8h9k?alt=media',
	},
	{
		id: 2,
		slug: 'mickey-mantle',
		name: 'Mickey Mantle',
		sports: [{ slug: 'baseball', label: 'Baseball' }],
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/cardladder-71d53.appspot.com/o/cards%2Fthumb_LpOJ5d1Oo4VqT9I8wmCz?alt=media',
	},
	{
		id: 3,
		slug: 'lebron-james',
		name: 'LeBron James',
		sports: [{ slug: 'basketball', label: 'Basketball' }],
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/cardladder-71d53.appspot.com/o/cards%2Fthumb_sNfLc6Iqbu0GBmHAWDaO?alt=media',
	},
	{
		id: 4,
		slug: 'josh-allen',
		name: 'Josh Allen',
		sports: [{ slug: 'football', label: 'Football' }],
		imageUrl:
			'https://firebasestorage.googleapis.com/v0/b/cardladder-71d53.appspot.com/o/cards%2Fthumb_uFDs2zGbZQLZKFzQpYi4?alt=media',
	},
];

const Page: NextPage = () => {
	const pageTitle = 'Players';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav
						activeTab="players"
						addNew={baseUrl + `/players/add`}
					/>
					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							<ul role="list" className="divide-y divide-gray-200">
								{players.map((player) => (
									<li key={`player${player.id}`}>
										<a
											href={`${baseUrl}/players/${player.slug}`}
											className="block hover:bg-gray-50"
										>
											<div className="flex items-center px-4 py-4 sm:px-6">
												<div className="flex min-w-0 flex-1 items-center">
													<div className="flex-shrink-0">
														<img
															className="h-16 w-16 rounded-full"
															src={player.imageUrl}
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
