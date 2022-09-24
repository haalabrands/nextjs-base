import { NextPage } from 'next';
import PageHeader from '../../components/headers/PageHeader';
import AuthLayout from '../../layouts/AuthLayout';

const Page: NextPage = () => {
	const pageTitle = 'Dashboard';

	return (
		<AuthLayout>
			<div className="pb-8">
				<PageHeader title={pageTitle} />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
					{/* Replace with page content */}
					<div className="">
						<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
					</div>
					{/* /End page content */}
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
