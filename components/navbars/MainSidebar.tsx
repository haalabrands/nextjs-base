import { Fragment } from 'react';
//import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import {
	HomeIcon,
	ArchiveBoxIcon,
	ArrowPathRoundedSquareIcon,
	BanknotesIcon,
	ShoppingBagIcon,
	WrenchScrewdriverIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '../../util/helpers';
import Link from 'next/link';

interface Props {
	isOpen: boolean;
	setOpen: () => {};
}

const navItems = [
	{ name: 'Dashboard', href: '/app', icon: HomeIcon, current: false },
	{
		name: 'Inventory',
		href: '/app/inventory',
		icon: ArchiveBoxIcon,
		current: false,
	},
	{
		name: 'Marketplace',
		href: '/app/shop',
		icon: ShoppingBagIcon,
		current: false,
		subs: [
			{ name: 'Reports', href: '/app/shop/reports', current: false },
			{ name: 'Brands', href: '/app/shop/brands', current: false },
			{ name: 'Shops', href: '/app/shop/channels', current: false },
			{ name: 'Listings', href: '/app/shop/listings', current: false },
			{ name: 'Orders', href: '/app/shop/orders', current: false },
			{ name: 'Shipments', href: '/app/shop/shipments', current: false },
			{ name: 'Customers', href: '/app/shop/customers', current: false },
			{ name: 'Settings', href: '/app/shop/settings', current: false },
		],
	},
	{
		name: 'Projects',
		href: '/app/projects',
		icon: ArrowPathRoundedSquareIcon,
		current: false,
	},
	{ name: 'Invest', href: '/app/invest', icon: BanknotesIcon, current: false },
	{
		name: 'Server',
		href: '/app/server',
		icon: WrenchScrewdriverIcon,
		current: false,
		subs: [
			{ name: 'Logs', href: '/app/server/logs', current: false },
			{ name: 'Text & Language', href: '/app/server/language', current: false },
		],
	},
];

const MainSidebar = ({ isOpen, setOpen }: Props): JSX.Element => {
	return (
		<>
			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-jacarta-700 pt-5 pb-4">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
										</button>
									</div>
								</Transition.Child>
								<div className="flex flex-shrink-0 items-center justify-center px-4">
									&nbsp;
								</div>
								<div className="mt-5 h-0 flex-1 overflow-y-auto">
									<nav className="space-y-1 px-2">
										{navItems.map((item) => (
											<Link key={item.name} href={item.href}>
												<a
													className={classNames(
														item.current
															? 'bg-jacarta-800 text-white'
															: 'text-jacarta-100 hover:bg-jacarta-600',
														'group flex items-center px-2 py-2 text-base font-medium rounded-md'
													)}
												>
													<item.icon
														className="mr-4 h-6 w-6 flex-shrink-0 text-jacarta-300"
														aria-hidden="true"
													/>
													{item.name}
												</a>
											</Link>
										))}
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="w-14 flex-shrink-0" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex flex-grow flex-col overflow-y-auto bg-jacarta-700 pt-5">
					<div className="mt-5 flex flex-1 flex-col">
						<nav className="flex-1 space-y-1 px-2 pb-4">
							{navItems.map((item) => (
								<Link key={item.name} href={item.href}>
									<a
										className={classNames(
											item.current
												? 'bg-jacarta-800 text-white'
												: 'text-jacarta-100 hover:bg-jacarta-600',
											'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
										)}
									>
										<item.icon
											className="mr-3 h-6 w-6 flex-shrink-0 text-jacarta-300"
											aria-hidden="true"
										/>
										{item.name}
									</a>
								</Link>
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainSidebar;
