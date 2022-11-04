const appUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

const config = {
	appUrl: appUrl,
	apiUrl: appUrl + '/api',

	sportsCardPageUrl: '/app/invest/sports-cards',
	sportsCardApiUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL + '/api/sports-cards',
};

export default config;
