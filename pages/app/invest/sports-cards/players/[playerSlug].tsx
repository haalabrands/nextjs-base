import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Switch } from '@headlessui/react';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navigation/TradingCardPageNav';
import config from '../../../../../config';
import { playerPhoto } from '../../../../../models/scPlayerModel';
import { ageFromDate, classNames } from '../../../../../util/helpers';
import CardGallery from '../../../../../components/sections/CardGallery';
import CardResultsHeader from '../../../../../components/headers/CardResultsHeader';

const basePageUrl = config.sportsCardPageUrl;

const pagePath = 'players';

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	/*// Call API to get all available brands
	const res = await fetch(`${baseApiUrl}/brands`);
	const brands = await res.json();

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };*/

	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking' //indicates the type of fallback
	};
};

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async ({params}) => {
	const playerSlug = params?.playerSlug;
	console.log('playerSlug: ', playerSlug);

	// Get the player details
	const res = await fetch(config.sportsCardApiUrl + '/players/bySlug/' + playerSlug);
	const player = await res.json();

	// the Page component will receive props below at build time
	return {
		props: {
			player: JSON.stringify(player),
		},
	};
};

const Page: NextPage = ({player}) => {
	player = JSON.parse(player);

	const pageTitle = player.name;

	const [favorite, setFavorite] = useState(false);

	const birthdate = () => {
		if (!player.birthdate) return null;

		const d = new Date(player.birthdate);
		const month = d.toLocaleString('default', {month: 'short'});
		const day = d.getDay();
		const year = d.getFullYear();
		return month + ' ' + day + ', ' + year;
	};

	const age = () => {
		return ageFromDate(player.birthdate);
	};

	const sportsList = player.sport_ids.split(',');

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav
						activeTab="sets"
						addNew={`${basePageUrl}/${pagePath}/add`}
						addNewLabel="Add New Player"
					/>
					<div className="mt-4">
						<PageHeader title={pageTitle}/>

						<div className="relative flex min-h-screen flex-col">
							<div className="mx-auto w-full flex-grow lg:flex">
								{/* Left sidebar & main wrapper */}
								<div className="min-w-0 flex-1 bg-white xl:flex">
									<div className="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0">
										<div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
											{/* Start left column area */}
											<Switch.Group as="div" className="flex justify-center items-center my-2">
												<Switch
													checked={favorite}
													onChange={setFavorite}
													className={classNames(
														favorite ? 'bg-indigo-600':'bg-gray-200',
														'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
													)}
												>
													<span
														aria-hidden="true"
														className={classNames(
															favorite ? 'translate-x-5':'translate-x-0',
															'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
														)}
													/>
												</Switch>
												<Switch.Label as="span" className="ml-3">
													<span className="text-sm font-medium text-gray-900">Favorite</span>
												</Switch.Label>
											</Switch.Group>
											<div className="relative h-full" style={{minHeight: '12rem'}}>
												<div
													className="aspect-w-1 aspect-h-1 w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
													<img
														src={playerPhoto(player)}
														alt="Person using a pen to cross a task off a productivity paper card."
														className="h-full w-full object-cover object-center group-hover:opacity-75"
													/>
												</div>
												<ul className="bg-gray-100 text-gray-600 text-sm py-2 px-3 mt-3 divide-y rounded shadow-sm">
													<li className="flex items-center py-3">
														<span className="text-xs italic">Sport </span>
														<span className="ml-auto">
															{sportsList.map((sport: any) => (
																<span>{sport}</span>
															))}
													</span>
													</li>
													<li className="flex items-center py-3">
														<span className="text-xs italic">Status</span>
														<span className="ml-auto">
															<span className="bg-primary py-1 px-2 rounded text-white text-sm">
																Active
															</span>
													</span>
													</li>
													<li className="flex items-center py-2">
														<span className="text-xs italic">Age</span>
														<span className="ml-auto">
															{age()}
														</span>
													</li>
													<li className="flex items-center py-2">
														<span className="text-xs italic">Birthdate</span>
														<span className="ml-auto">
															{birthdate()}
														</span>
													</li>
													<li className="flex items-center py-2">
														<span className="text-xs italic"># Cards</span>
														<span className="ml-auto">
															0
														</span>
													</li>
													<li className="flex items-center py-2">
														<span className="text-xs italic"># RC</span>
														<span className="ml-auto">
															0
														</span>
													</li>
													<li className="flex items-center py-2">
														<span className="text-xs italic"># Autos</span>
														<span className="ml-auto">
															0
														</span>
													</li>
												</ul>
											</div>
											{/* End left column area */}
										</div>
									</div>

									<div className="bg-white lg:min-w-0 lg:flex-1">
										<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
											{/* Start main area*/}
											<CardResultsHeader/>
											<CardGallery/>
											{/* End main area */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
