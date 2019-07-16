const common = require('./webpack.common.js');
const merge = require('webpack-merge');

// Used to create a local server
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Config files.
const settings = require( './project.config.js' );

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [

    // Automatic browser refresh for CSS and JS changes
    new BrowserSyncPlugin(
      {
        host: settings.BrowserSyncConfig.host,
        port:  settings.BrowserSyncConfig.port,
        proxy: settings.BrowserSyncConfig.proxy,
      },
      {
        injectCss: true
      },
    ),
  ]

});