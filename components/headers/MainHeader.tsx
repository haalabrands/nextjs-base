import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
//import { classNames } from '../../util/helpers';
import { BellIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

interface Props {
	isAuthenticated: boolean;
	avatar: string;
	greeting: string;
}

const MainHeader = ({
	isAuthenticated,
	avatar,
	greeting,
}: Props): JSX.Element => {
	//const userMenuItems:any[] = [];
	/*if (user) {
		userMenuItems.push({ label: 'Sign out', href: '#', onClick: {logout} });
	} else {
		userMenuItems.push({ label: 'Login', href: '/' });
	}*/

	return (
		<div className="flex flex-1 justify-between px-4">
			<div className="flex flex-1">
				<div className="flex flex-shrink-0 items-center">&nbsp;</div>
			</div>
			<div className="ml-4 flex items-center md:ml-6">
				<button
					type="button"
					className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2"
				>
					<span className="sr-only">View notifications</span>
					<BellIcon className="h-6 w-6" aria-hidden="true" />
				</button>

				{/* Profile dropdown */}
				<Menu as="div" className="relative ml-3">
					<div>
						<Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2">
							<span className="sr-only">Open user menu</span>
							<Image
								src={avatar}
								className="h-8 w-8 rounded-full"
								width="32"
								height="32"
								alt=""
							/>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							{/*{userMenuItems.map((item) => (
								<Menu.Item key={item.label}>
									{({ active }) => (
										<Link href={item.href}>
											<a className={classNames(
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 text-sm text-gray-700'
											)}>
												{item.label}
											</a>
										</Link>
									)}
								</Menu.Item>
							))}*/}
							{greeting && (
								<Menu.Item key="greeting">
									<p className="block px-4 py-1 text-xs text-center italic text-gray-500 border-b border-b-gray-100">
										{greeting}
									</p>
								</Menu.Item>
							)}
							{isAuthenticated && (
								<Menu.Item key="signout">
									<button
										type="button"
										onClick={signOut}
										className="block px-4 py-2 text-sm text-gray-700"
									>
										Sign Out
									</button>
								</Menu.Item>
							)}
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
	);
};

export default MainHeader;
