// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		'theme-scripts': './source/scripts/theme/theme-scripts.js',

		// CSS files.
		'theme-styles': './source/styles/theme/theme-styles.scss',
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css'
	},
	paths: {
		source: {
			base: './source/',
			css: './source/styles/',
			js: './source/scripts/'
		},
		assets: {
			base: './dist/',
		},
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://tenup-scaffold.test',
		open: false,
		files: [
			'**/*.php',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/svg/**/*.svg',
			'dist/images/**/*.{jpg,jpeg,png,gif}',
			'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}'
		]
	},
	manifestConfig: {
		basePath: ''
	},
};