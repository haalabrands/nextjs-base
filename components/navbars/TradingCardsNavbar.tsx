import { classNames } from '../../util/helpers';

//import { Fragment } from 'react';
import { Popover /*, Transition*/ } from '@headlessui/react';
import { Bars3Icon /*, XMarkIcon*/ } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const baseUrl = '/app/invest/sports-cards';

const menuItems = [
	{ slug: 'shop', label: 'Shop', imgSrc: '' },
	{ slug: 'watchlist', label: 'Watchlist', imgSrc: '' },
	{ slug: 'collections', label: 'Collections', imgSrc: '' },
	{ slug: 'players', label: 'Players', imgSrc: '' },
	{ slug: 'sports', label: 'Sports', imgSrc: '' },
	{ slug: 'brands', label: 'Brands' },
	{ slug: 'sets', label: 'Sets', imgSrc: '' },
	{ slug: 'reports', label: 'Reports', imgSrc: '' },
];

const TradingCardsNavbar = (): JSX.Element => {
	return (
		<Popover className="relative bg-white">
			<div className="flex items-center justify-start py-6">
				<div className="-my-2 -mr-2 md:hidden">
					<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>
				<div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
					<Popover.Group as="nav" className="flex space-x-10">
						{menuItems.map((item) => (
							<Link key={item.slug} href={`${baseUrl}/${item.slug}`}>
								<a className="text-base font-medium text-gray-500 hover:text-gray-900">
									{item.label}
								</a>
							</Link>
						))}

						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-gray-900' : 'text-gray-500',
											'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										)}
									>
										<span>More</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-gray-600' : 'text-gray-400',
												'ml-2 h-5 w-5 group-hover:text-gray-500'
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									{/*<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel
											className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
											<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{resources.map((item) => (
														<a key={item.name} href={item.href} className="-m-3 block rounded-md p-3 hover:bg-gray-50">
															<p className="text-base font-medium text-gray-900">{item.name}</p>
															<p className="mt-1 text-sm text-gray-500">{item.description}</p>
														</a>
													))}
												</div>
											</div>
										</Popover.Panel>
									</Transition>*/}
								</>
							)}
						</Popover>
					</Popover.Group>
					<div className="flex items-center md:ml-12">
						<a
							href="#"
							className="text-base font-medium text-gray-500 hover:text-gray-900"
						>
							Search
						</a>
						<a
							href="#"
							className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
						>
							Add New
						</a>
					</div>
				</div>
			</div>

			{/*<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt="Your Company"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button
										className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true"/>
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-6">
									{solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
										>
											<div
												className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
												<item.icon className="h-6 w-6" aria-hidden="true"/>
											</div>
											<div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5">
							<div className="grid grid-cols-2 gap-4">
								<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Pricing
								</a>

								<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Docs
								</a>

								<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Enterprise
								</a>
								{resources.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="mt-6">
								<a
									href="#"
									className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
								>
									Sign up
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Existing customer?{' '}
									<a href="#" className="text-indigo-600 hover:text-indigo-500">
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>*/}
		</Popover>
	);
};

export default TradingCardsNavbar;
