module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			files: ['*.tsx, *.jsx'],
			rules: {
				'@typescript-eslint/ban-types': [
					'error',
					{
						extendDefaults: true,
						types: {
							'{}': false,
						},
					},
				],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-unused-vars': [
			1,
			{
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		// suppress errors for missing 'import React' in files
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'react/prop-types': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		semi: ['error', 'always'],
	},
};
