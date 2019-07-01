const common = require('./webpack.common.js');
const merge = require('webpack-merge');

// Used to create a local server
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [

    // Automatic browser refresh for CSS and JS changes
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      // Local URL
      proxy: 'http://joints-git.local/'
    }),

  ]

});