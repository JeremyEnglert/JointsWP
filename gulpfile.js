// GULP CONFIG
// Customize your workflow in the config.js file
const CONFIG = require('./config.js');


// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    browserSync = require('browser-sync').create(),
    cached = require('gulp-cached'),
    remember = require('gulp-remember'),
    fs = require('fs');


// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript 
gulp.task('scripts', function() {
	
	return gulp.src(CONFIG.SOURCE.scripts, {since: gulp.lastRun('scripts')})
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
		        
		// Only lint modified files		
        .pipe(cached('scripts'))
		.pipe(plugin.jshint(CONFIG.JSHINT_CONFIG))
		.pipe(plugin.jshint.reporter('jshint-stylish'))
		.pipe(remember('scripts'))
		.pipe(plugin.concat('scripts.js'))
		.pipe(plugin.uglify())
		.pipe(plugin.sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest(CONFIG.ASSETS.scripts))
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
		    browsers: config.compatibility,
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
		.pipe(plugin.imagemin())
		.pipe(gulp.dest(ASSETS.images))
});

 gulp.task( 'translate', function () {
     return gulp.src( SOURCE.php )
         .pipe(plugin.wpPot( {
             domain: '',
             package: 'Example project'
         } ))
        .pipe(gulp.dest('file.pot'));
 });

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    
    // Watch these files
    var files = [
    	CONFIG.SOURCE.php,
    ];

    browserSync.init(files, {
	    proxy: CONFIG.PROJECT_URL
    });
    
    gulp.watch(CONFIG.SOURCE.styles, gulp.parallel('styles'));
    gulp.watch(CONFIG.SOURCE.scripts, gulp.parallel('scripts')).on('change', browserSync.reload);
    gulp.watch(CONFIG.SOURCE.images, gulp.parallel('images'));

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch(CONFIG.SOURCE.styles, gulp.parallel('styles'));
	
	// Watch scripts files
	gulp.watch(CONFIG.SOURCE.scripts, gulp.parallel('scripts'));
	
	// Watch images files
	gulp.watch(CONFIG.SOURCE.images, gulp.parallel('images'));
  
}); 

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts', 'images'));