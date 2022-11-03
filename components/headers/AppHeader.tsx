import AnnouncementBar from '../headers/AnnouncementBar';
import MainHeadsUpBar from '../headers/MainHeadsUpBar';
import MainNavbar from '../navigation/MainNavbar';
import ToastNotification from '../notifications/ToastNotification';

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
			<ToastNotification type="success" label="Successfully saved!" />
		</div>
	);
};

export default AppHeader;
