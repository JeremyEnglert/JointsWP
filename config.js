// GULP CONFIG 
// Modify these variables to match your project needs  
 
module.exports = {
	
	
	// What is the URL for your local project?
	PROJECT_URL: 'http://jointswp-github.local',
	
	
	// Select Foundation components, remove components project will not use
	SOURCE: {
		scripts: [
			// Lets grab what-input first
		    'node_modules/what-input/dist/what-input.js',
	
			// Foundation core - needed if you want to use any of the components below
			'node_modules/foundation-sites/dist/js/plugins/foundation.core.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.util.*.js',
			
			// Pick the components you need in your project
			'node_modules/foundation-sites/dist/js/plugins/foundation.abide.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.accordionMenu.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.drilldown.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.equalizer.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.interchange.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.orbit.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.reveal.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.slider.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.magellan.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.sticky.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.tabs.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.toggler.js',
			'node_modules/foundation-sites/dist/js/plugins/foundation.tooltip.js',
	
			// Place custom JS here
			'source/scripts/js/**/*.js',	
	    ],
	    styles: 'source/styles/scss/**/*.scss',
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