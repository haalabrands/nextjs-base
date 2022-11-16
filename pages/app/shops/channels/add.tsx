import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import AuthLayout from '../../../../layouts/AuthLayout';
import config from '../../../../config';
import { useSession } from 'next-auth/react';
import { BrandModel } from '../../../../models/BrandModel';

const moduleName = 'Shops';
const moduleSlug = 'shops';
const pageSlug = 'channels';

const apiBaseUrl = config.apiUrl+'/'+moduleSlug

interface ShopDataInterface {
	username: string;
	url: string;
}

interface IMarketplace {
	brand_id: number;
	marketplace_slug: string;
	is_active: boolean;
	status: string;
	name: string;
	shop_data: {
		username: string,
		url: string
	};
	creator_user_id: number;
	owner_user_id: number;
}

// GetStaticProps gets called at build time
export const getStaticProps: GetStaticProps = async (/*context*/) => {
	const brandsRes = await fetch(`${apiBaseUrl}/brands`);
	const brands = await brandsRes.json();
	console.log('brands', brands)

	const marketplacesRes = await fetch(`${apiBaseUrl}/marketplaces`);
	const marketplaces = await marketplacesRes.json();

	// the Page component will receive props below at build time
	return {
		props: {
			brands: JSON.stringify(brands),
			marketplaces: JSON.stringify(marketplaces),
		},
	};
};

const Page: NextPage = ({ brands, marketplaces }: any) => {
	const session = useSession();
	const router = useRouter();

	brands = JSON.parse(brands);
	marketplaces = JSON.parse(marketplaces);

	const user = session.data?.user;

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		// Get data from the form.
		const input: IMarketplace = formattedInput(event, user);

		if (!validateForm(input)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.');
		console.log('input', input);

		const channelIds = await createChannel(input);
		console.log('channelIds', channelIds);
		if (channelIds[0]) {
			// Redirect to player details/edit page
			router.push(config.appUrl+'/app/'+moduleSlug+'/'+pageSlug);
		}

		// @TODO Handle error
	};

	/*
	Format input values
	 */
	const formattedInput = (event: any, user: any) => {
		let input: IMarketplace = {
			brand_id: parseInt(event.target.brand_id.value),
			marketplace_slug: event.target.marketplace_slug.value,
			name: '',
			is_active: true,
			status: 'disconnected',
			shop_data: {
			username: event.target.username.value,
				url: ''
		},
			creator_user_id: user.id,
				owner_user_id: user.id,
		}

		input.shop_data.username = input.shop_data.username.toLowerCase();

		if (!input.name.length) {
			// Set default channel name
			const brand = brands.find((b: any) => b.id === input.brand_id);
			const marketplace = marketplaces.find((m: any) => m.slug === input.marketplace_slug);

			input.name = `${brand.name} > ${marketplace.name}`;
		}

		if (input.marketplace_slug === 'ebay') {
			input.shop_data.url = `https://ebay.com/usr/${input.shop_data.username}`
		} else if (input.marketplace_slug === 'etsy') {
			input.shop_data.url = `https://${input.shop_data.username}.etsy.com`
		}
		return input;
	}

	const validateForm = (input: IMarketplace) => {
		console.log('Validating...', input);
		if (!input.brand_id) {
			console.error('Please select a brand')
			// @TODO Handle failure response
			return false;
		}
		if (!input.marketplace_slug) {
			console.error('Please select a marketplace')
			// @TODO Handle failure response
			return false;
		}
		if (!input.name) {
			console.error('Missing channel name')
			// @TODO Handle failure response
			return false;
		}
		if (!input.shop_data.username) {
			console.error('Please enter a Username')
			// @TODO Handle failure response
			return false;
		}
		if (!input.creator_user_id) {
			console.error('Missing creator user')
			// @TODO Handle failure response
			return false;
		}
		if (!input.owner_user_id) {
			console.error('Missing owner user')
			// @TODO Handle failure response
			return false;
		}

		return true;
	};

	const createChannel = async (data: any) => {
		const response = await fetch(`${apiBaseUrl}/${pageSlug}/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();

		return result;
	};

	const pageTitle = 'Add Sales Channel';

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
									<label htmlFor="marketplace" className="block formLabelText">
										Marketplace
									</label>
									<select
										id="marketplace"
										name="marketplace_slug"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										{
											marketplaces && marketplaces.map((marketplace: BrandModel) => (
												<option key={`MarketplaceOption${marketplace.id}`} value={marketplace.slug}>{marketplace.name}</option>
											))
										}
									</select>
								</div>
								<div>
									<label htmlFor="brand" className="block formLabelText">
										Brand
									</label>
									<select
										id="brand"
										name="brand_id"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option></option>
										{
											brands && brands.map((brand: BrandModel) => (
												<option key={`BrandOption${brand.id}`} value={brand.id}>{brand.name}</option>
											))
										}
									</select>
								</div>
								<div>
									<label htmlFor="username" className="block formLabelText">
										Username
									</label>
									<div className="mt-1">
										<input
											id="username"
											name="username"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								{/*<div>
									<label htmlFor="shopUrl" className="block formLabelText">
										Shop URL
									</label>
									<div className="mt-1">
										<input
											id="shopUrl"
											name="shop_url"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>*/}
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
