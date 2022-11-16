interface Props {
	type: string;
	message: string;
}

const InputAlert = ({ type, message }: Props): JSX.Element => {
	let classNames = 'px-0.5 text-xs';
	if (type === 'error') {
		classNames += ' text-red-700';
	} else if (type === 'warning') {
		classNames += ' text-orange';
	} else {
		classNames += ' text-inherit';
	}

	return <div className={classNames}>{message}</div>;
};

export default InputAlert;
