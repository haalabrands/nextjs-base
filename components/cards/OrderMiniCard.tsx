//import { classNames } from '../util/helpers';

/*interface Props {}*/

const OrderMiniCard = (): JSX.Element => {
	return (
		/*<div className="w-52 h-20 flex justify-center items-center bg-white p-4 border-r border-gray-300">
			Order Card
		</div>*/
	<div className="relative w-52 h-20 overflow-hidden bg-white border-r border-gray-300 clear-both">
		<div className="px-4 pt-2">
			<div className="flex items-center">
				<div className="flex-shrink-0">
					<svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"></path>
					</svg>
				</div>
				<div className="ml-4 w-0 flex-1">
					<dl>
						<dt className="truncate text-xs font-medium text-gray-500">
							Order Card
						</dt>
						<dd>
							<div className="text-sm font-medium text-gray-900">
								$102.45
							</div>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div className="absolute bottom-0 left-0 right-0 bg-gray-100 px-4 py-1">
			<div className="text-xs text-center">
				<a href="#" className="font-medium text-cyan-700 hover:text-cyan-900">
					view
				</a>
			</div>
		</div>
	</div>
	);
};

export default OrderMiniCard;
