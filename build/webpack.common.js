const path = require('path');

// Used to compile Sass into CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

// Used for image optimization
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Config files.
const settings = require( './webpack.settings.js' );

module.exports = {
  entry: settings.entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../assets/scripts')
  },
  externals: {
		jquery: 'jQuery',
	},
  module: {

    rules: [

      {
        // Tests JS for errors using .eslintrs.js
        test: /\.js?$/,
        enforce: "pre",
        loader: "eslint-loader",
        //exclude: '', // Exclude files or directories from linting
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.js"
        }
      },

      {
        // Run JS through Babel for better browser support
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            sourceMap: true,
         }
        }
      },

      // Compile all .scss files into CSS
      {
        test: /\.scss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
      } 
    ]
  },
  
  plugins: [

    // Remove extra files created by webpack
    new FixStyleOnlyEntriesPlugin(),

    // Extract CSS to this location
    new MiniCssExtractPlugin({
      filename: '../styles/[name].css'
    }),

    // Optimize images
    new CopyWebpackPlugin([{
      from: 'source/images/',
      to: '../images/'
    }]),
    new ImageminPlugin({ 
      test: /\.(jpe?g|png|gif|svg)$/i 
    }),

  ],

  optimization: {
    minimizer: [
      // Enable the css minification plugin
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ]
  },

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