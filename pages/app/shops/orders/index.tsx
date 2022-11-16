import { NextPage } from 'next';
import AuthLayout from '../../../../layouts/AuthLayout';
import { classNames } from '../../../../util/helpers';
import { useState } from 'react';
//import config from '../../../../config';

const moduleName = 'Shops';
//const moduleSlug = 'shops';
//const moduleUrl = config.appUrl+'/app/'+moduleSlug;

const pageSlug = 'orders';

const tabs = [
	{ name: 'Open', slug: 'open' },
	{ name: 'On Hold', slug: 'on-hold' },
	{ name: 'In Progress', slug: 'in-progress' },
	{ name: 'Complete', slug: 'complete' },
	{ name: 'Canceled', slug: 'canceled' },
];

const Page: NextPage = () => {
	const [activeTab, setActiveTab] = useState('complete');
	const tabData = tabs.find(tab => tab.slug === activeTab);

	const pageTitle = tabData && tabData.name ? tabData.name +' Orders' : 'Orders';

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
								{pageTitle}
							</h1>
							<nav className="">
								<div className="sm:hidden">
									{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
									<select
										id="tabs"
										name="tabs"
										className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										defaultValue={activeTab}
										onChange={(event) => setActiveTab(event.target.value)}
									>
										{tabs.map((tab) => (
											<option key={tab.slug}>{tab.name}</option>
										))}
									</select>
								</div>
								<div className="hidden sm:block">
									<div className="border-b border-gray-100">
										<nav className="-mb-px flex space-x-8" aria-label="Tabs">
											{tabs.map((tab) => (
												<a
													key={tab.slug}
													href={tab.slug}
													className={classNames(
														activeTab === tab.slug
															? 'border-indigo-500 text-indigo-600'
															: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
														'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
													)}
													aria-current={activeTab === tab.slug ? 'page' : undefined}
												>
													{tab.name}
												</a>
											))}
										</nav>
									</div>
								</div>
							</nav>
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
