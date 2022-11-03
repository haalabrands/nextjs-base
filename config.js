const appUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

const config = {
		appUrl: appUrl,
		apiUrl: appUrl + '/api',
};

export default config;
