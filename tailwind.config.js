/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			aspectRatio: {
				card: '3.5 / 2.5',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fff',
			accent: '#8358ff',
			'accent-dark': '#7444ff',
			'accent-light': '#9e7cff',
			'accent-lighter': '#b9a0ff',
			'light-base': '#f5f8fa',
			gray: colors.gray,
			green: '#10b981',
			indigo: colors.indigo,
			orange: '#feb240',
			red: '#ef4444',
			blue: '#428af8',
			jacarta: {
				base: '#5a5d79',
				50: '#f4f4f6',
				100: '#e7e8ec',
				200: '#c4c5cf',
				300: '#a1a2b3',
				400: '#7d7f96',
				500: '#5a5d79',
				600: '#363a5d',
				700: '#131740',
				800: '#101436',
				900: '#0d102d',
			},
		},
	},
	plugins: [
		require('tailgrids/plugin'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
