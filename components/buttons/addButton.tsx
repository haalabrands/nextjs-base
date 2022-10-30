interface Props {
	label: string
}

const Button = ({ label }: Props): JSX.Element => {
	return (
		<div className="relative my-4 mx-4">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300"></div>
			</div>
			<div className="relative flex justify-center">
				<button type="button" className="inline-flex items-center rounded-full border border-gray-300 bg-jacarta-500 px-4 py-1.5 text-sm font-medium leading-5 text-white shadow-sm hover:bg-jacarta-700 focus:outline-none focus:ring-2 focus:ring-jacarta-500 focus:ring-offset-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="-ml-1.5 mr-1 h-5 w-5 text-white">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
					</svg>
					<span>{label}</span>
				</button>
			</div>
		</div>
	);
};

export default Button;
