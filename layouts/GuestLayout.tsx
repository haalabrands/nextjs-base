import { ReactNode, useState } from 'react';

interface Props {
	children: ReactNode;
}

const GuestLayout = ({ children }: Props): JSX.Element => {
	return (
		<div id="app">
			<main>{children}</main>
		</div>
	);
};

export default GuestLayout;
