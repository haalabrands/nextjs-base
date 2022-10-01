import { NextPage } from 'next';
import PageHeader from '../../../components/headers/PageHeader';
import AuthLayout from '../../../layouts/AuthLayout';

const categories = [
	{
		slug: 'cards',
		label: 'Trading Cards',
		imgSrc: '/img/cat_sports-cards_500sq.jpg',
	},
	{
		slug: 'crypto',
		label: 'Cryptocurrency',
		imgSrc: '/img/cat_crypto_500sq.jpg',
	},
	{ slug: 'stocks', label: 'Stocks', imgSrc: '/img/cat_stocks_500sq.jpg' },
];

const Page: NextPage = () => {
	const pageTitle = 'Investment Dashboard';

	return (
		<AuthLayout>
			<div className="py-4 px-8">
				<PageHeader title={pageTitle} />
				<div className="w-full pt-8">
					<div className="mx-auto max-w-7xl overflow-hidden">
						<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 text-2xl text-center font-semibold text-gray-700">
							{categories.map((cat) => (
								<a
									key={cat.slug}
									href={`/app/invest/` + cat.slug}
									className="group mt-4"
								>
									<h2 className="mb-2">{cat.label}</h2>
									<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
										<img
											src={cat.imgSrc}
											alt={cat.label}
											className="h-full w-full object-cover object-center"
										/>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Page;
