This is the development branch of JointsWP 5. This is not meant for production at this time. Be sure to check out the rest of the README for install instructions.

Currently using Foundation 6.3

## JointsWP Requirements
JointsWP requires [Node.js](https://nodejs.org) v4.x.x or v6.9.x. This doesn't mean you need to understand Node (or even Gulp) - it's just the steps we need to take to make sure all of our development tools are installed. 

## Getting Started 
### Download JointsWP and install dependencies with npm 
```bash
$ cd my-wordpress-folder/wp-content/themes/
$ git clone https://github.com/jeremyenglert/JointsWP.git
$ cd JointsWP
$ npm install
```
At this point, JointsWP should be installed and fully running on your local machine. If you prefer to install the theme manually, that will work as well - just be sure to run `npm install` after manually moving the files into the `/themes/` directory.

## Working with JointsWP
### Watching for Changes
```bash
$ npm run watch
```
* Watches for changes in the `/source/scss` directory. When a change is made the SCSS files are compiled, concatenated with Foundation files and saved to the `/assets/css` directory. Sourcemaps will be created.
* Watches for changes in the `/source/js` directory. When a change is made the JS files are compiled, concatenated with Foundation JS files and saved to the `/assets/js` directory. Sourcemaps will be created.
* Watches for changes in the `/source/images` directory. When a change is made the image files are optimized and saved to the `/assets/images` directory.

### Watching for Changes with Browsersync
```bash
$ npm run browsersync
```
This will watch the same files as `npm run watch`, but utilizes browsersync for live reloading and style injection. Be sure to update the `URL` variable in the `gulpfile.js` to your local install URL. 

### Manually Compile All Theme Assets
```bash
$ npm run build
```
Compiles all files in `/source/` directory without sourcemaps. Sourcemaps will be created for SCSS and JS files. 

### Compile and Minify All Theme Assets for Production
```bash
$ npm run production
```
Compiles and minifies all files in `/source/` directory and saves to the `/assets/` directory. Sourcemaps will not be created. 

### Compile Specific Assets
* `$ npm run styles` - to compile all SCSS files in the `assets/scss` directory
* `$ npm run scripts` - to compile all JS files in the `assets/scripts` directory
* `$ npm run images` - to compile all image files in the `assets/images` directory

## File Structure - "Where to Put Stuff"
You will want to put all of your custom styles, scripts and images in the `/source/` directory. Files in the `/source/` directory are compiled/minified/optimized and then saved to the `/assets/` folder. 

### Custom Styles
* `style.css` - this file is never actually loaded, however, this is where you set your theme name and is required by WordPress
* `/source/scss/style.scss` - import all of your styles here. If you create an additional SCSS file, be sure to import it here.
* `/source/scss/_main.scss` - place all of your custom styles here.
* `/source/scss/_settings.scss` - adjust Foundation style settings here.
* `/source/scss/login.scss` - THIS SHOULD PROBABLY JUST BE IMPORTED INTO THE MAIN STYLESHEET

### Custom Scripts
* `/source/js/` - place your custom scripts here. Each .JS file will be compiled and concatenated when the build process is ran.

### Images
* `/source/images/` - place your theme images here. Each image will be optimized when the build process is ran.

### Generated Assets
* `/assets/css/styles.css` - 
* `/assets/js/scripts.js` - 
* `/assets/images/` - 
