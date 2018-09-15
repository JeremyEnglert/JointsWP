// GULP PACKAGES
// Most packages are lazy loaded
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    yaml = require('js-yaml'),
    cached = require('gulp-cached'),
    remember = require('gulp-remember'),
    fs = require('fs'),
    plugin = require('gulp-load-plugins')();
   
// Load settings from config.yml file.
const { COMPATIBILITY, BROWSERSYNC, SCRIPTS } = loadConfig();   

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}
 
// GULP VARIABLES   
// Modify these variables to match your project needs   

// Select Foundation components, remove components project will not use
const SOURCE = {
   
	// Scss files will be concantonated, minified
	styles: 'assets/styles/scss/**/*.scss',
		
	// Images placed here will be optimized
	images: 'assets/images/**/*',
	
	php: '**/*.php'
};

const ASSETS = {
	styles: 'assets/styles/',
	scripts: 'assets/scripts/',
	images: 'assets/images/',
};

const JSHINT_CONFIG = {
	"node": true,
	"globals": {
		"document": true,
		"jQuery": true
	}
};

// GULP FUNCTIONS
// JSHint, concat, and minify JavaScript 
gulp.task('scripts', function() {
	
	return gulp.src(SCRIPTS, {since: gulp.lastRun('scripts')})
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
		.pipe(plugin.jshint(JSHINT_CONFIG))
		.pipe(plugin.jshint.reporter('jshint-stylish'))
		.pipe(remember('scripts'))
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
		    browsers: COMPATIBILITY,
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
             domain: 'jointswp',
             package: 'Example project'
         } ))
        .pipe(gulp.dest('file.pot'));
 });

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
    
    // Watch these files
    var files = [
    	SOURCE.php,
    ];

    browserSync.init(files, {
	    proxy: BROWSERSYNC.url
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
	gulp.watch(SCRIPTS, gulp.parallel('scripts'));
	
	// Watch images files
	gulp.watch(SOURCE.images, gulp.parallel('images'));
  
}); 

// Run styles, scripts and foundation-js
gulp.task('default', gulp.parallel('styles', 'scripts', 'images'));