// GULP PACKAGES
// Most packages are lazy loaded.
var atImport = require("postcss-import"),
  autoprefixer = require("autoprefixer"),
  browserSync = require("browser-sync").create(),
  cssnano = require("cssnano"),
  filter = require("gulp-filter"),
  gulp = require("gulp"),
  gutil = require("gulp-util"),
  imagemin = require("gulp-imagemin"),
  imageminMozjpeg = require("imagemin-Mozjpeg"),
  plugin = require("gulp-load-plugins")(),
  webpackStream = require("webpack-stream"),
  webpack3 = require("webpack"),
  webpack_config = require("./webpack.config.js");

// GULP VARIABLES
// Modify these variables to match your project needs

// Set local URL if using Browser-Sync
const LOCAL_URL = "http://jointswp-github.dev/";

// Set path to Foundation files
const FOUNDATION = "node_modules/foundation-sites";

// Select Foundation components, remove components project will not use
const SOURCE = {
  scripts: [
    // Use Foundation and plugins first, then compile the rest.
    "assets/scripts/js/init.js"
  ],

  // SCSS files will be concatenated, prefixed and minified.
  styles: "assets/styles/scss/**/*.scss",

  // Images placed here will be optimized.
  images: "assets/images/**/*",

  php: "**/*.php"
};

const ASSETS = {
  styles: "assets/styles/",
  scripts: "assets/scripts/",
  images: "assets/images/",
  all: "assets/"
};

const JSHINT_CONFIG = {
  node: true,
  globals: {
    document: true,
    jQuery: true
  }
};

const SHOW_ERROR = function(error) {
  gutil.log(gutil.colors.red(error.message));
  this.emit("end");
};

// GULP FUNCTIONS
// JSHint, transpile, concat, and minify JavaScript.
gulp.task("scripts", function() {
  // Use a custom filter so we only lint custom JS
  const CUSTOMFILTER = filter(ASSETS.scripts + "js/**/*.js", { restore: true });

  return gulp
    .src(SOURCE.scripts)
    .pipe(plugin.plumber(SHOW_ERROR)) // Show errors happening in the piping process.
    .pipe(webpackStream(webpack_config, webpack3)) // Transpile all JavaScript ES6 to compatible browser code.
    .pipe(CUSTOMFILTER)
    .pipe(plugin.jshint(JSHINT_CONFIG))
    .pipe(plugin.jshint.reporter("jshint-stylish"))
    .pipe(CUSTOMFILTER.restore)
    .pipe(gulp.dest(ASSETS.scripts));
});

// Compile, postcss and minify SCSS.
gulp.task("styles", function() {
  // Process CSS with custom plugins.
  const PROCESSORS = [
    atImport(), // Import .css files in .scss files.
    autoprefixer({
      // Prefix CSS.
      browsers: ["last 2 version", "ie >= 9", "Android >= 2.3", "ios >= 7"] // Support specific browser versions and the last 2 version from each browser.
    }),
    cssnano() // Minify CSS.
  ];

  return gulp
    .src(SOURCE.styles)
    .pipe(plugin.plumber(SHOW_ERROR)) // Show errors happening in the piping process.
    .pipe(plugin.sourcemaps.init()) // Initialize sourcemaps.
    .pipe(plugin.sass()) // Compile SCSS to CSS.
    .pipe(plugin.postcss(PROCESSORS)) // Process CSS with custom plugins.
    .pipe(plugin.sourcemaps.write(".")) // Write sourcemaps.
    .pipe(gulp.dest(ASSETS.styles))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Optimize images, move into assets directory
gulp.task("images", function() {
  // Process images with custom plugins.
  const PROCESSORS = {
    plugins: [
      imagemin.gifsicle({
        interlaced: true,
        optimizationLevel: 3
      }),
      imageminMozjpeg({
        quality: 85
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [
          {
            removeViewBox: false
          }
        ]
      })
    ],
    options: {
      verbose: true // Log every image in the console.
    }
  };

  return gulp
    .src(SOURCE.images)
    .pipe(plugin.plumber(SHOW_ERROR)) // Show errors happening in the piping process.
    .pipe(plugin.imagemin(PROCESSORS.plugins, PROCESSORS.options))
    .pipe(gulp.dest(ASSETS.images));
});

gulp.task("translate", function() {
  return gulp
    .src(SOURCE.php)
    .pipe(plugin.plumber(SHOW_ERROR)) // Show errors happening in the piping process.
    .pipe(
      plugin.wpPot({
        domain: "jointswp",
        package: "Example project"
      })
    )
    .pipe(gulp.dest("assets/translation/translation.pot"));
});

// Browser-Sync watch files and inject changes.
gulp.task("browsersync", function() {
  // Watch these files.
  const files = [SOURCE.php];

  browserSync.init(files, {
    proxy: LOCAL_URL
  });

  gulp.watch(SOURCE.styles, gulp.parallel("styles"));
  gulp
    .watch(SOURCE.scripts, gulp.parallel("scripts"))
    .on("change", browserSync.reload);
  gulp.watch(SOURCE.images, gulp.parallel("images"));
});

// Watch files for changes (without Browser-Sync).
gulp.task("watch", function() {
  // Watch .scss files.
  gulp.watch(SOURCE.styles, gulp.parallel("styles"));

  // Watch scripts files.
  gulp.watch(SOURCE.scripts, gulp.parallel("scripts"));

  // Watch images files.
  gulp.watch(SOURCE.images, gulp.parallel("images"));
});

// Run styles, scripts and images.
gulp.task("default", gulp.parallel("styles", "scripts", "images"));
