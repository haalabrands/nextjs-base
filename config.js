const appUrl = process.env.NEXTAUTH_URL;

const config = {
		appUrl: appUrl,
		apiUrl: appUrl + '/api',
};

export default config;
