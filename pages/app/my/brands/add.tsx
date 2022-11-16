import { NextPage } from 'next';
import { useRouter } from 'next/router';
import AuthLayout from '../../../../layouts/AuthLayout';
import config from '../../../../config';
import { slugify } from '../../../../util/helpers';
import { useSession } from 'next-auth/react';
import { IUserSession } from '../../../../models/userModel';

const apiBaseUrl = `${config.apiUrl}/my`;
const pageBaseUrl = `${config.appUrl}/app/my`

const pageSlug = 'brands';

interface InputData {
	slug: string;
	name: string;
	type: string;
	is_active: boolean;
	domain?: string|null;
	homepage_url?: string|null;
	creator_user_id: number|null|undefined;
	owner_user_id: number|null|undefined;
}

const Page: NextPage = () => {
	const session = useSession();
	const user: IUserSession = session.data?.user;

	const router = useRouter();

	const submitForm = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		console.log('Processing...');

		// Get data from the form.
		const input: InputData = {
			type: event.target.type.value,
			slug: slugify(event.target.name.value),
			name: event.target.name.value,
			is_active: true,
			homepage_url: event.target.homepage_url?.value || null,
			creator_user_id: user.id,
			owner_user_id: user.id,
		};
		console.log('input', input);

		if (!validateForm(input)) {
			// @TODO Handle & display error messages
			return false;
		}
		console.log('Validated.');

		const brandId = await createBrand(input);
		console.log('brandId', brandId);
		if (brandId) {
			// Redirect to the brands page
			router.push(`${pageBaseUrl}/${pageSlug}`);
		}

		// @TODO Handle error
	};

	const validateForm = (input: InputData) => {
		console.log('Validating...', input);
		if (input.type === 'business') {
			if (!input.name) {
				console.error('Missing brand name input value')
				// @TODO Handle failure response
				return false;
			}
			if (!input.homepage_url) {
				console.error('Missing URL input value')
				// @TODO Handle failure response
				return false;
			}
		} else {
			if (!input.name) {
				input.name = 'Personal'
			}
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

	const createBrand = async (data: any) => {
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

	const pageTitle = 'Add Brand';

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
						<h1 className="cardHeadline">
							{pageTitle}
						</h1>
						<form
							onSubmit={submitForm}
							className="container max-w-xl px-12 py-8 space-y-8 bg-white"
						>
							<div className="grid-cols-1 space-y-4">
								<div>
									<label htmlFor="brandType" className="block formLabelText">
										Type
									</label>
									<select
										id="brandType"
										name="type"
										className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option value="business">Business</option>
										<option value="personal">Personal</option>
									</select>
								</div>
								<div>
									<label htmlFor="brandName" className="block formLabelText">
										Brand Name
									</label>
									<div className="mt-1">
										<input
											id="brandName"
											name="name"
											type="text"
											className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="homepage_url" className="block formLabelText">
										Homepage URL
									</label>
									<div className="mt-1">
										<input
											id="homepage_url"
											name="homepage_url"
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
