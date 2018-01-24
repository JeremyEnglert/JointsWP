const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './assets/scripts/js/init.js',
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					cacheDirectory: true,
					presets: ['@babel/env'],
				},
				exclude: [/node_modules(?![/|\\]foundation-sites)/],
			},
		],
	},
	devtool: 'eval-source-map',
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new webpack.ProgressPlugin(function(percentage, message) {
			const percent = Math.round(percentage * 100);
			process.stderr.clearLine();
			process.stderr.cursorTo(0);
			process.stderr.write(percent + '% ' + message);
		}),
	],
	output: {
		path: path.resolve(__dirname, './assets/scripts'),
		publicPath: '/scripts/',
		filename: 'scripts.js',
		sourceMapFilename: 'scripts.js.map',
		chunkFilename: '[id].chunk.js',
	},
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = 'source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new UglifyJSPlugin({
			uglifyOptions: {
				compress: false,
				mangle: true,
			},
			sourceMap: true,
			parallel: true,
			cache: true,
		}),
	]);
}
