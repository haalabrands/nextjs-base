import { NextPage } from 'next';
import AuthLayout from '../../../layouts/AuthLayout';

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
						<h2 className="cardTitle">Account Settings</h2>
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
