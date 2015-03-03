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
    plumber = require('gulp-plumber')
    
// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
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
	  
	      // Ignore already minified files
	      '!./assets/js/min/*.js',
  		  
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
          
           // Grab your custom scripts
  		  './assets/js/**/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./assets/js/min'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/min'))
});    

// Create a default task 
gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

// Watch files for changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./assets/scss/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('./assets/js/**/*.js', ['scripts']);

});