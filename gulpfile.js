// GULP PACKAGES
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync').create();
 
// GULP VARIABLES   
// Modify these variables to match your project needs   
// Check for --production flag
const PRODUCTION = !!(argv.production);

// GULP TASKS
// JSHint, concat, and minify JavaScript
gulp.task('scripts', function() {
  return gulp.src([	
	  
 		  // Lets grab what-input first
          './node_modules/what-input/what-input.min.js',
  		  
  		  // Foundation core - needed if you want to use any of the components below
          './node_modules/foundation-sites/js/foundation.core.js',
          './node_modules/foundation-sites/js/foundation.util.*.js',
          
          // Pick the components you need in your project
          './node_modules/foundation-sites/js/foundation.abide.js',
          './node_modules/foundation-sites/js/foundation.accordion.js',
          './node_modules/foundation-sites/js/foundation.accordionMenu.js',
          './node_modules/foundation-sites/js/foundation.drilldown.js',
          './node_modules/foundation-sites/js/foundation.dropdown.js',
          './node_modules/foundation-sites/js/foundation.dropdownMenu.js',
          './node_modules/foundation-sites/js/foundation.equalizer.js',
          './node_modules/foundation-sites/js/foundation.interchange.js',
          './node_modules/foundation-sites/js/foundation.magellan.js',
          './node_modules/foundation-sites/js/foundation.offcanvas.js',
          './node_modules/foundation-sites/js/foundation.orbit.js',
          './node_modules/foundation-sites/js/foundation.responsiveMenu.js',
          './node_modules/foundation-sites/js/foundation.responsiveToggle.js',
          './node_modules/foundation-sites/js/foundation.reveal.js',
          './node_modules/foundation-sites/js/foundation.slider.js',
          './node_modules/foundation-sites/js/foundation.sticky.js',
          './node_modules/foundation-sites/js/foundation.tabs.js',
          './node_modules/foundation-sites/js/foundation.toggler.js',
          './node_modules/foundation-sites/js/foundation.tooltip.js',
          
           // Grab your custom scripts
  		  './assets/js/scripts/*.js',
  		  
  ])
    .pipe(plumber())
  	.pipe(babel({
		presets: ['es2015'],
	    compact: true
	}))
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    .pipe(gulpif(PRODUCTION, uglify()))
    .pipe(sourcemaps.write('.')) // Creates sourcemap for minified JS
    .pipe(gulp.dest('./assets/js'))
});   

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpif(PRODUCTION, cssnano()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css/'))
}); 

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    // Watch files
    var files = [
    	'./assets/css/*.css', 
    	'./assets/js/*.js',
    	'**/*.php',
    	'assets/images/**/*.{png,jpg,gif,svg,webp}',
    ];

    browserSync.init(files, {
	    // Replace with URL of your local site
	    proxy: "http://localhost/jointswp-github",
    });
    
    gulp.watch('./assets/scss/**/*.scss', ['styles']);
    gulp.watch('./assets/js/scripts/*.js', ['scripts']).on('change', browserSync.reload);

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./assets/scss/**/*.scss', gulp.parallel('styles'));

  // Watch scripts files
  gulp.watch('./assets/js/scripts/*.js', gulp.parallel('scripts'));
  
}); 

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts'));