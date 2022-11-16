import { NextPage } from 'next';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import AuthLayout from '../../../../layouts/AuthLayout';
import config from '../../../../config';
import { fetcher, slugify } from '../../../../util/helpers';

const apiBaseUrl = config.apiUrl;

const moduleName = 'Shops';
const moduleSlug = 'shops';
const pageSlug = 'marketplaces';

interface InputData {
	slug: string;
	name: string;
	url: string;
	img_src?: string;
}

const Page: NextPage = () => {
	const router = useRouter();

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		// Get data from the form.
		const input: InputData = {
			slug: slugify(event.target.name.value),
			name: event.target.name.value,
			url: event.target.url.value,
			img_src: event.target.img_src?.value ?? null,
		};
		console.log('input', input);

		if (!validateForm(input)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.');

		const marketplaceId = await createMarketplace(input);
		console.log('marketplaceId', marketplaceId);
		if (marketplaceId) {
			// Redirect to player details/edit page
			router.push(config.appUrl+'/app/'+moduleSlug+'/'+pageSlug);
		}

		// @TODO Handle error
	};

	const validateForm = (data: any) => {
		console.log('Validating...', data);
		if (!data.name) {
			console.error('Missing marketplace name input value')
			// @TODO Handle failure response
			return false;
		}
		if (!data.url) {
			console.error('Missing URL input value')
			// @TODO Handle failure response
			return false;
		}
		return true;
	};

	const createMarketplace = async (data: any) => {
		const apiUrl = apiBaseUrl+'/'+moduleSlug+'/'+pageSlug+'/add';
		console.log('apiUrl', apiUrl);
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();

		return result;
	};

	const pageTitle = 'Add Marketplace';

	return (
		<AuthLayout>
			<div className="px-4 flex mt-8">
				{/* Left column */}
				<div className="pageSideColumn">
					{/*<div className="pageCard">

					</div>*/}
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded mx-auto max-w-3xl">
						<h2 className="cardTitle">
							{moduleName}
						</h2>
						<h1 className="cardHeadline">
							{pageTitle}
						</h1>
						<form
							onSubmit={submitForm}
							className="container max-w-xl px-12 py-8 space-y-8 bg-white"
						>
							<div className="grid-cols-1 space-y-4">
								<div>
									<label htmlFor="name" className="block formLabelText">
										Marketplace Name
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
									<label htmlFor="url" className="block formLabelText">
										Homepage URL
									</label>
									<div className="mt-1">
										<input
											id="url"
											name="url"
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

				{/* Right column */}
				<div className="pageSideColumn">
					{/*<div className="pageCard">

					</div>*/}
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
