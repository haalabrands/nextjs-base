import { NextPage } from 'next';
import useSWR from 'swr';
import AuthLayout from '../../../../../layouts/AuthLayout';
import PageHeader from '../../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../../components/navbars/TradingCardPageNav';
import config from '../../../../../config';
import Link from 'next/link';
import { fetcher, slugify } from '../../../../../util/helpers';

const Page: NextPage = (/*{ brand, sets }*/) => {
	const pagePath = 'sets';
	const pageTitle = 'Trading Cards : Add New Set ';

	const { data : brands, error: brandError } = useSWR('/api/sports-cards/brands', fetcher)
	const { data : sports, error: sportError } = useSWR('/api/sports-cards/sports',fetcher)
	if (brandError || sportError) return <div>Error loading page</div>;
	if (!(brands || sports)) return <div>Loading...</div>;

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		// Get data from the form.
		const inputData = {
			slug: '',
			sport: event.target.sport_slug.value,
			brand: event.target.brand_slug.value,
			brand_set_id: null,
			year: event.target.year.value,
			name: event.target.name.value,
			set_size: null
		};

		/*if (!inputData.name) {
			const brandIdx = brands.findIndex((brand: any) => brand.slug == inputData.brand);
			if (!brandIdx) {
				// @TODO Handle error
			} else {
				const brand = brands[brandIdx];
				inputData.name = inputData.year +' '+ brand.name;
			}
		}*/

		if (!validateForm(inputData)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.')

		inputData.slug = createSlug(inputData);

		console.log('Posting data:', inputData);

		const set = await createSet(inputData);
		// @TODO Check response if player was successfully added
		console.log('Set created', set);
	};

	const createSlug = (data: any) => {
		let slug = data.year + ' '+ data.brand;
		if (data.name) {
			slug += ' '+data.name;
		}
		slug += ' '+data.sport;

		return slugify(slug);
	}

	const validateForm = (data: any) => {
		console.log('Validating...', data);
		if (!data.sport) {
			return false;
		}
		if (!data.brand) {
			return false;
		}
		if (!data.year) {
			return false;
		}
		return true;
	};

	const createSet = async (inputData: any) => {
		const apiUrl = '/api/sports-cards/sets/add';
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

	return (
		<AuthLayout>
			<div className="">
				<div className="bg-white pt-4 px-8">
					<PageHeader title={pageTitle} />
					<TradingCardPageNav activeTab={pagePath} />
				</div>

				<div className="relative flex min-h-screen flex-col">
					<div className="pl-8 pt-4 pb-4 bg-white">
						<Link href={`${config.sportsCardPageUrl}/${pagePath}`}>
							<a className="text-sm text-indigo-500">&laquo; Brands</a>
						</Link>
					</div>

					<div className="px-8 py-8">
						<form
							onSubmit={submitForm}
							className="container max-w-xl px-12 py-8 space-y-8 bg-white"
						>
							<div className="grid-cols-1 space-y-4">
								<div>
									<label htmlFor="sport" className="block formLabelText">
										Sport
									</label>
									<select
										id="sport"
										name="sport_slug"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										{sports && sports.map((sport: any) => {
											return <option key={sport.slug} value={sport.slug}>{sport.name}</option>;
										})}
									</select>
								</div>
								<div>
									<label htmlFor="brand" className="block formLabelText">
										Brand
									</label>
									<select
										id="brand"
										name="brand_slug"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										{brands && brands.map((brand: any) => {
											return <option key={brand.slug} value={brand.slug}>{brand.name}</option>;
										})}
									</select>
								</div>
								<div>
									<label htmlFor="setYear" className="block formLabelText">
										Year
									</label>
									<div className="mt-1">
										<input
											id="setYear"
											name="year"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="setName" className="block formLabelText">
										Set Name (if different than year & brand)
									</label>
									<div className="mt-1">
										<input
											id="setName"
											name="name"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
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