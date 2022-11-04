import OrderMiniCard from '../cards/OrderMiniCard';

const MainHeadsUpBar = (): JSX.Element => {
	return (
		<div className="max-h-20 overflow-hidden hidden xl:block">
			<div className="container flex justify-center bg-gray-50 px-0">
				<div className="flex items-center px-4 space-x-4">
					<div>
						<select
							id="module"
							name="module_slug"
							defaultValue="orders"
							className="block w-full w-32 rounded-full border-gray-300 py-2 pl-3 pr-8 text-base focus:outline-none sm:text-sm"
						>
							<option value="orders">Orders</option>
							<option value="crypto">Crypto</option>
							<option value="stocks">Stocks</option>
							<option value="sports-cards">Sports Cards</option>
						</select>
					</div>
					<div>
						<select
							id="moduleDateSelect"
							name="module_date"
							defaultValue="today"
							className="block w-full w-28 rounded-full border-gray-300 py-2 pl-3 pr-8 text-base focus:outline-none sm:text-sm"
						>
							<option value="today">Today</option>
							<option value="yesterday">Yesterday</option>
						</select>
					</div>
				</div>
				<div className="relative w-full">
					<div className="flex justify-start border-l border-gray-300">
						<OrderMiniCard />
						<OrderMiniCard />
						<OrderMiniCard />
						<OrderMiniCard />
					</div>
					<div className="absolute right-0 top-0 bottom-0 flex items-center px-4 bg-white text-gray-400 text-3xl border-l border-gray-300 cursor-pointer">
						&raquo;
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeadsUpBar;
