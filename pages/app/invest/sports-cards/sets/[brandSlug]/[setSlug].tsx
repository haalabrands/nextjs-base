import { NextPage } from 'next';
import AuthLayout from '../../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../../components/navbars/TradingCardPageNav';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const baseUrl = '/app/invest/sports-cards/sets';

const sets = [
	{
		id: 1,
		slug: 'chronicles',
		name: 'Chronicles',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 2,
		slug: 'contenders',
		name: 'Contenders',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 3,
		slug: 'court-kings',
		name: 'Court Kings',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 4,
		slug: 'flawless',
		name: 'Flawless',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 5,
		slug: 'gridiron-kings',
		name: 'Gridiron Kings',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 6,
		slug: 'hoops',
		name: 'Hoops',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 7,
		slug: 'immaculate',
		name: 'Immaculate',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 8,
		slug: 'national-treasures',
		name: 'National Treasures',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 9,
		slug: 'prizm',
		name: 'Prizm',
		imageUrl: '/img/default-avatar.png',
	},
	{
		id: 10,
		slug: 'rookies-stars',
		name: 'Rookies & Stars',
		imageUrl: '/img/default-avatar.png',
	},
];

const Page: NextPage = () => {
	const pageTitle = 'Trading Card : Brands & Sets';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="sets" />

					<div className="mt-8">
						<div className="overflow-hidden bg-white shadow sm:rounded-md">
							<ul role="list" className="divide-y divide-gray-200">
								{sets.map((set) => (
									<li key={`set${set.id}`}>
										<a
											href={`${baseUrl}/sets/${set.slug}`}
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
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
