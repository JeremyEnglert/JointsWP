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

## Scripts

## Accessibility Testing

