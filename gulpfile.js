// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    bower = require('gulp-bower'),
    livereload = require('gulp-livereload')
    
// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
    }))
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./assets/css/'))     
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload())
});    
    
// JSHint, concat, and minify JavaScript
gulp.task('scripts', function() {
  return gulp.src([	
           // Grab your custom scripts
  		  './assets/js/scripts/*.js'
  ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'))
    .pipe(livereload())
});    

// JSHint, concat, and minify JavaScript
gulp.task('foundation-js', function() {
  return gulp.src([	
  		  
  		  // Foundation core - needed if you want to use any of the components below
          './vendor/foundation/js/foundation/foundation.core.js',
          
          // Pick the componenets you need in your project
          './vendor/foundation/js/foundation/foundation.util.animationFrame.js',
          './vendor/foundation/js/foundation/foundation.util.keyboard.js',
          './vendor/foundation/js/foundation/foundation.util.mediaQuery.js',
          './vendor/foundation/js/foundation/foundation.util.menuNester.js',
          './vendor/foundation/js/foundation/foundation.util.motion.js',
          './vendor/foundation/js/foundation/foundation.util.onImagesLoaded.js',
          './vendor/foundation/js/foundation/foundation.util.randomId.js',
          './vendor/foundation/js/foundation/foundation.util.sizeAndCollision.js',
          './vendor/foundation/js/foundation/foundation.util.swipe.js',
          './vendor/foundation/js/foundation/foundation.util.triggers.js',
          './vendor/foundation/js/foundation/foundation.utils.timer.js',
          './vendor/foundation/js/foundation/foundation.abide.js',
          './vendor/foundation/js/foundation/foundation.accordion.js',
          './vendor/foundation/js/foundation/foundation.accordionMenu.js',
          './vendor/foundation/js/foundation/foundation.drilldown.js',
          './vendor/foundation/js/foundation/foundation.dropdown.js',
          './vendor/foundation/js/foundation/foundation.dropdownMenu.js',
          './vendor/foundation/js/foundation/foundation.equalizer.js',
          './vendor/foundation/js/foundation/foundation.interchange.js',
          './vendor/foundation/js/foundation/foundation.joyride.js',
          './vendor/foundation/js/foundation/foundation.magellan.js',
          './vendor/foundation/js/foundation/foundation.offcanvas.js',
          './vendor/foundation/js/foundation/foundation.orbit.js',
          './vendor/foundation/js/foundation/foundation.responsiveMenu.js',
          './vendor/foundation/js/foundation/foundation.responsiveToggle.js',
          './vendor/foundation/js/foundation/foundation.reveal.js',
          './vendor/foundation/js/foundation/foundation.slider.js',
          './vendor/foundation/js/foundation/foundation.sticky.js',
          './vendor/foundation/js/foundation/foundation.tabs.js',
          './vendor/foundation/js/foundation/foundation.toggler.js',
          './vendor/foundation/js/foundation/foundation.tooltip.js',
          './vendor/foundation/js/foundation/motion-ui.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('foundation.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'))
    .pipe(livereload())
});

// Update Foundation with Bower and save to /vendor
gulp.task('bower', function() {
  return bower({ cmd: 'update'})
    .pipe(gulp.dest('vendor/'))
});    

// Create a default task 
gulp.task('default', function() {
  gulp.start('styles', 'scripts', 'foundation-js');
});

// Watch files for changes
gulp.task('watch', function() {
	
  // Live Reload (automatic browser refresh)
  livereload.listen();

  // Watch .scss files
  gulp.watch('./assets/scss/**/*.scss', ['styles']);

  // Watch site-js files
  gulp.watch('./assets/js/scripts/*.js', ['scripts']);
  
  // Watch foundation-js files
  gulp.watch('./vendor/foundation/js/foundation/*.js', ['foundation-js']);

});
