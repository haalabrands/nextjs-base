import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	MagnifyingGlassIcon,
	XMarkIcon
} from '@heroicons/react/24/outline';
import MainMenu from '../../menus/MainMenu';
import UserMenu from '../../menus/UserMenu';
import MobileNavContainer from './MobileNavContainer';
import ModuleNavbar from './ModuleNavbar';
import { useRouter } from 'next/router';

interface Props {
	isAuthenticated: boolean,
	avatar?: string,
	greetingName?: string
}

const MainNavbar = ({ isAuthenticated, avatar, greetingName }: Props): JSX.Element => {
	const router = useRouter();
	const basePath = router.asPath;

	// Remove the "app" directory
	const uri = basePath.replace('/app', '');

	let moduleSlug = 'dashboard';
	let submoduleSlug = null;
	if (uri !== '') {
		// Remove the prefixed "/" URI path
		const uriDirs = uri.replace(/\//, '').split('/');
		moduleSlug = uriDirs[0];
		submoduleSlug = uriDirs[1] ?? null;
	}

	const [activeModule, setActiveModule] = useState(moduleSlug);

	return (
	<>
		<Disclosure as="nav" className="bg-gray-900">
			{({ open }) => (
				<>
					<div className="w-full mx-auto xl:container px-4 sm:px-6 lg:px-8">
						<div className="flex h-12 justify-between">
							<div className="flex">
								<div className="flex items-center md:hidden mr-6">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-gray-200 focus:outline-none">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex">
									<div className="flex flex-shrink-0 items-center">
										{/*<img
										className="block h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=white"
										alt=""
									/>*/}
									</div>
									<div className="hidden md:-my-px md:flex md:space-x-4">

										<MainMenu activeModule={activeModule} />

									</div>
								</div>
							</div>
							<div className="hidden sm:ml-6 sm:flex sm:items-center">
								<button
									type="button"
									className="rounded-full p-1 sm:ml-4"
								>
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-7 w-7 stroke-gray-400 hover:stroke-white" aria-hidden="true" />
								</button>

								{/*<button
									type="button"
									className="rounded-full p-1 sm:ml-4"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-7 w-7 stroke-gray-400 hover:stroke-white" aria-hidden="true" />
								</button>*/}

								{/* Notifications */}
								<Menu as="div" className="relative ml-4">
									<div>
										<Menu.Button className="rounded-full p-1 sm:ml-4">
											<BellIcon className="h-7 w-7 stroke-gray-400 hover:stroke-white" aria-hidden="true" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>

										<Menu.Items className="absolute right-0 z-10 w-72 mt-2 p-4 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
											<Menu.Item key={`NotificationsMenu`}>
												<div className="cardTitle mb-4">Notifications</div>
											</Menu.Item>
											<Menu.Item key={`Notification1`}>
												<span className="text-sm">There are no new notifications.</span>
											</Menu.Item>
											<Menu.Item key={`Notification1`}>
												<a
													href={`/app/notifications`}
													className='block pt-4 text-sm text-gray-700 text-center hover:text-indigo-500'
												>
													View all notifications
												</a>
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>

								{/* User Account Menu */}
								<Menu as="div" className="relative ml-4">
									<div>
										<Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											<img className="h-8 w-8 rounded-full" src={avatar} alt="" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<UserMenu isAuthenticated={isAuthenticated} isMobile={false} />
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<MobileNavContainer isAuthenticated={isAuthenticated} avatar={avatar} greetingName={greetingName} />
				</>
			)}
		</Disclosure>

		<ModuleNavbar activeSlug={activeModule} />
	</>
	);
};

export default MainNavbar;
