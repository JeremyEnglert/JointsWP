// GULP CONFIG 
// Modify these variables to match your project needs  
 
module.exports = {
	
	// What is the URL for your local project?
	PROJECT_URL: 'http://jointswp-github.local',
	
	// Select Foundation components, remove components project will not use
	SOURCE: {
		scripts: 'source/script/**/*.js',	
	    styles: 'source/styles/**/*.scss',
	    images: 'source/images/**/*',
		php: '**/*.php'
	},
	
	ASSETS: {
		styles: 'assets/styles/',
		scripts: 'assets/scripts/',
		images: 'assets/images/',
		all: 'assets/'
	},
	
	JSHINT_CONFIG: {
		"node": true,
		"globals": {
			"document": true,
			"jQuery": true
		}
	}
};