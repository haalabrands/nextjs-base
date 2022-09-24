import { ChangeEvent, FormEvent, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { UserRegistrationProps, validationRules } from '../models/userModel';
import InputAlert from '../components/notifications/InputAlert';

const Page: NextPage = () => {
	const router = useRouter();

	const initialState: UserRegistrationProps = {
		full_name: '',
		username: '',
		email: '',
		password: '',
		password_confirm: '',
	};

	const [input, setInput] = useState(initialState);
	const [errors, setErrors] = useState({
		...initialState,
		message: '',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name as keyof typeof initialState;

		if (errors[name]) setErrors({ ...errors, [name]: '' });

		setInput((prev) => ({ ...prev, [name]: event.target.value }));
	};

	const validateEmailAddress = () => {
		// Validate the character length
		const rules = validationRules.email;
		if (
			input.email.length < rules.minLength ||
			input.email.length > rules.maxLength
		) {
			return setErrors({
				...errors,
				password:
					'Email address must be between ' +
					rules.minLength +
					' - ' +
					rules.maxLength +
					' characters in length.',
			});
		}

		// Validate this is a properly formatted email address
		// @TODO

		// Scrub email through blacklist/suspended/spam user database
		// @TODO
	};

	const validateUsername = () => {
		// Validate the character length
		const rules = validationRules.username;
		if (
			input.username.length < rules.minLength ||
			input.username.length > rules.maxLength
		) {
			return setErrors({
				...errors,
				username:
					'Username must be between ' +
					rules.minLength +
					' - ' +
					rules.maxLength +
					' characters in length.',
			});
		}
	};

	const validateFullName = () => {
		// Validate the character length
		const rules = validationRules.full_name;
		if (
			input.full_name.length < rules.minLength ||
			input.full_name.length > rules.maxLength
		) {
			return setErrors({
				...errors,
				full_name:
					'Name must be between ' +
					rules.minLength +
					' - ' +
					rules.maxLength +
					' characters in length.',
			});
		}
	};

	const validatePassword = () => {
		// Validate that password matches the confirmation password
		if (input.password !== input.password_confirm) {
			return setErrors({
				...errors,
				password: 'Passwords must match',
				password_confirm: 'Passwords must match',
			});
		}

		// Validate the password length
		const rules = validationRules.password;
		if (
			input.password.length < rules.minLength ||
			input.password.length > rules.maxLength
		) {
			return setErrors({
				...errors,
				password:
					'Password must be between ' +
					rules.minLength +
					' - ' +
					rules.maxLength +
					' characters in length.',
				password_confirm: '',
			});
		}
	};

	const register = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		/*
		Validate input fields
		 */
		validateUsername();
		validateEmailAddress();
		validateFullName();
		validatePassword();

		try {
			const res = await axios.post('/api/auth/register', { input });
			if (typeof res.data.id !== 'number') {
				setErrors({
					...initialState,
					message: 'Something went wrong',
				});
				return false;
			}

			const result = await signIn('credentials', {
				username: input.username,
				password: input.password,
				redirect: false,
			});

			return null;

			if (result?.ok) {
				// User account successfully created.
				// Redirect user to dashboard
				router.push('/');
			} else {
				//setErrors({ message: 'Something went wrong' });
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Unknown error';

			setErrors({
				...initialState,
				message: message,
			});
		}
	};

	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-12 text-center text-2xl font-semibold tracking-tight text-gray-900">
					Create an Account
				</h2>
			</div>

			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={register}>
						<div>
							<label
								htmlFor="full-name"
								className="block text-sm font-medium text-gray-700"
							>
								Your Name
							</label>
							<div className="mt-1">
								<input
									id="full-name"
									name="full_name"
									type="text"
									autoComplete="full-name"
									value={input.full_name}
									onChange={handleChange}
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{errors.full_name && (
								<InputAlert type="error" message={errors.full_name} />
							)}
						</div>

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
									value={input.username}
									onChange={handleChange}
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{errors.username && (
								<InputAlert type="error" message={errors.username} />
							)}
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									type="text"
									autoComplete="email"
									value={input.email}
									onChange={handleChange}
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{errors.email && <InputAlert type="error" message={errors.email} />}
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
									required
									value={input.password}
									onChange={handleChange}
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{errors.password && (
								<InputAlert type="error" message={errors.password} />
							)}
						</div>

						<div>
							<label
								htmlFor="password-confirm"
								className="block text-sm font-medium text-gray-700"
							>
								Confirm Password
							</label>
							<div className="mt-1">
								<input
									id="password-confirm"
									name="password_confirm"
									type="password"
									value={input.password_confirm}
									onChange={handleChange}
									required
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							{errors.password_confirm && (
								<InputAlert type="error" message={errors.password_confirm} />
							)}
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Sign in
							</button>
						</div>

						{errors.message && <InputAlert type="error" message={errors.message} />}
					</form>
					<div className="mt-12 flex items-center justify-center">
						<div className="text-sm">
							<span>Already have an account?</span>
							<Link
								href="/login"
								className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
							>
								Click here to login.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
