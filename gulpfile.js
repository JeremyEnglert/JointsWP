// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    filter = require('gulp-filter'),
    webpack = require("webpack"),
    webpackStream = require('webpack-stream'),
    plugin = require('gulp-load-plugins')();
    
 
// GULP VARIABLES   
// Modify these variables to match your project needs   

// Set local URL if using Browser-Sync
const LOCAL_URL = 'http://jointswp-github.dev/';

const TRANSLATE = {
	domain: 'WPGULP', // Your textdomain here
	destFile: 'WPGULP.pot',
	packageName:'WPGULP',
	bugReport: 'https://AhmadAwais.com/contact/', // Where can users report bugs.
	lastTranslator: 'Ahmad Awais <your_email@email.com>', // Last translator Email ID.
	team: 'WPTie <your_email@email.com>', // Team's Email ID.
	translatePath: './languages' // Where to save the translation files.
};

// Set path to Foundation files
const FOUNDATION = 'node_modules/foundation-sites';

// Select Foundation components, remove components project will not use
const SOURCE = {
	scripts: [
		// Lets grab what-input first
	    'node_modules/what-input/dist/what-input.js',
	    

		// For testing
		//FOUNDATION + '/js/entries/foundation.js',
		//FOUNDATION + '/dist/js/foundation.js',
		
		// Foundation core - needed if you want to use any of the components below
		FOUNDATION + '/js/entries/plugins/foundation.core.js',
		FOUNDATION + '/js/entries/plugins/foundation.util.*.js',
		
		// Pick the components you need in your project
		FOUNDATION + '/js/entries/plugins/foundation.abide.js',
		FOUNDATION + '/js/entries/plugins/foundation.accordion.js',
		FOUNDATION + '/js/entries/plugins/foundation.accordionMenu.js',
		FOUNDATION + '/js/entries/plugins/foundation.drilldown.js',
		FOUNDATION + '/js/entries/plugins/foundation.dropdown.js',
		FOUNDATION + '/js/entries/plugins/foundation.dropdownMenu.js',
		FOUNDATION + '/js/entries/plugins/foundation.equalizer.js',
		FOUNDATION + '/js/entries/plugins/foundation.interchange.js',
		FOUNDATION + '/js/entries/plugins/foundation.magellan.js',
		FOUNDATION + '/js/entries/plugins/foundation.offcanvas.js',
		FOUNDATION + '/js/entries/plugins/foundation.orbit.js',
		FOUNDATION + '/js/entries/plugins/foundation.responsiveMenu.js',
		FOUNDATION + '/js/entries/plugins/foundation.responsiveToggle.js',
		FOUNDATION + '/js/entries/plugins/foundation.reveal.js',
		FOUNDATION + '/js/entries/plugins/foundation.slider.js',
		FOUNDATION + '/js/entries/plugins/foundation.sticky.js',
		FOUNDATION + '/js/entries/plugins/foundation.tabs.js',
		FOUNDATION + '/js/entries/plugins/foundation.toggler.js',
		FOUNDATION + '/js/entries/plugins/foundation.tooltip.js',

		// Place custom JS here, files will be concantonated, minified if ran with --production
		'assets/scripts/js/**/*.js',	
    ],
   
	// Scss files will be concantonated, minified if ran with --production
	styles: 'assets/styles/scss/**/*.scss',
		
	// Images placed here will be optimized
	images: 'assets/images/**/*',
	
	php: '**/*.php'
};

const ASSETS = {
	styles: 'assets/styles/',
	scripts: 'assets/scripts/',
	images: 'assets/images/',
	all: 'assets/'
};


let webpackConfig = {
  rules: [
    {
      use: [
        {
          loader: 'babel-loader',
        }
      ]
    }
  ]
}

// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript 
gulp.task('scripts', function() {
	
	const CUSTOMFILTER = filter(ASSETS.scripts + 'js/**/*.js', {restore: true});
	
	return gulp.src(SOURCE.scripts)
		.pipe(plugin.plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.babel({
			presets: ['es2015'],
			compact: true,
			ignore: ['what-input.js']
		}))
		.pipe(CUSTOMFILTER)
			.pipe(plugin.jshint())
			.pipe(plugin.jshint.reporter('jshint-stylish'))
			.pipe(CUSTOMFILTER.restore)
		//.pipe(webpackStream({module: webpackConfig}, webpack))
		.pipe(plugin.concat('scripts.js'))
		.pipe(plugin.uglify())
		.pipe(plugin.sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest(ASSETS.scripts))
});

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
	return gulp.src(SOURCE.styles)
		.pipe(plugin.plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.sass())
		.pipe(plugin.autoprefixer({
		    browsers: ['last 2 versions'],
		    cascade: false
		}))
		.pipe(plugin.cssnano())
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.styles))
		.pipe(browserSync.reload({
          stream: true
        }));
});

// Optimize images, move into assets directory
gulp.task('images', function() {
	return gulp.src(SOURCE.images)
		.pipe(plugin.newer(ASSETS.images))
		.pipe(plugin.imagemin())
		.pipe(gulp.dest(ASSETS.images))
});

 gulp.task( 'translate', function () {
     return gulp.src( SOURCE.php )
         .pipe(plugin.wpPot( {
             domain: 'jointswp',
             package: 'Example project'
         } ))
        .pipe(gulp.dest('file.pot'));
 });

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    
    // Watch these files
    var files = [
    	SOURCE.styles, 
    	SOURCE.scripts,
    	SOURCE.images,
    	SOURCE.php,
    ];

    browserSync.init(files, {
	    proxy: LOCAL_URL,
    });
    
    gulp.watch(SOURCE.styles, gulp.parallel('styles'));
    gulp.watch(SOURCE.scripts, gulp.parallel('scripts')).on('change', browserSync.reload);
    gulp.watch(SOURCE.images, gulp.parallel('images'));

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch(SOURCE.styles, gulp.parallel('styles'));
	
	// Watch scripts files
	gulp.watch(SOURCE.scripts, gulp.parallel('scripts'));
	
	// Watch images files
	gulp.watch(SOURCE.images, gulp.parallel('images'));
  
}); 

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts', 'images'));