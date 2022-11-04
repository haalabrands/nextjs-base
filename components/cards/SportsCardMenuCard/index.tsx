import Link from 'next/link';
import config from '../../../config';

const menu = [
	{ label: 'Cards', slug: 'cards' },
	{ label: 'Watchlists', slug: 'watchlist' },
	{ label: 'Collections', slug: 'collections' },
	{ label: 'Players', slug: 'players' },
	{ label: 'Sports', slug: 'sports' },
	{ label: 'Brands & Sets', slug: 'sets' },
	{ label: 'Reports', slug: 'reports' },
];

interface Props {
	activeSlug?: string|null;
}

const SportsCardMenuCard = ({ activeSlug = null }: Props): JSX.Element => {
	return (
		<div className="pageCard padY">
			<div className="w-full px-4">
				<h2 className="cardTitle">
					Menu
				</h2>
				<div className="mt-4">
					<ul className="flex flex-col">
						{menu.map((item, itemIdx) => (
							<li
								key={`scMenuCardLink${itemIdx}`}
								className={activeSlug == item.slug ? 'active' : ''}
							>
								<Link href={`${config.sportsCardPageUrl}/${item.slug}`} >
									<a>{item.label}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SportsCardMenuCard;
