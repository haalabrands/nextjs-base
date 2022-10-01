import { NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const baseUrl = '/app/invest/sports-cards';

const sports = [
	{
		id: 1,
		slug: 'baseball',
		name: 'Baseball',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 2,
		slug: 'basketball',
		name: 'Basketball',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 3,
		slug: 'boxing',
		name: 'Boxing',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 4,
		slug: 'football',
		name: 'Football',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 5,
		slug: 'mma',
		name: 'MMA',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 6,
		slug: 'tennis',
		name: 'Tennis',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 7,
		slug: 'wrestling',
		name: 'Wrestling',
		imageUrl: '/img/default-avatar.png',
	},
];

const Page: NextPage = () => {
	const pageTitle = 'Sports';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="sports" />

					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							<ul role="list" className="divide-y divide-gray-200">
								{sports.map((sport) => (
									<li key={`sport${sport.id}`}>
										<a
											href={`${baseUrl}/sports/${sport.slug}`}
											className="block hover:bg-gray-50"
										>
											<div className="flex items-center px-4 py-4 sm:px-6">
												<div className="flex min-w-0 flex-1 items-center">
													<div className="flex-shrink-0">
														<img
															className="h-16 w-16 rounded-full"
															src={sport.imageUrl}
															alt={sport.name}
														/>
													</div>
													<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
														<div>
															<p className="truncate text-xl font-medium text-gray-700">
																{sport.name}
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
