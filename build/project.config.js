
module.exports = {

	/* General Webpack Settings */
	entries: {

		// JS entry points - a js file will be output for each entry point
		'theme-scripts': './source/scripts/theme/theme-scripts.js',

		// CSS entry points - a css file will be output for each entry point
		'theme-styles': './source/styles/theme/theme-styles.css',
	},


	/* BrowserSync Settings */
	BrowserSyncConfig: {

		// URL of local environment
		proxy: 'http://joints-git.local',
		host: 'localhost',
		port: 3000

	},


	/* PostCSS Settings */
	PostCssConfig: {

		// Determines which CSS features to polyfill
		// https://github.com/csstools/postcss-preset-env#stage
		// https://preset-env.cssdb.org/features
		stage: 0,

		// Enable CSS grid pollyfills
		grid: true

		// Adjust browser support in package.json

	},


	/* Accessbility Test Settings */ 
	a11yTestConfig: {

		// Local URLs to run accessibility tests on
		urls: [
			'http://joints-git.local/',
			'http://joints-git.local/sticky/sticky/'
		], 

		// The accessibility standard to use when testing pages. 
		// This should be one of Section508, WCAG2A, WCAG2AA, or WCAG2AAA.
		standard: 'WCAG2AA',

		// Issues with a type of warning are not directly actionable.
		includeWarnings: true,

	}

};