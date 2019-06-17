const path = require('path');

// Used to create a local server
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Use to minify JS
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Used to compile Sass into CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Used for image optimization
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./source/scripts/scripts.js', './source/styles/styles.scss'],
  output: {
    filename: './assets/scripts/scripts.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        // Tests JS for errors using .eslintrs.js
        test: /\.js?$/,
        enforce: "pre",
        loader: "eslint-loader",
       // exclude: '', // Exclude files or directories from linting
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.js"
          }
        },
      {
        // Run JS through Babel for better browser support
        test: /\.js$/,
       // exclude: '', // Exclude files or directories from Babel
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
         }
        }
      },
      // Compile all .scss files into CSS
      {
        test: /\.(sass|scss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]
      }
    ]
  },
  plugins: [
    // Automatic browser refresh for CSS and JS changes
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      // Local URL
      proxy: 'http://joints-git.local/'
    }),

    // Extract CSS to this location
    new MiniCssExtractPlugin({
      filename: './assets/styles/styles.css'
    }),

    // Optimize images
    new CopyWebpackPlugin([{
      from: 'source/images/',
      to: 'assets/images/'
    }]),

    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],

  optimization: {
    minimizer: [
      // Enable the JS minification plugin
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      }),
      // Enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  // Enable source maps for JS and CSS
  devtool: "source-map",
  
  // Cleaner Webpack console messages
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    entrypoints: false,
    moduleTrace: false,
  },
};