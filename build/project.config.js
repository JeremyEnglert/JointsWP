
module.exports = {

	/* General Webpack Settings */
	entries: {

		// JS entry points - a js file will be output for each entry point
		'theme-scripts': './source/scripts/theme/theme-scripts.js',

		// CSS entry points - a css file will be output for each entry point
		'theme-styles': './source/styles/theme/theme-styles.scss',
	},


	/* BrowserSync Settings */
	BrowserSyncConfig: {

		// URL of local environment
		proxy: 'http://joints-git.local',
		host: 'localhost',
		port: 3000

	},


	/* Accessbility Test Settings */ 
	a11yTestConfig: {

		// Local URLs to run accessibility tests on
		urls: [
			'http://joints-git.local/',
			'http://joints-git.local/home/'
		], 

		// The accessibility standard to use when testing pages. 
		// This should be one of Section508, WCAG2A, WCAG2AA, or WCAG2AAA.
		standard: 'WCAG2AA',

		// Issues with a type of warning are not directly actionable.
		includeWarnings: true,

	}

};