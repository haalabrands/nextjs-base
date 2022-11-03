import { ReactNode, useState } from 'react';
import AppHeader from '../components/headers/AppHeader';
import { useSession } from 'next-auth/react';

interface Props {
	children: ReactNode;
}

const AuthLayout = ({ children }: Props): JSX.Element => {
	const session = useSession();

	//const [sidebarOpen6, setSidebarOpen] = useState(false);

	const isAuthenticated = session.status === 'authenticated';
	const avatar = session?.data?.user?.avatar || '/img/default-avatar.png';
	const greeting = session?.data?.user?.greeting || 'Guest';

	return (
		<div id="app" className="min-h-screen bg-gray-50">
			<AppHeader
				isAuthenticated={isAuthenticated}
				avatar={avatar}
				greeting={greeting}
			/>
			<main>{children}</main>
		</div>
	);
};

export default AuthLayout;
