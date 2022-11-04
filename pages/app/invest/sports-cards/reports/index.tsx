import { NextPage } from 'next';
import AuthLayout from '../../../../../layouts/AuthLayout';
import SportsCardMenuCard from '../../../../../components/cards/SportsCardMenuCard';

const pageSlug = 'reports';

const Page: NextPage = () => {
	return (
		<AuthLayout>
			<div className="pageContainer columns">
				{/* Left column */}
				<div className="pageSideColumn hidden w-56 xl:block">
					<SportsCardMenuCard activeSlug={pageSlug} />

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
							<div className="mt-4">
								<ul>
									<li>Basketball</li>
									<li>Football</li>
									<li>Soccer</li>
									<li>Baseball</li>
									<li>Hockey</li>
									<li>MMA</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Padded Block
							</h2>
							<div className="mt-4">
								<ul>
									<li>Rookies</li>
									<li>Vintage</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Center column */}
				<div className="pageColumn">
					<div className="pageCard padded">
						<header>
							<h2 className="cardTitle">
								Sports Cards
							</h2>
							<h3 className="cardHeadline mt-4">
								Reports
							</h3>
						</header>
					</div>
				</div>

				{/* Right column */}
				<div className="pageSideColumn hidden w-72 lg:block">
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Leagues
							</h2>
							<div className="mt-4">
								<ul>
									<li>NBA Scores</li>
									<li>Schedule</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="pageCard padY">
						<div className="w-full px-4">
							<h2 className="cardTitle">
								Player Watchlist
							</h2>
							<div className="mt-4">
								<ul>
									<li>Ja Morant</li>
									<li>Steph Curry</li>
									<li>Patrick Mahomes</li>
									<li>Giannis Antetokounmpo</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
