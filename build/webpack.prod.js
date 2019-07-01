const common = require('./webpack.common.js');
const merge = require('webpack-merge');

// Use to minify JS
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      // Enable the JS minification plugin
      new TerserPlugin( {
				cache: true,
				parallel: true,
				sourceMap: true,
				terserOptions: {
					compress: {
						ecma: 5,
						warnings: false,
						// Disabled because of an issue with Uglify breaking seemingly valid code:
						// https://github.com/facebook/create-react-app/issues/2376
						// Pending further investigation:
						// https://github.com/mishoo/UglifyJS2/issues/2011
						comparisons: false,
						// Disabled because of an issue with Terser breaking valid code:
						// https://github.com/facebook/create-react-app/issues/5250
						// Pending futher investigation:
						// https://github.com/terser-js/terser/issues/120
						inline: 2
					},
					output: {
						ecma: 5,
						comments: false
					},
				}
			} )
    ]
  },
});