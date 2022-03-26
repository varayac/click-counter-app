module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
	},
}
