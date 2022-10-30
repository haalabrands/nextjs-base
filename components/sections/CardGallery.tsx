//import { classNames } from '../util/helpers';

/*interface Props {}*/

const cards = [
	{
		id: 1,
		name: 'Basic Tee 8-Pack',
		href: '#',
		price: '$256',
		options: '8 colors',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		price: '$32',
		options: 'Black',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	{
		id: 3,
		name: 'Basic Tee 8-Pack',
		href: '#',
		price: '$256',
		options: '8 colors',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	{
		id: 4,
		name: 'Basic Tee',
		href: '#',
		price: '$32',
		options: 'Black',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	{
		id: 5,
		name: 'Basic Tee 8-Pack',
		href: '#',
		price: '$256',
		options: '8 colors',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	{
		id: 6,
		name: 'Basic Tee',
		href: '#',
		price: '$32',
		options: 'Black',
		imageSrc: '/img/empty-card.jpg',
		imageAlt: '',
	},
	// More cards...
]

const CardGallery = (): JSX.Element => {
	return (
		<section aria-labelledby="card-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
			<h2 id="card-heading" className="sr-only">
				Cards
			</h2>

			<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-6 xl:grid-cols-6">
				{cards.map((card) => (
					<div
						key={`card_${card.id}`}
						className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
					>
						<div className="bg-gray-200 group-hover:opacity-75 sm:aspect-none">
							<img
								src={card.imageSrc}
								alt=""
								className="w-full h-auto object-cover object-center"
							/>
						</div>
						<div className="flex flex-1 flex-col space-y-2 p-4">
							<h3 className="text-sm font-medium text-gray-900">
								<a href={card.href}>
									<span aria-hidden="true" className="absolute inset-0"/>
									{card.name}
								</a>
							</h3>
							<div className="flex flex-1 flex-col justify-end">
								<p className="text-sm italic text-gray-500">{card.options}</p>
								<p className="text-base font-medium text-gray-900">{card.price}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);

};

export default CardGallery;
