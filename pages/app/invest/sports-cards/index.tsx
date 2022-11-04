import { NextPage } from 'next';
import AuthLayout from '../../../../layouts/AuthLayout';
import PageHeader from '../../../../components/headers/PageHeader';
import TradingCardPageNav from '../../../../components/navigation/TradingCardPageNav';

const Page: NextPage = () => {
	const pageTitle = 'Trading Cards : Dashboard';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />

				<div className="mx-auto overflow-hidden">
					<TradingCardPageNav activeTab="" />

					{/* Replace with page content */}
					<div className="mt-8"></div>
					{/* /End page content */}
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
