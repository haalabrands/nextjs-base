import Link from 'next/link';
import config from '../../config';
//import { classNames } from '../util/helpers';

const baseUrl = config.appUrl+'/app/shops';

/*interface Props {

}*/

const ShopsCardLinkMenu = (): JSX.Element => {
	return (
		<>
			<Link href={`${baseUrl}`}>
				<a className="cardMenuLink">
					Shops Overview
				</a>
			</Link>
			<Link href={`${baseUrl}/orders`}>
				<a className="cardMenuLink">
					Orders
				</a>
			</Link>
			<Link href={`${baseUrl}/shipments`}>
				<a className="cardMenuLink">
					Shipments
				</a>
			</Link>
			<Link href={`${baseUrl}/listings`}>
				<a className="cardMenuLink">
					Listings
				</a>
			</Link>
			<Link href={`${baseUrl}/channels`}>
				<a className="cardMenuLink">
					Sales Channels
				</a>
			</Link>
			<Link href={`${baseUrl}/brands`}>
				<a className="cardMenuLink">
					Brands
				</a>
			</Link>
			<Link href={`${baseUrl}/marketplaces`}>
				<a className="cardMenuLink">
					Marketplaces
				</a>
			</Link>
		</>
	);
};

export default ShopsCardLinkMenu;
