This is the development branch of JointsWP 5. This is not meant for production at this time. Be sure to check out the rest of the README for install instructions.

Currently using Foundation 6.3

## JointsWP Requirements
JointsWP requires [Node.js](https://nodejs.org) v4.x.x or v6.9.x. This doesn't mean you need to understand Node (or even Gulp) - it's just the steps we need to take to make sure all of our development tools are installed. 

## Getting Started 
### Download JointsWP and install dependencies with npm 
```bash
$ cd my-wordpress-folder/wp-content/themes/
$ git clone -b 5.0 --single-branch https://github.com/JeremyEnglert/JointsWP.git
$ cd JointsWP
$ npm install
```
At this point, JointsWP should be installed and fully running on your local machine. If you prefer to install the theme manually, that will work as well - just be sure to run `npm install` after manually moving the files into the `/themes/` directory.

## Working with JointsWP
### Watching for Changes
```bash
$ npm run watch
```
* Watches for changes in the `/styles/scss` directory. When a change is made the SCSS files are compiled, concatenated with Foundation files and saved to the `/styles` directory. Sourcemaps will be created.
* Watches for changes in the `/scripts/js` directory. When a change is made the JS files are compiled, concatenated with Foundation JS files and saved to the `/scripts` directory. Sourcemaps will be created.
* Watches for changes in the `/images` directory. When a change is made the image files are optimized and saved over the original image.

### Watching for Changes with Browsersync
```bash
$ npm run browsersync
```
This will watch the same files as `npm run watch`, but utilizes browsersync for live reloading and style injection. Be sure to update the `URL` variable in the `gulpfile.js` to your local install URL. 

### Manually Compile All Theme Assets
```bash
$ npm run build
```
Compiles all scripts and styles with sourcemaps. 

### Compile and Minify All Theme Assets for Production
```bash
$ npm run production
```
Compiles and minifies all scripts and styles without sourcemaps. 

### Compile Specific Assets
* `$ npm run styles` - to compile all SCSS files in the `styles/scss` directory.
* `$ npm run scripts` - to compile all JS files in the `scripts/js` directory.
* `$ npm run images` - to optimize all image files in the `images` directory.

## File Structure - "Where to Put Stuff"

### Custom Styles
* `style.css` - this file is never actually loaded, however, this is where you set your theme name and is required by WordPress
* `/styles/scss/style.scss` - import all of your styles here. If you create an additional SCSS file, be sure to import it here.
* `/styles/scss/_main.scss` - place all of your custom styles here.
* `/styles/scss/_settings.scss` - adjust Foundation style settings here.
* `/styles/scss/login.scss` - place custom login styles here. This will generate it's own stylesheet.
### Custom Scripts
* `/scripts/js/` - place your custom scripts here. Each .JS file will be compiled and concatenated when the build process is ran.

### Images
* `/images/` - place your theme images here. Each image will be optimized when the build process is ran.
