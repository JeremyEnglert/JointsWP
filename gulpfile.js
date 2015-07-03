// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber')
    
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
});    
    
// JSHint, concat, and minify JavaScript
gulp.task('scripts', function() {
  return gulp.src([	
           // Grab your custom scripts
  		  './assets/js/site/*.js'
  ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./assets/js/min'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/min'))
});    

// JSHint, concat, and minify JavaScript
gulp.task('foundation-js', function() {
  return gulp.src([	
  		  
  		  // Foundation core - needed if you want to use any of the components below
          './bower_components/foundation/js/foundation/foundation.js',
          
          // Pick the componenets you need in your project
          './bower_components/foundation/js/foundation/foundation.abide.js',
          './bower_components/foundation/js/foundation/foundation.accordion.js',
          './bower_components/foundation/js/foundation/foundation.alert.js',
          './bower_components/foundation/js/foundation/foundation.clearing.js',
          './bower_components/foundation/js/foundation/foundation.dropdown.js',
          './bower_components/foundation/js/foundation/foundation.equalizer.js',
          './bower_components/foundation/js/foundation/foundation.interchange.js',
          './bower_components/foundation/js/foundation/foundation.joyride.js',
          './bower_components/foundation/js/foundation/foundation.magellan.js',
          './bower_components/foundation/js/foundation/foundation.offcanvas.js',
          './bower_components/foundation/js/foundation/foundation.orbit.js',
          './bower_components/foundation/js/foundation/foundation.reveal.js',
          './bower_components/foundation/js/foundation/foundation.slider.js',
          './bower_components/foundation/js/foundation/foundation.tab.js',
          './bower_components/foundation/js/foundation/foundation.tooltip.js',
          './bower_components/foundation/js/foundation/foundation.topbar.js',      
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('foundation.js'))
    .pipe(gulp.dest('./assets/js/min'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/min'))
});    

// Create a default task 
gulp.task('default', function() {
  gulp.start('styles', 'scripts', 'foundation-js');
});

// Watch files for changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./assets/scss/**/*.scss', ['styles']);

  // Watch site-js files
  gulp.watch('./assets/js/site/*.js', ['scripts']);
  
  // Watch foundation-js files
  gulp.watch('./bower_components/foundation/js/foundation/*.js', ['foundation-js']);

});
