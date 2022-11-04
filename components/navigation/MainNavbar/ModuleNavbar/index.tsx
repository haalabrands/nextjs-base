//import { Fragment } from 'react'
//import { Popover, Transition } from '@headlessui/react'
import { classNames } from '../../../../util/helpers';
import Link from 'next/link';

const moduleNav: any = {
	invest: {
		label: 'Investments',
		tabs: [
			{ label: 'Stocks & ETFs', slug: 'stocks' },
			{ label: 'Crypto', slug: 'crypto' },
			{ label: 'Sports Cards', slug: 'sports-cards' },
		],
	},
	admin: {
		label: 'Admin',
		tabs: [
			{ label: 'Users', slug: 'users' },
			{ label: 'Roles', slug: 'roles' },
			{ label: 'Logs', slug: 'logs' },
			{ label: 'Text & Language', slug: 'language' },
		],
	}
}

interface Props {
	activeSlug: string;
}

const ModuleNavbar = ({ activeSlug }: Props): JSX.Element => {
	const menu = moduleNav[activeSlug] ?? null;
	if (menu) {
		const baseUrl = '/app/'+activeSlug;

		return (
			<div className="bg-white border-b border-gray-100">
				<div className="bg-white">
					<div className="pageContainer">
						<div className="">
							<div className="flex h-10 items-center justify-between">

								<div className="items-center">
									<a href={baseUrl} className="font-bold text-xs tracking-tight text-gray-700 uppercase">
										{menu.label}
									</a>
								</div>

								<div className="hidden h-full lg:flex">
									<div className="flex h-full justify-center ml-8 gap-x-8">
										{menu.tabs.map((tab: any, tabIdx: number) => {
											const open = false;
											if (!tab.subMenu) {
												{/* Menu Link */}
												return (
													<Link key={`ModuleLink_${tabIdx}`}
																className="flex" href={`${baseUrl}/${tab.slug}`}>
														<a className={classNames(
															open
																? 'border-indigo-600 text-gray-800'
																: 'flex items-center border-transparent text-gray-500 hover:border-indigo-600 hover:text-gray-800',
															'relative z-10 -mb-px border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-0'
														)}>
															{tab.label}
														</a>
													</Link>
												)
											} else {
												{/* Dropdown Menu */}
												return (
													<></>
												)
											}
										})}
									</div>
									{/* Link menu */}
									{/* Dropdown menus */}
									{/*<Popover.Group className="ml-8">
										<div className="flex h-full justify-center space-x-8">
											{menu.tabs.map((tab, tabIdx) => (
											<Popover key={`Popover_${activeSlug}${tabIdx}`} className="flex">
												{({ open }) => (
													<>
														<div className="relative flex">
															<Popover.Button
																className={classNames(
																	open
																		? 'border-indigo-600 text-indigo-600'
																		: 'border-transparent text-gray-500 hover:text-indigo-600',
																	'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-0'
																)}
															>
																{tab.name}
															</Popover.Button>
														</div>

														<Transition
															as={Fragment}
															enter="transition ease-out duration-200"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="transition ease-in duration-150"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">

																  Presentational element used to render the bottom shadow,
																  if we put the shadow on the actual panel it pokes out the top,
																  so we use this shorter element to hide the top of the shadow

																<div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

																<div className="relative bg-white">
																	<div className="pageContainer">
																		<div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
																			<div className="grid grid-cols-2 gap-y-10 gap-x-8">
																				<div>
																					<p
																						id={`desktop-featured-heading-${tabIdx}`}
																						className="font-medium text-gray-900"
																					>
																						Featured
																					</p>
																					<ul
																						role="list"
																						aria-labelledby={`desktop-featured-heading-${tabIdx}`}
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{category.featured.map((item) => (
																							<li key={item.name} className="flex">
																								<a href={item.href} className="hover:text-gray-800">
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>
																				<div>
																					<p id="desktop-categories-heading" className="font-medium text-gray-900">
																						Categories
																					</p>
																					<ul
																						role="list"
																						aria-labelledby="desktop-categories-heading"
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{category.categories.map((item) => (
																							<li key={item.name} className="flex">
																								<a href={item.href} className="hover:text-gray-800">
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>
																			</div>
																			<div className="grid grid-cols-2 gap-y-10 gap-x-8">
																				<div>
																					<p id="desktop-collection-heading" className="font-medium text-gray-900">
																						Collection
																					</p>
																					<ul
																						role="list"
																						aria-labelledby="desktop-collection-heading"
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{category.collection.map((item) => (
																							<li key={item.name} className="flex">
																								<a href={item.href} className="hover:text-gray-800">
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>

																				<div>
																					<p id="desktop-brand-heading" className="font-medium text-gray-900">
																						Brands
																					</p>
																					<ul
																						role="list"
																						aria-labelledby="desktop-brand-heading"
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{category.brands.map((item) => (
																							<li key={item.name} className="flex">
																								<a href={item.href} className="hover:text-gray-800">
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</Popover.Panel>
														</Transition>
													</>
												)}
											</Popover>
										))}
										</div>
									</Popover.Group>*/}
								</div>

								<div className="flex flex-1 items-center justify-end">
									&nbsp;
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <></>
	}
};

export default ModuleNavbar;
