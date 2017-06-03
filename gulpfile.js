// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    filter = require('gulp-filter'),
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

		// Foundation core - needed if you want to use any of the components below
		FOUNDATION + '/js/foundation.core.js',
		FOUNDATION + '/js/foundation.util.*.js',
		
		// Pick the components you need in your project
		FOUNDATION + '/js/foundation.abide.js',
		FOUNDATION + '/js/foundation.accordion.js',
		FOUNDATION + '/js/foundation.accordionMenu.js',
		FOUNDATION + '/js/foundation.drilldown.js',
		FOUNDATION + '/js/foundation.dropdown.js',
		FOUNDATION + '/js/foundation.dropdownMenu.js',
		FOUNDATION + '/js/foundation.equalizer.js',
		FOUNDATION + '/js/foundation.interchange.js',
		FOUNDATION + '/js/foundation.magellan.js',
		FOUNDATION + '/js/foundation.offcanvas.js',
		FOUNDATION + '/js/foundation.orbit.js',
		FOUNDATION + '/js/foundation.responsiveMenu.js',
		FOUNDATION + '/js/foundation.responsiveToggle.js',
		FOUNDATION + '/js/foundation.reveal.js',
		FOUNDATION + '/js/foundation.slider.js',
		FOUNDATION + '/js/foundation.sticky.js',
		FOUNDATION + '/js/foundation.tabs.js',
		FOUNDATION + '/js/foundation.toggler.js',
		FOUNDATION + '/js/foundation.tooltip.js',

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