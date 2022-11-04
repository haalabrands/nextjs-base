interface Props {
	id: number;
	title: string;
	slug?: string;
	imgSrc?: string;
	imgAlt?: string;
}

const TradingCard = ({ id, title, slug, imgSrc, imgAlt }: Props): JSX.Element => {
	return (
		<div key={id} className="group relative">
			<div className="cardStdAspectRatio w-full overflow-hidden group-hover:opacity-75 bg-gray-200">
				{/*<img
						src={card.img_src}
						alt={card.img_alt}
						className="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>*/}
			</div>
			<p className="mt-1 text-xs text-gray-500 text-center">
				{title}
			</p>
		</div>
	);
};

export default TradingCard;
