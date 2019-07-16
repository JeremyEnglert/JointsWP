
module.exports = {

	// General Webpack Settings
	entries: {
		// JS entry points - a js file will be output for each entry point
		'theme-scripts': './source/scripts/theme/theme-scripts.js',

		// CSS entry points - a css file will be output for each entry point
		'theme-styles': './source/styles/theme/theme-styles.css',
	},

	// BrowserSync Settings
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://joints-git.local'
	},

	// PostCSS Settings
	PostCssConfig: {
		stage: 0,
		grid: true
	}
};