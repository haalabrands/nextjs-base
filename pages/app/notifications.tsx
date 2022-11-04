import { NextPage } from 'next';
import AuthLayout from '../../layouts/AuthLayout';

const Page: NextPage = () => {

	return (
		<AuthLayout>
			<div className="px-4 flex mt-8">
				{/* Left column */}
				<div className="pageSideColumn">
					{/*<div className="pageCard">

					</div>*/}
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded mx-auto max-w-3xl">
						<h2 className="cardTitle">Notification History</h2>
						<div className="py-12 text-sm text-gray-500 text-center">
							<p>You don't have any notifications.</p>
						</div>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn">
					{/*<div className="pageCard">

					</div>*/}
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
