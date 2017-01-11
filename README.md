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
This command will watch for changes in the `/build/` directory and compile to the `/assets/` directory.

### Watching for Changes with Browsersync
```bash
$ npm run browsersync
```

### Compile All Theme Assets
```bash
$ npm run build
```

### Compile All Theme Assets for Production
```bash
$ npm run production
```

### Compile Specific Assets - DO WE REALLY WANT/NEED THESE? OR SHOULD WE ENCOURAGE RUN BUILD FOR EVERYTHING?
`$ npm run styles` - to compile all Scss files in the `assets/scss` directory

`$ npm run scripts` - to compile all JS files in the `assets/scripts` directory

`$ npm run images` - to compile all image files in the `assets/images` directory

## File Structure
You will want to put all of your custom styles, scripts and images in the `/build/` directory. Files in the `build` directory are compiled/minified/optimized and then saved to the `/assets/` folder. 

### Build Styles
### Build Scripts
### Generated Assets

