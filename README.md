# JointsWP Starter Theme

## JointsWP Requirements

JointsWP requires [Node.js](https://nodejs.org) v10.16.x or newer.

## Download JointsWP and Install Dependencies
From your `wp-content/themes` directory, run the following. 
```bash
$ git clone --single-branch --branch 6.0-dev https://github.com/JeremyEnglert/JointsWP.git my-theme
$ cd my-theme
$ npm install (or npm install)
```

## Automated Startup 
When you run `npm install` the first time, you will trigger the automated startup. 

**"What is the name of your theme?"**

The provided answer is used to update style.css with your theme name.

**"What is the namespace of your theme?"**

This will replace all of the function namespaces and translation textdomains with your selected namespace.

**"What is your local URL for this install?"**

This URL is used to configure BrowserSync to work with your local environment.

## Commands
`npm watch` - watches all JS, CSS and image source files for changes. 

`npm build-dev` - compiles all JS, CSS and image source files.

`npm build-dev` - compiles and minifies all JS, CSS and image source files.

`npm test-a11y` - runs accessibility checks on URLs listed in `build/project.config.js`

## Styles
JointsWP now uses [PostCSS](https://postcss.org/) (instead of Sass). It utilizes [postcss-preset-env](https://preset-env.cssdb.org/) to support [upcoming CSS features](https://preset-env.cssdb.org/features) such as variables and nesting - which provides a very Sass-like experience. This is all integrated with the Webpack build. Browser support can be adjusted in the package.json file.

## Scripts
Since Webpack us being used, we can now use ES6 module imports and other great Webpack features. Babel is used to convert ES6 into code that will work in older browsers. Browser support can be adjusted in the package.json file.

## Accessibility Testing
Accessibility testing is done with [Pa11y](https://www.npmjs.com/package/pa11y) by running the `npm run test-a11y` command. You can adjust which URLs are tested in the `build/project.config.js` file - look for the `a11yTestConfig` array. 

Compliance levels can also be changed through the `standard` setting in the `build/project/config.js` file. The default is WCAG Level AA, but can be changed to anything listed in the [pa11y documentation](https://github.com/pa11y/pa11y#standard-string).

As with any automated testing tool - this is not meant to 100% ensure accessibility. Manual checks are always required. 
