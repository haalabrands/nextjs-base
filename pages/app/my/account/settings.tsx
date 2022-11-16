import { NextPage } from 'next';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { classNames } from '../../../../util/helpers';
import AuthLayout from '../../../../layouts/AuthLayout';

const tabs = [
	{ label: 'General', href: '#', current: true },
	{ label: 'Notifications', href: '#', current: false },
	{ label: 'Subscription', href: '#', current: false },
	{ label: 'Teams', href: '#', current: false },
];

const Page: NextPage = () => {

	const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
	const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

	const formSubmit = () => {

	}

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
					<div className="pageCard p-4 lg:p-8 mx-auto max-w-3xl">
						<h2 className="cardTitle">My Account</h2>
						<form onSubmit={formSubmit} className="relative pt-8 pb-12 flex-1">
							<h1 className="cardHeadline">Settings</h1>
							<div className="py-6">
								{/* Tabs */}
								<div className="lg:hidden">
									<select
										id="selected-tab"
										name="selected-tab"
										className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
										defaultValue={tabs.find((tab) => tab.current).label}
									>
										{tabs.map((tab) => (
											<option key={tab.label}>{tab.label}</option>
										))}
									</select>
								</div>
								<div className="hidden lg:block">
									<div className="border-b border-gray-100">
										<nav className="-mb-px flex space-x-8">
											{tabs.map((tab) => (
												<a
													key={tab.label}
													href={tab.href}
													className={classNames(
														tab.current
															? 'border-indigo-500 text-indigo-600 hover:cursor-default'
															: 'border-transparent text-gray-500 hover:border-indigo-300 hover:text-gray-700',
														'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
													)}
												>
													{tab.label}
												</a>
											))}
										</nav>
									</div>
								</div>

								{/* Description list with inline editing */}
								<div className="mt-10 divide-y divide-gray-200">
									<div className="space-y-1">
										<h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
										<p className="max-w-2xl text-sm text-gray-500">
											This information will be displayed publicly so be careful what you share.
										</p>
									</div>
									<div className="mt-6">
										<dl className="divide-y divide-gray-200">
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
												<dt className="text-sm font-medium text-gray-500">Name</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">Chelsea Hagon</span>
													<span className="ml-4 flex-shrink-0">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
													</span>
												</dd>
											</div>
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
												<dt className="text-sm font-medium text-gray-500">Photo</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">
														<img
															className="h-8 w-8 rounded-full"
															src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
															alt=""
														/>
													</span>
													<span className="ml-4 flex flex-shrink-0 items-start space-x-4">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
														<span className="text-gray-300" aria-hidden="true">
															|
														</span>
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Remove
														</button>
													</span>
												</dd>
											</div>
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
												<dt className="text-sm font-medium text-gray-500">Email</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">chelsea.hagon@example.com</span>
													<span className="ml-4 flex-shrink-0">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
													</span>
												</dd>
											</div>
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
												<dt className="text-sm font-medium text-gray-500">Job title</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">Human Resources Manager</span>
													<span className="ml-4 flex-shrink-0">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
													</span>
												</dd>
											</div>
										</dl>
									</div>
								</div>

								<div className="mt-10 divide-y divide-gray-200">
									<div className="space-y-1">
										<h3 className="text-lg font-medium leading-6 text-gray-900">Account</h3>
										<p className="max-w-2xl text-sm text-gray-500">
											Manage how information is displayed on your account.
										</p>
									</div>
									<div className="mt-6">
										<dl className="divide-y divide-gray-200">
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
												<dt className="text-sm font-medium text-gray-500">Language</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">English</span>
													<span className="ml-4 flex-shrink-0">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
													</span>
												</dd>
											</div>
											<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
												<dt className="text-sm font-medium text-gray-500">Date format</dt>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<span className="flex-grow">DD-MM-YYYY</span>
													<span className="ml-4 flex flex-shrink-0 items-start space-x-4">
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Update
														</button>
														<span className="text-gray-300" aria-hidden="true">
															|
														</span>
														<button
															type="button"
															className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
														>
															Remove
														</button>
													</span>
												</dd>
											</div>
											<Switch.Group as="div" className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
												<Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
													Automatic timezone
												</Switch.Label>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<Switch
														checked={automaticTimezoneEnabled}
														onChange={setAutomaticTimezoneEnabled}
														className={classNames(
															automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200',
															'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
														)}
													>
														<span
															aria-hidden="true"
															className={classNames(
																automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0',
																'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
															)}
														/>
													</Switch>
												</dd>
											</Switch.Group>
											<Switch.Group
												as="div"
												className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
											>
												<Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
													Auto-update applicant data
												</Switch.Label>
												<dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
													<Switch
														checked={autoUpdateApplicantDataEnabled}
														onChange={setAutoUpdateApplicantDataEnabled}
														className={classNames(
															autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200',
															'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
														)}
													>
														<span
															aria-hidden="true"
															className={classNames(
																autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
																'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
															)}
														/>
													</Switch>
												</dd>
											</Switch.Group>
										</dl>
									</div>
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
