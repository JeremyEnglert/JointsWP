/**
 * List prompt example
 */

'use strict';
const inquirer = require('inquirer'),
      { exec } = require('child_process'),
      chalk = require('chalk'),
      replace = require('replace-in-file');

console.log(chalk.green.bold("JointsWP has been installed. Just a few more steps."));

inquirer
  .prompt([
    {
      type: 'input',
      name: 'themeName',
      message: 'What is the name of your theme? (Example: My New Theme)',
    },
    {
      type: 'input',
      name: 'themeTextDomain',
      message: 'What is the textdomain of your theme?',
    },
    {
      type: 'input',
      name: 'themeLocalUrl',
      message: 'What is your local URL for this install? (Example: jointswp.local)',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'What framework would you like to install?',
      choices: ['Foundation', 'Bootstrap', 'None'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    downloadFramework(answers.framework);
    changeThemeName(answers.themeName);
    changeTextDomain(answers.themeTextDomain);
    //changeLocalUrl();
  })

async function downloadFramework(frameworkChoice) {
  if(frameworkChoice === "foundation") {
    console.log(chalk.green.bold("Downloading Foundation for Sites..."));
    let child = exec('npm install foundation-sites', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      //console.log(`${stderr}`);
      console.log(chalk.green.bold(`Foundation for Sites successfully downloaded.`));
    });
  } else if (frameworkChoice == "bootstrap") {
    console.log(chalk.green.bold("Downloading Bootstrap."));
    let child = exec('npm install foundation-sites').stderr.pipe(process.stderr);
  } else {
    console.log(chalk.green.bold("No framework selected."));
  }
}

function changeThemeName(themeName) {
  const options = {
    files: 'style.css',
    from: /JointsWP Starter Theme/g,
    to: themeName,
  };
  try {
    const changes = replace.sync(options);
    console.log(chalk.green.bold('Theme Name updated in style.css'));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

function changeTextDomain(themeTextDomain) {
  const options = {
    files: ['style.css', '**/*.php'],
    from: /textDomain/g,
    to: themeTextDomain,
  };
  try {
    const changes = replace.sync(options);
    console.log(chalk.green.bold('Text Domain updated in:'), changes.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

function changeLocalURL() {

}