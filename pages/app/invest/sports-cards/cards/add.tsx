import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import config from '../../../../../config';
import Link from 'next/link';
import AddButton from '../../../../../components/buttons/addButton';

/*interface InputData {
	slug: string;
	name: string;
	sport_slug?: string;
	brand_slug: string;
	year: string;
	sets: []
}*/

const scApiUrl = config.sportsCardApiUrl;

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const sportsRes = await fetch(`${scApiUrl}/sports`);
	const sports = await sportsRes.json();

	const brandsRes = await fetch(`${scApiUrl}/brands`);
	const brands = await brandsRes.json();
	//console.log('brands', brands);

	// the Page component will receive props below at build time
	return {
		props: {
			brands: JSON.stringify(brands),
			sports: JSON.stringify(sports),
		},
	};
};

const Page: NextPage = ({ brands, sports}: any) => {
	const tab = 'cards';

	brands = JSON.parse(brands);
	sports = JSON.parse(sports);

	const [sport, setSport] = useState('');
	const [year, setYear] = useState('');
	const [brand, setBrand] = useState('');
	const [setList, setSetList] = useState([]);
	const [selectedSet, setSelectedSet] = useState('');
	const [frontImage, setFrontImage] = useState('');
	const [rearImage, setRearImage] = useState('');
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		console.log('Sport set:', sport.length, sport)
		console.log('Brand set:', brand.length, brand)
		console.log('Year set:', year.length, year)
		if (sport.length && year.length && brand.length) {
			setLoading(true);
			updateSetList();
		}
	}, [brand, sport, year]);

	const updateSetList = async () => {
		console.log('Updating set list...')
		if (sport && year && brand) {
			console.log('apiBaseUrl', config.sportsCardApiUrl);
			const apiUrl = `${config.sportsCardApiUrl}/sets?sport=${sport}&year=${year}&brand=${brand}`;
			console.log('apiUrl', apiUrl);
			const response = await fetch(apiUrl);
			console.log('response', response)
			const results = await response.json();
			console.log('results', results);

			setLoading(false);

			if (results.status == 200) {
				setSetList(results);
			}

			//
		} else {
			console.log('Missing data to retrieve set list');
			setSetList([]);
		}
	}

	//const router = useRouter();

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		/*// Get data from the form.
		const input: InputData = {
			slug: '',
			name: event.target.name.value,
			sport_id: event.target.sport.value,
			sport_ids: '',
			rookie_year: event.target.rookie_year.value,
			talent_level: event.target.talent_level.value,
			birthdate: event.target.birthdate.value,
		};
		console.log('input', input);

		if (!validateForm(input)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.');

		if (input.birthdate === "") {
			input.birthdate = null;
		}
		if (input.rookie_year === "") {
			input.rookie_year = null;
		}
		if (input.talent_level === "") {
			input.talent_level = null;
		}

		input.slug = slugify(input.name);
		input.sport_ids = JSON.stringify(input.sport_id);
		delete input['sport_id'];

		const playerIds = await createPlayer(input);
		console.log('playerIds', playerIds);
		if (playerIds && playerIds[0]) {
			// Redirect to player details/edit page
			router.push(config.sportsCardPageUrl+'/players/'+input.slug);
		}*/

		// @TODO Handle error
	};

	const validateForm = (input: any) => {
		console.log('Validating...', input);
		if (!input.name) {
			// @TODO Handle failure response
			return false;
		}
		if (!input.sport_id) {
			// @TODO Handle failure response
			return false;
		}
		return true;
	};

	const changeBrand = (value: string) => {
		console.log('change Brand', value);
		setBrand(value);
	}

	const changeSport = (value: string) => {
		//setSport(event.target.sport.value);
		console.log('change Sport', value);
		setSport(value);
	}

	const changeYear = (value: string) => {
		console.log('change Year', value);
		const year = parseInt(value);
		let today = new Date();
		if (year < 1800 || year > today.getFullYear()) {
			// Invalid year. Clear the input value from state
			value = '';

			// Handle warning/error notification for user
			// @TODO
		}

		setYear(value);
	}

	const pageTitle = 'Sports Cards : Add a Card ';

	if (isLoading) {
		return (
			<p>Loading...</p>
		)
	}

	return (
		<AuthLayout>
			<form onSubmit={submitForm}>
				<div className="bg-white pt-4 px-8">
					<PageHeader title={pageTitle} />
					<TradingCardPageNav activeTab={tab} />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<div className="pl-8 pt-4 pb-4 bg-white">
						<Link href={config.sportsCardPageUrl + '/' + tab}>
							<a className="text-sm text-jacarta-500">&laquo; All Cards</a>
						</Link>
					</div>

					<div className="relative flex flex-col">
						{/* 3 column wrapper */}
						<div className="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
							{/* Left sidebar & main wrapper */}
							<div className="min-w-0 flex-1 bg-white xl:flex">
								<div className="border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0">
									<div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
										{/* Start left column area */}
										<div className="relative h-full grid-cols-1 space-y-4" style={{ minHeight: '12rem' }}>
											<div>
												<label htmlFor="sport" className="block formLabelText">
													Sport
												</label>
												<select
													id="sport"
													name="sport"
													onChange={event => changeSport(event.target.value)}
													className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-jacarta-500 focus:outline-none focus:ring-jacarta-500 sm:text-sm"
												>
													<option></option>
													{sports.map((sport: any) => (
														<option key={`sport${sport.id}`} value={sport.slug}>{sport.name}</option>
													))}
												</select>
											</div>
											<div>
												<label htmlFor="year" className="block formLabelText">
													Year
												</label>
												<div className="mt-1">
													<input
														id="year"
														name="year"
														type="text"
														onChange={event => changeYear(event.target.value)}
														className="block w-full rounded-md border-gray-300 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500 sm:text-sm"
													/>
												</div>
											</div>
											<div>
												<label htmlFor="brand" className="block formLabelText">
													Brand
												</label>
												<select
													id="brand"
													name="brand"
													onChange={event => changeBrand(event.target.value)}
													className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-jacarta-500 focus:outline-none focus:ring-jacarta-500 sm:text-sm"
												>
													<option></option>
													{brands.map((brand: any) => {
														return <option key={`brand${brand.id}`} value={brand.slug}>{brand.name}</option>;
													})}
												</select>
											</div>
										</div>
										{/* End left column area */}
									</div>
								</div>

								<div className="bg-white lg:min-w-0 lg:flex-1">
									<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
										{/* Start main area*/}
										<div className="relative h-full grid-cols-1 space-y-4" style={{ minHeight: '36rem' }}>
											<div>
												<label htmlFor="set" className="block formLabelText">
													Set
												</label>
												{!selectedSet && (
													<div className="text-sm text-gray-400 italic mb-1">Select a sport, year, and brand to see set options.</div>
												)}
												<select
													id="set"
													name="set"
													onChange={event => setSelectedSet(event.target.value)}
													className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-jacarta-500 focus:outline-none focus:ring-jacarta-500 sm:text-sm"
												>
													<option></option>
													{setList.map((set: any) => {
														return <option key={`set${set.id}`} value={set.slug}>{set.name}</option>;
													})}
												</select>
											</div>
											{!selectedSet && (
												<div className="grid-cols-1 space-y-4">
													<AddButton label="New Set" />
													<div className="pt-4">
														<label htmlFor="player1Name" className="block formLabelText">
															Player's Name
														</label>
														<div className="mt-1">
															<input
																id="player1Name"
																name="player1_name"
																type="text"
																className="block w-full rounded-md border-gray-300 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500 sm:text-sm"
															/>
														</div>
														<AddButton label="Player" />
														<AddButton label="Add New Player" />
													</div>
													<div className="pt-4">
														<label htmlFor="cardNumber" className="block formLabelText">
															<span className="block">Card Number</span>
															<span className="block mb-2 text-xs text-gray-500 italic font-medium">
																Enter the number as printed on the card (not what's shown on the graded case).
															</span>
														</label>
														<div className="mt-1">
															<input
																id="cardNumber"
																name="card_number"
																type="text"
																className="block max-w-64 rounded-md border-gray-300 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500 sm:text-sm"
															/>
														</div>
													</div>
													<div className="pt-4">
														<label htmlFor="printRun" className="block formLabelText">
															<span className="block">Print Run</span>
															<span className="block mb-2 text-xs text-gray-500 italic font-medium">
																The number of cards printed, if known. Note: Short prints may not have an on-card serial number.
															</span>
														</label>
														<div className="mt-1">
															<input
																id="printRun"
																name="print_run"
																type="text"
																className="block max-w-64 rounded-md border-gray-300 shadow-sm focus:border-jacarta-500 focus:ring-jacarta-500 sm:text-sm"
															/>
														</div>
													</div>
													<div className="relative flex items-start">
														<div className="flex h-5 items-center">
															<input id="hasSerial" name="has_serial" type="checkbox" className="h-6 w-6 rounded border-gray-300 text-jacarta-600 focus:ring-jacarta-500" />
														</div>
														<div className="ml-3 text-sm">
															<label htmlFor="hasSerial" className="formLabelText">
																<span>Card has a printed serial number</span>
																<span className="pl-2 text-gray-400 italic font-medium">(example: 49/150)</span>
															</label>
														</div>
													</div>
												</div>
											)}
										</div>
										{/* End main area */}
									</div>
								</div>
							</div>

							<div className="bg-white pr-4 sm:pr-6 lg:flex-shrink-0 lg:pr-8 xl:pr-0">
								<div className="h-full py-6 pl-6 lg:w-80">
									{/* Start right column area */}
									<div className="relative h-full grid-cols-1 space-y-4" style={{ minHeight: '16rem' }}>
										<div>
											<label
												htmlFor="frontImage"
												className="block text-sm font-semibold leading-6 text-gray-900"
											>
												Front Photo
											</label>
											<div className="mt-1 flex items-center">
													<span className="w-auto max-w-48 aspect-ratio-card overflow-hidden bg-gray-100">
														<img
															src="/img/empty-card.jpg"
															className="h-full object-contain"
															alt=""
														/>
													</span>
												<button
													type="button"
													className="ml-5 rounded-md border border-gray-300 bg-jacarta-500 py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2 whitespace-nowrap"
												>
													{frontImage ? 'Replace' : 'Add Image'}
												</button>
											</div>
										</div>
										<div>
											<label
												htmlFor="frontImage"
												className="block text-sm font-semibold leading-6 text-gray-900"
											>
												Rear Photo
											</label>
											<div className="mt-1 flex items-center">
													<span className="w-auto max-w-48 aspect-ratio-card overflow-hidden bg-gray-100">
														<img
															src="/img/empty-card.jpg"
															className="h-full object-contain"
															alt=""
														/>
													</span>
												<button
													type="button"
													className="ml-5 rounded-md border border-gray-300 bg-jacarta-500 py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2 whitespace-nowrap"
												>
													{rearImage ? 'Replace' : 'Add Image'}
												</button>
											</div>
										</div>
									</div>
									{/* End right column area */}
								</div>
							</div>
						</div>
					</div>

					<div className="p-8">
						<div className="flex justify-center">
							<button type="button" className="w-64 inline-flex justify-center rounded-full border border-transparent bg-jacarta-500 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2">
								Save Card
							</button>
						</div>
					</div>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Page;
