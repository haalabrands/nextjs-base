import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import InputAlert from '../components/notifications/InputAlert';

const Page: NextPage = () => {
	const [input, setInput] = useState({
		username: '',
		password: '',
	});
	const [error, setError] = useState('');

	const router = useRouter();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	const login = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const res = await signIn('credentials', { ...input, redirect: false });
		if (res?.error) {
			const errMsg =
				res.error === 'CredentialsSignin'
					? 'Invalid username or password'
					: res.error;
			setError(errMsg);
			return null;
		}
		if (!res?.ok) {
			setError('Failed to login. Please try again.');
			return null;
		}

		const redirectUrl = '/app';

		// @TODO Check for and set the user's previously intended page url

		await router.push(redirectUrl);
	};

	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-12 text-center text-2xl font-semibold tracking-tight text-gray-900">
					Account Login
				</h2>
			</div>

			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" method="post" onSubmit={login}>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700"
							>
								Username
							</label>
							<div className="mt-1">
								<input
									id="username"
									name="username"
									type="text"
									autoComplete="username"
									onChange={handleChange}
									value={input.username}
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
								Password
							</label>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									onChange={handleChange}
									value={input.password}
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<Link href="/password/forgot">
									<a className="font-medium text-indigo-600 hover:text-indigo-500">
										Forgot your password?
									</a>
								</Link>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Sign in
							</button>
						</div>

						{error && <InputAlert type="error" message={error} />}
					</form>
					<div className="mt-12 flex items-center justify-center">
						<div className="text-sm">
							<span>Don&apos;t have an account?</span>
							<Link href="/register">
								<a className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
									Click here to sign up.
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
