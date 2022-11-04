import AnnouncementBar from '../headers/AnnouncementBar';
import MainHeadsUpBar from '../headers/MainHeadsUpBar';
import MainNavbar from '../navigation/MainNavbar';

interface Props {
	isAuthenticated: boolean;
	avatar: string;
	greeting: string;
}

const AppHeader = ({
	isAuthenticated,
	avatar,
	greeting,
}: Props): JSX.Element => {
	const showAnnouncementBar = false;

	return (
		<div className="drop-shadow-md">
			{ showAnnouncementBar && (<AnnouncementBar />) }
			<MainHeadsUpBar />
			<MainNavbar isAuthenticated={isAuthenticated} avatar={avatar} greetingName={greeting} />
		</div>
	);
};

export default AppHeader;
