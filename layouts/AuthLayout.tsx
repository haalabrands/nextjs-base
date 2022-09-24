import { ReactNode, useState } from 'react';
import MainHeader from '../components/headers/MainHeader';
import MainSidebar from '../components/navbars/MainSidebar';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

interface Props {
	children: ReactNode;
}

const AuthLayout = ({ children }: Props): JSX.Element => {
	const session = useSession();

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const isAuthenticated = session.status === 'authenticated';
	const avatar = session?.data?.user?.avatar || '/img/default-avatar.png';
	const greeting = session?.data?.user?.greeting || 'Guest';

	return (
		<div id="app">
			<MainSidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
			<div className="flex flex-1 flex-col md:pl-64">
				<div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
					<button
						type="button"
						className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jacarta-500 md:hidden"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
					</button>
					<MainHeader
						isAuthenticated={isAuthenticated}
						avatar={avatar}
						greeting={greeting}
					/>
				</div>
				<main>{children}</main>
			</div>
		</div>
	);
};

export default AuthLayout;
