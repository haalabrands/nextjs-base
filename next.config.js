/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	images: {
		domains: ['images.unsplash.com'],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},

	async redirects() {
		return [
			{
				source: '/my',
				destination: '/my/nfts',
				permanent: true,
			},
		];
	},
};
