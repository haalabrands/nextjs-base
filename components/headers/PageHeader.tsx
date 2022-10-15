interface Props {
	title: string;
}

const PageHeader = ({ title }: Props): JSX.Element => {
	return (
		<div className="md:flex md:items-center md:justify-between py-4">
			<div className="min-w-0 flex-1">
				<h2 className="text-2xl semibold text-gray-900">{title}</h2>
			</div>
			<div className="flex md:mt-0 md:ml-4">
				{/*<button
					type="button"
					className="inline-flex items-center mt-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Edit
				</button>
				<button
					type="button"
					className="ml-3 inline-flex items-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Create
				</button>*/}
			</div>
		</div>
	);
};

export default PageHeader;
