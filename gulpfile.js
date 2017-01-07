// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    argv = require('yargs').argv,
    browserSync = require('browser-sync').create(),
    plugin = require('gulp-load-plugins')();
    
 
// GULP VARIABLES   
// Modify these variables to match your project needs   
// Select Foundation components, remove components project will not use
const BUILD = {
	scripts: [
		// Lets grab what-input first
		//'node_modules/what-input/dist/what-input.js',
		  
		// Foundation core - needed if you want to use any of the components below
		'node_modules/foundation-sites/js/foundation.core.js',
		'node_modules/foundation-sites/js/foundation.util.*.js',
		
		// Pick the components you need in your project
		'node_modules/foundation-sites/js/foundation.abide.js',
		'node_modules/foundation-sites/js/foundation.accordion.js',
		'node_modules/foundation-sites/js/foundation.accordionMenu.js',
		'node_modules/foundation-sites/js/foundation.drilldown.js',
		'node_modules/foundation-sites/js/foundation.dropdown.js',
		'node_modules/foundation-sites/js/foundation.dropdownMenu.js',
		'node_modules/foundation-sites/js/foundation.equalizer.js',
		'node_modules/foundation-sites/js/foundation.interchange.js',
		'node_modules/foundation-sites/js/foundation.magellan.js',
		'node_modules/foundation-sites/js/foundation.offcanvas.js',
		'node_modules/foundation-sites/js/foundation.orbit.js',
		'node_modules/foundation-sites/js/foundation.responsiveMenu.js',
		'node_modules/foundation-sites/js/foundation.responsiveToggle.js',
		'node_modules/foundation-sites/js/foundation.reveal.js',
		'node_modules/foundation-sites/js/foundation.slider.js',
		'node_modules/foundation-sites/js/foundation.sticky.js',
		'node_modules/foundation-sites/js/foundation.tabs.js',
		'node_modules/foundation-sites/js/foundation.toggler.js',
		'node_modules/foundation-sites/js/foundation.tooltip.js',
		
		// Place custom JS here, files will be concantonated, minified if ran with --production
		'build/js/**/*.js',
    ],
   
	// Scss files will be concantonated, minified if ran with --production
	styles: 'build/scss/**/*.scss',
		
	// Images placed here will be optimized
	images: 'build/images/**/*'
};

const ASSETS = {
	styles: 'assets/css/',
	scripts: 'assets/js/',
	images: 'assets/images/'
};

// Set local URL if using Browser-Sync
const LOCAL_URL = '';

// Check for --production flag
const PRODUCTION = !!(argv.production);

// GULP TASKS
// See package.json for more info on running these tasks

// JSHint, concat, and minify JavaScript
gulp.task('scripts', function() {
	return gulp.src(BUILD.scripts)
		.pipe(plugin.plumber(function(error) {
		    gutil.log(gutil.colors.red(error.message));
		    this.emit('end');
		}))
		.pipe(plugin.babel({
			presets: ['es2015'],
			compact: true
		}))
		.pipe(plugin.sourcemaps.init())
		.pipe(plugin.jshint())
		.pipe(plugin.jshint.reporter('jshint-stylish'))
		.pipe(plugin.concat('scripts.js'))
		.pipe(plugin.if(PRODUCTION, plugin.uglify()))
		.pipe(plugin.sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest(ASSETS.scripts))
});   

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
	return gulp.src(BUILD.styles)
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
		.pipe(plugin.if(PRODUCTION, plugin.cssnano()))
		.pipe(plugin.sourcemaps.write('.'))
		.pipe(gulp.dest(ASSETS.styles))
}); 

// Optimize images, move into assets directory
gulp.task('images', function() {
	return gulp.src(BUILD.images)
		.pipe(plugin.imagemin())
		.pipe(gulp.dest(ASSETS.images))
});

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    // Watch files
    var files = [
    	BUILD.styles, 
    	BUILD.scripts,
    	BUILD.images,
    	'**/*.php',
    ];

    browserSync.init(files, {
	    proxy: LOCAL_URL,
    });
    
    gulp.watch(BUILD.styles, gulp.parallel('styles'));
    gulp.watch(BUILD.scripts, gulp.parallel('scripts')).on('change', browserSync.reload);
    gulp.watch(BUILD.images, gulp.parallel('images'));

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(BUILD.styles, gulp.parallel('styles'));

  // Watch scripts files
  gulp.watch(BUILD.scripts, gulp.parallel('scripts'));
  
  // Watch images files
  gulp.watch(BUILD.images, gulp.parallel('images'));
  
}); 

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts', 'images'));