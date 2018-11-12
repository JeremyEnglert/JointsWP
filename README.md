This is currently NOT MEANT FOR PRODUCTION SITES. 

## JointsWP Requirements

JointsWP requires [Node.js](https://nodejs.org) v8.12.x or newer.

## Download JointsWP and Run Build Process
From your `wp-content/themes` directory, run the following. 
```bash
$ git clone https://github.com/JeremyEnglert/JointsWP.git my-theme
$ cd my-theme
$ npm install 
```
`npm install` is what starts the build process.

## Build Proecess
When you run `npm install` the first time, you will trigger the automated build process. 

![JointsWP build process running in terminal](https://user-images.githubusercontent.com/6110968/46832283-7ea08580-cd5a-11e8-82c8-4920e23f792c.gif)

**"What is the name of your theme?"**

The provided answer is used to update style.css with your theme name.

**"What is the namespace of your theme?"**

This will replace all of the function namespaces and translation textdomains with your selected namespace.

**"What is your local URL for this install?"**

This URL is used in the gulpfile.js for Browser Sync.

**"What framework would you like to install?**
