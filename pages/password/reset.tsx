import Link from 'next/link';
import { NextPage } from 'next';

const Page: NextPage = () => {
	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-12 text-center text-2xl font-semibold tracking-tight text-gray-900">
					Password Reset
				</h2>
				<p className="my-4 text-center text-sm text-gray-500">
					Set a new password for your account by entering it below.
				</p>
				<p className="my-2 text-center text-sm text-gray-500">
					Using a secure password manager such as{' '}
					<Link href="https://www.lastpass.com/" target="_blank">
						<a className="underline">LastPass</a>
					</Link>{' '}
					to encrypt and store your passwords is highly recommended.
				</p>
			</div>

			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								New Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="text"
									autoComplete="password"
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm New Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="text"
									autoComplete="password"
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
								Send Password &amp; Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Page;
