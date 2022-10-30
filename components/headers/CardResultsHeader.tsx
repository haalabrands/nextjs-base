import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

//import { classNames } from '../util/helpers';

/*interface Props {}*/

const CardResultsHeader = (): JSX.Element => {
	return (
		<div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
			<h3 className="text-lg font-medium leading-6 text-gray-900">Cards</h3>
			<div className="mt-3 sm:mt-0 sm:ml-4">
				<label htmlFor="cardSearch" className="sr-only">
					Search
				</label>
				<div className="flex rounded-md shadow-sm">
					<div className="relative flex-grow focus-within:z-10">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
						<input
							type="text"
							name="card_search"
							id="cardSearch"
							className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Search"
						/>
					</div>
					<button
						type="button"
						className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
					>
						<BarsArrowUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						<span className="ml-2">Sort</span>
						<ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardResultsHeader;
