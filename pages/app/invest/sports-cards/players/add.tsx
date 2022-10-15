import { NextPage } from 'next';
import useSWR from 'swr';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import config from '../../../../../config';
import { fetcher, slugify } from '../../../../../util/helpers';
import Link from 'next/link';
import { PlayerModel } from '../../../../../models/scPlayerModel';

const Page: NextPage = () => {
	const { data, error } = useSWR('/api/sports-cards/sports', fetcher);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	const tab = 'players';

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		// Get data from the form.
		const inputData = {
			slug: '',
			name: event.target.name.value,
			sport_ids: [event.target.sport.value],
			rookie_year: event.target.rookie_year.value,
			talent_level: event.target.talent_level.value,
			birthdate: event.target.birthdate.value,
		};
		console.log('inputData', inputData);

		if (!validateForm(inputData)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.');

		inputData.slug = slugify(inputData.name);
		inputData.sport_ids = JSON.stringify(inputData.sport_ids);
		const player = await createPlayer(inputData);
		// @TODO Check response if player was successfully added
		console.log('Player created', player);
	};

	const validateForm = (data: any) => {
		console.log('Validating...', data);
		if (!data.name) {
			return false;
		}
		if (!data.sport_ids) {
			return false;
		}
		return true;
	};

	const createPlayer = async (inputData: any) => {
		const apiUrl = '/api/sports-cards/players/add';
		console.log('apiUrl', apiUrl);
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputData),
		});
		const result = await response.json();

		return result;
	};

	const pageTitle = 'Trading Cards : Add a Player ';

	return (
		<AuthLayout>
			<div className="">
				<div className="bg-white pt-4 px-8">
					<PageHeader title={pageTitle} />
					<TradingCardPageNav activeTab={tab} />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<div className="pl-8 pt-4 pb-4 bg-white">
						<Link href={config.sportsCardPageUrl + '/' + tab}>
							<a className="text-sm text-indigo-500">&laquo; Players</a>
						</Link>
						<Link href={config.sportsCardPageUrl + '/sets/xyz'}>
							<a className="block text-sm text-indigo-500">
								&laquo; Teams & Organizations
							</a>
						</Link>
					</div>

					<div className="px-8 py-8">
						<form
							onSubmit={submitForm}
							className="container max-w-xl px-12 py-8 space-y-8 bg-white divide-y divide-gray-200"
						>
							<div className="grid-cols-1 space-y-4">
								<div>
									<label htmlFor="name" className="block formLabelText">
										Player's Name
									</label>
									<div className="mt-1">
										<input
											id="name"
											name="name"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="sport" className="block formLabelText">
										Sport
									</label>
									<select
										id="sport"
										name="sport"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										{data.map((sport: any) => {
											return <option value={sport.slug}>{sport.name}</option>;
										})}
									</select>
								</div>
								<div>
									<label htmlFor="rookieYear" className="block formLabelText">
										Rookie Year
									</label>
									<div className="mt-1">
										<input
											id="rookieYear"
											name="rookie_year"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								<div className="sm:col-span-4">
									<label htmlFor="birthdate" className="block formLabelText">
										Birthdate
									</label>
									<div className="mt-1">
										<input
											id="birthdate"
											name="birthdate"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="talentLevel" className="block formLabelText">
										Value Category
									</label>
									<select
										id="talentLevel"
										name="talent_level"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										<option value="bust">Bust</option>
										<option value="backup">Backup</option>
										<option value="prospect">Prospect</option>
										<option value="upcomer">Up-and-Comer</option>
										<option value="role_player">Role Player</option>
										<option value="star">Star</option>
										<option value="superstar">Superstar</option>
										<option value="generational">Generational</option>
										<option value="legend">Legend</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="setImage"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Photo
									</label>
									<div className="mt-1 flex items-center">
										<span className="w-32 max-w-32 aspect-ratio-card overflow-hidden bg-gray-100">
											<img
												src="/img/empty-card.jpg"
												className="h-full object-contain"
												alt=""
											/>
										</span>
										<button
											type="button"
											className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Add|Change
										</button>
									</div>
								</div>
							</div>

							<div className="pt-5">
								<div className="flex justify-center">
									<button
										type="submit"
										className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-jacarta-600 py-2 px-24 text-sm font-medium text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
