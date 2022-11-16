import { NextPage } from 'next';
import AuthLayout from '../../layouts/AuthLayout';

const Page: NextPage = () => {

	return (
		<AuthLayout>
			<div className="container flex space-x-6 mt-8">
				{/* Left column */}
				<div className="flex-none w-56 h-full space-y-2 hidden lg:block">
					<div className="pageCard">
						<div className="border-b border-gray-300">
							<div className="bg-gray-900 text-gray-100 font-bold uppercase text-sm text-center">
								Full Width Block
							</div>
						</div>
						<div className="p-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
						</div>
					</div>
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
						</div>
					</div>
				</div>

				{/* Center column */}
				<div className="grow h-full space-y-2">
					<div className="pageCard padded">
						<header>
							<h3 className="cardTitle faded">
								Subtitle
							</h3>
							<h1 className="cardTitle mt-4">
								Headline
							</h1>
						</header>
					</div>
				</div>

				{/* Right column */}
				<div className="flex-none w-72 h-full space-y-2 hidden 2xl:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
