import { NextPage } from 'next';
import AuthLayout from '../../../layouts/AuthLayout';
//import config from '../../../config';

const moduleName = 'Shops';
//const moduleSlug = 'shops';
//const baseUrl = config.appUrl+'/app/'+moduleSlug;

const Page: NextPage = () => {

	return (
		<AuthLayout>
			<div className="pageContainer columns">
				{/* Left column */}
				<div className="pageSideColumn hidden w-56 xl:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Card Title
							</h2>
						</div>
					</div>
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded">
						<header>
							<h1 className="cardHeadline">
								Shop Manager
							</h1>
						</header>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Card Title
							</h2>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
