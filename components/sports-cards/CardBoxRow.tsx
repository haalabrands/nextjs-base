import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from '../../util/helpers';
import { ChevronRightIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Props {
	name: string;
	enabled: boolean;
	open: boolean;
}

const CardBoxRow = ({
	name,
	enabled = false,
	open = false,
}: Props): JSX.Element => {
	const [isEnabled, setEnabled] = useState(enabled);
	const [isOpen, setOpen] = useState(open);

	const toggleRow = () => {
		setOpen(!isOpen);
	};

	return (
		<div className="">
			<div
				className={classNames(
					isOpen ? 'bg-indigo-50' : '',
					'w-full flex items-center px-4 hover:bg-gray-50'
				)}
			>
				<Switch.Group as="div">
					<Switch
						checked={isEnabled}
						onChange={setEnabled}
						className={classNames(
							isEnabled ? 'bg-indigo-600' : 'bg-gray-200',
							'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
						)}
					>
						<span
							aria-hidden="true"
							className={classNames(
								isEnabled ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
							)}
						/>
					</Switch>
					{/*<Switch.Label as="span" className="w-full ml-2">

				</Switch.Label>*/}
				</Switch.Group>
				<button type="button" className="block w-full" onClick={toggleRow}>
					<div className="w-full flex justify-between items-center px-4 py-4">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<img
									className="w-8 aspect-ratio-card"
									src="/img/empty-card.png"
									alt=""
								/>
							</div>
							<div className="w-full pl-2 pr-4">
								<div>
									<p className="truncate text-sm font-semibold text-jacarta-500">
										{name}
									</p>
								</div>
							</div>
						</div>
						<div>
							<ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
					</div>
				</button>
			</div>
			{isOpen && (
				<div className="flex flex-col space-y-2 mt-4 px:4 lg:px-8">
					<div className="">
						<label
							htmlFor="packsPerBox"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Box Price (MSRP)
						</label>
						<div className="mt-1">
							<input
								type="text"
								id="packsPerBox"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
					<div className="">
						<label
							htmlFor="packsPerBox"
							className="block text text-sm font-semibold leading-6 text-gray-900"
						>
							Cards per pack
						</label>
						<div className="mt-1">
							<input
								type="text"
								id="packsPerBox"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
					<div className="">
						<label
							htmlFor="packsPerBox"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Packs per box
						</label>
						<div className="mt-1">
							<input
								type="text"
								id="packsPerBox"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
					<div className="">
						<label
							htmlFor="boxesPerCase"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Boxes per case
						</label>
						<div className="mt-1">
							<input
								type="text"
								id="boxesPerCase"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
					<div className="">
						<label
							htmlFor="boxImage"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Box Photo
						</label>
						<div className="mt-1 flex items-center">
							<span className="w-24 max-w-24 aspect-ratio-card overflow-hidden bg-gray-100">
								<img
									src="/img/empty-card.jpg"
									className="h-full object-contain"
									alt=""
								/>
							</span>
							<button
								type="button"
								className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Add|Change
							</button>
						</div>
					</div>
				</div>
			)}
			<div className="flex justify-center mt-4">
				<button
					type="button"
					className="flex items-center space-x-2 text-sm text-gray-400 hover:text-red"
				>
					<TrashIcon className="w-4 h-4" />
					<span>Remove Box</span>
				</button>
			</div>
		</div>
	);
};

export default CardBoxRow;
