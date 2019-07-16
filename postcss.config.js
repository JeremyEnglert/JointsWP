// Config files.
const settings = require( './build/project.config.js' );

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: settings.PostCssConfig.stage,
			autoprefixer: {
				grid: settings.PostCssConfig.grid
			}
    },
  }
}