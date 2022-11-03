import { Disclosure } from '@headlessui/react';
import MobileMainMenu from '../../menus/MobileMainMenu';
import UserMenu from '../../menus/UserMenu';

interface Props {
	isAuthenticated: boolean,
	avatar?: string,
	greetingName?: string
}

const MobileNavContainer = ({ isAuthenticated, avatar, greetingName }: Props): JSX.Element => {
	return (
		<Disclosure.Panel className="md:hidden">
			<div className="space-y-1 pt-2 pb-3">

				<MobileMainMenu />

			</div>
			<div className="border-t border-gray-800 pt-4 pb-3">
				<div className="flex items-center px-4">
					<div className="flex-shrink-0">
						<img className="h-10 w-10 rounded-full" src={avatar} alt="" />
					</div>
					<div className="ml-3">
						<div className="text-base font-medium text-gray-300">{greetingName}</div>
					</div>
					{/*<button
								type="button"
								className="ml-auto flex-shrink-0 rounded-full p-1 text-gray-300 hover:text-gray-50 focus:outline-none"
							>
								<span className="sr-only">View notifications</span>
								<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>*/}
				</div>
				<div className="mt-3 space-y-1">

					<UserMenu isAuthenticated={isAuthenticated} isMobile={true} />

				</div>
			</div>
		</Disclosure.Panel>
	);
};

export default MobileNavContainer;
