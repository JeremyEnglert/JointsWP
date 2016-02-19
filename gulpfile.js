// Grab our gulp packages

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
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    bower = require('gulp-bower'),
    merge = require('merge-stream'),
    clone = require('gulp-clone'),
    browserSync = require('browser-sync').create();

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
    var source = gulp.src('./assets/scss/**/*.scss')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(sourcemaps.init()) // Start Sourcemaps
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }));

    var stylesPipe1 = source.pipe(clone())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css/')); // Create non-minified sourcemap

    var stylesPipe2 = source.pipe(clone())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.')) // Create minified sourcemap
        .pipe(gulp.dest('./assets/css/'));

    return merge(stylesPipe1, stylesPipe2);
});  
    
// JSHint, concat, and minify JavaScript
gulp.task('site-js', function() {
  var source = gulp.src([	
	  
           // Grab your custom scripts
  		  './assets/js/scripts/*.js'
  		  
  ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    
    var jsPipe1 = source.pipe(clone()) // Create non-minified sourcemap
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./assets/js'))
    
    var jsPipe2 = source.pipe(clone()) // Create minified sourcemap
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./assets/js'))
    
    return merge(jsPipe1, jsPipe2);
});    

// JSHint, concat, and minify Foundation JavaScript
gulp.task('foundation-js', function() {
  var source = gulp.src([	
  		  
  		  // Foundation core - needed if you want to use any of the components below
          './vendor/foundation-sites/js/foundation.core.js',
          './vendor/foundation-sites/js/foundation.util.*.js',
          
          // Pick the components you need in your project
          './vendor/foundation-sites/js/foundation.abide.js',
          './vendor/foundation-sites/js/foundation.accordion.js',
          './vendor/foundation-sites/js/foundation.accordionMenu.js',
          './vendor/foundation-sites/js/foundation.drilldown.js',
          './vendor/foundation-sites/js/foundation.dropdown.js',
          './vendor/foundation-sites/js/foundation.dropdownMenu.js',
          './vendor/foundation-sites/js/foundation.equalizer.js',
          './vendor/foundation-sites/js/foundation.interchange.js',
          './vendor/foundation-sites/js/foundation.magellan.js',
          './vendor/foundation-sites/js/foundation.offcanvas.js',
          './vendor/foundation-sites/js/foundation.orbit.js',
          './vendor/foundation-sites/js/foundation.responsiveMenu.js',
          './vendor/foundation-sites/js/foundation.responsiveToggle.js',
          './vendor/foundation-sites/js/foundation.reveal.js',
          './vendor/foundation-sites/js/foundation.slider.js',
          './vendor/foundation-sites/js/foundation.sticky.js',
          './vendor/foundation-sites/js/foundation.tabs.js',
          './vendor/foundation-sites/js/foundation.toggler.js',
          './vendor/foundation-sites/js/foundation.tooltip.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('foundation.js'))
    
    var jsFoundationPipe1 = source.pipe(clone()) // Create non-minified sourcemap
   		.pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./assets/js'))
	    
	var jsFoundationPipe2 = source.pipe(clone()) // Create non-minified sourcemap    
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./assets/js'))
	    
	return merge(jsFoundationPipe1, jsFoundationPipe2);
}); 

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./assets/scss/**/*.scss', ['styles']);

  // Watch site-js files
  gulp.watch('./assets/js/scripts/*.js', ['site-js']);
  
  // Watch foundation-js files
  gulp.watch('./vendor/foundation-sites/js/*.js', ['foundation-js']);

});

// Browser-Sync watch files and inject changes
gulp.task('browser-sync', function() {
    // Watch files
    var files = [
    	'./assets/css/*.css', 
    	'./assets/js/*.js',
    	'**/*.php',
    	'assets/images/**/*.{png,jpg,gif}',
    ];

    browserSync.init(files, {
	    // URL of local site
	    proxy: "http://localhost/jointswp-github/",
    });
    
    gulp.watch('./assets/scss/**/*.scss', ['styles']);
    gulp.watch('./assets/js/scripts/*.js', ['site-js']).on('change', browserSync.reload);

});

// Update Foundation with Bower and save to /vendor
gulp.task('bower', function() {
  return bower({ cmd: 'update'})
    .pipe(gulp.dest('vendor/'))
});   

// Create a default task 
gulp.task('default', function() {
  gulp.start('styles', 'site-js', 'foundation-js');
});