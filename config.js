// GULP CONFIG 
// Modify these variables to match your project needs  
 
module.exports = {
	
	// What is the URL for your local project?
	projectUrl: "http://jointswp-github.local",
	
	// Select Foundation components, remove components project will not use
	source: {
		scripts: 'source/scripts/**/*.js',	
	    styles: 'source/styles/**/*.scss',
	    images: 'source/images/**/*',
		php: '**/*.php'
	},
	
	assets: {
		styles: 'assets/styles/',
		scripts: 'assets/scripts/',
		images: 'assets/images/',
		all: 'assets/'
	},
	
	jshintConfig: {
		"node": true,
		"globals": {
			"document": true,
			"jQuery": true
		}
	},

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	// The following list is set as per WordPress requirements. Though, Feel free to change.
	browserSupport: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	],

	accessbilityTestUrls: [
		'http://joints-github.local/'
	]
};