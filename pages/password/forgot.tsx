import Link from 'next/link';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-12 text-center text-2xl font-semibold tracking-tight text-gray-900">
					Forgot your password?
				</h2>
				<p className="my-4 text-center text-sm text-gray-500">
					To reset your password, enter the username or email your account is
					registered with. An email with instructions will then be sent to reset your
					password.
				</p>
			</div>

			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="user-handle"
								className="block text-sm font-medium text-gray-700"
							>
								Username or Email Address
							</label>
							<div className="mt-1">
								<input
									id="user-handle"
									name="user_handle"
									type="text"
									autoComplete="user-handle"
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Send Password Reset
							</button>
						</div>
					</form>

					<div className="mt-12 flex items-center justify-center">
						<div className="text-sm">
							<span>Remembered your password?</span>
							<Link href="/login">
								<a className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
									Click here to login.
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
