/**
 * Automated accessbility checks
 */

/* eslint-disable no-console */

 const pa11y = require('pa11y');
 const chalk = require('chalk');

 // Config files.
const settings = require( './project.config.js' );


 // Set up the pa11y config options
 const pa11yConfig = {
	standard: settings.a11yTestConfig.standard,
	hideElements: '#wpadminbar',
	includeWarnings: settings.a11yTestConfig.includeWarnings,
	ignore: [
		'notice'
	],
	chromeLaunchConfig: {
		ignoreHTTPSErrors: true
	}
 };
 
settings.a11yTestConfig.urls.forEach(function(url) {
	pa11y(url, pa11yConfig).then((results) => {
		if(results.issues.length < 1) {
				
			console.log(chalk.bold(`Page: `) + `${results.pageUrl}`);
			console.log("No A11y Errors Detected");
			console.log("--------------------------------");

		} else {

			results.issues.forEach(function(issue) {
				console.log(chalk.bold(`Page: `) + `${results.pageUrl}`);
				console.log(chalk.bold(`Type: `) + `${issue.type}`);
				console.log(chalk.bold(`Issue: `) + `${issue.message}`);
				console.log(chalk.bold(`Code: `) + `${issue.code}`);
				console.log(chalk.bold(`Context: `) + `${issue.contect}`);
				console.log(chalk.bold(`Selector: `) + `${issue.selector}`);
				console.log("--------------------------------");
			});
		}
	})
 });

