/**
 * Gulpfile for Custom WordPress Theme Development.
 *
 */

 
/**
 * Load Gulp Configuration.
 *
 * Customize your project in the config.js file.
 */
const config = require('./config.js');


/**
 * Load Gulp Plugins.
 *
 */
const gulp  = require('gulp');

// Style Plugins
const sass = require( 'gulp-sass' ); // Gulp plugin for Sass compilation.
const autoprefixer = require( 'gulp-autoprefixer' ); // Adds correct prefix classes for better browser support.
const cleanCSS = require('gulp-clean-css');

// JavaScript Plugins
const babel = require("gulp-babel"); // Compiles next gen JS for modern browsers
const eslint = require('gulp-eslint'); // Checks JS files for errors
const concat = require('gulp-concat'); // Combine JS files
const uglify = require('gulp-uglify'); // Minify JS files

// Utility Plugins
const fs = require('fs'); // Allows access to file system
const sourcemaps = require( 'gulp-sourcemaps' ); // Generates sourcemaps for minified files
const plumber = require( 'gulp-plumber' ); // Prevent pipe breaking caused by errors from gulp plugins
const browserSync = require('browser-sync').create(); // Reloads browser and injects CSS
const cached = require('gulp-cached'); // Keeps an in-memory cache of files
const remember = require('gulp-remember'); // Remembers files that have passed through it
const chalk = require('chalk'); // Add color to console logs
const beeper = require('beeper'); // Attention grabber when an error happens

const wpPot = require('gulp-wp-pot');

/**
 * Gulp Functions.
 *
 */

 // Helper Function - Error handler for gulp-plumber
const errorHandler = err => {
  console.log(chalk.red(err.message));
  beeper();	 
};

// Helper Function - Browsersync reloading
const reload = done => {
	browserSync.reload();
	done();
}

// Browser-Sync watch files and inject changes
gulp.task('watch', () => {
	
	// Start up Broswer-Sync to watch for changes
	browserSync.init({
		proxy: config.projectUrl,
		open: true,
		injectChanges: true,
		watchEvents: [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ]
	});
	
	// These are the files Browsersync will watch
    gulp.watch(config.source.styles, gulp.parallel('styles'));
    gulp.watch(config.source.scripts, gulp.series('scripts', reload));
    gulp.watch(config.source.images, gulp.series('images', reload));

});

// Compile Sass, Autoprefix and minify
gulp.task('styles', () => {
	return gulp.src(config.source.styles)
		.pipe(plumber(errorHandler))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer(config.browserSupport))
		.pipe(cleanCSS()) // Comment out this line if you don't want minified files
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.assets.styles))
		.pipe(browserSync.stream())
});


// ESLint, concat, and minify JavaScript 
gulp.task('scripts', () => {
	return gulp.src(config.source.scripts)
		.pipe(plumber(errorHandler))
		.pipe(sourcemaps.init())
		.pipe(eslint()) // Check files for JS errors, setup your own rules in .eslintrc.js
		.pipe(eslint.format())
		.pipe(babel({
			presets: [['@babel/preset-env', // Compile modern JS to ES5.
				{targets: {browsers: config.browserSupport}} // Specify browser support.	
			]]
		}))     		
        //.pipe(cached('scripts')) // Only modifed files passed here until the "remember" pipe
		//.pipe(remember('scripts')) // Remember non-modified files
		.pipe(concat('scripts.js'))
		.pipe(uglify()) // Comment out this line if you don't want minified files
		.pipe(sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest(config.assets.scripts))
});


// Optimize images, move into assets directory
gulp.task('images', function() {
	return gulp.src(source.images)
		.pipe(imagemin())
		.pipe(gulp.dest(assets.images))
});

 gulp.task( 'translate', function () {
     return gulp.src( config.source.php )
         .pipe(wpPot( {
             domain: '',
             package: 'Example project'
         } ))
        .pipe(gulp.dest('file.pot'));
 });

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));