/**
 * List prompt example
 */

'use strict';

const inquirer = require('inquirer'),
      { exec } = require('child_process'),
      chalk = require('chalk'),
      download = require('download-git-repo'),
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
      name: 'themeNamespace',
      message: 'What is the namespace of your theme? (Example: my_new_theme)',
    },
    {
      type: 'input',
      name: 'themeLocalUrl',
      message: 'What is your local URL for this install? (Example: https://jointswp.local)',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'What framework would you like to install?',
      choices: ['None', 'Foundation', 'Bootstrap'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    downloadFramework(answers.framework);
    installFramework(answers.framework);
    changeThemeName(answers.themeName);
    changeNamespace(answers.themeNamespace);
    changeLocalUrl(answers.themeLocalUrl);
  })

function downloadFramework(frameworkChoice) {
  let frameworkName;
  let frameworkDisplayName;

  if(frameworkChoice === "none") {
    console.log(chalk.green.bold("No framework selected."));
    return;
  } else if (frameworkChoice == "foundation") {
    frameworkName = "foundation-sites";
    frameworkDisplayName = "Foundation for Sites";
  } else if (frameworkChoice == "bootstrap") {
    frameworkName = "bootstrap";
    frameworkDisplayName = "Bootstrap";
  }

  console.log(chalk.green.bold(`Downloading ${frameworkDisplayName}...`));
  exec(`npm install ${frameworkName} --save-dev`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`${stderr}`);
    console.log(chalk.green.bold(`${frameworkDisplayName} successfully downloaded.`));
  });
}

// Downloads files from repo to make selected framework work with WordPress
function installFramework(frameworkChoice) {
  let frameworkName;
  let frameworkDisplayName;

  if(frameworkChoice === "none") {
    return;
  } else if (frameworkChoice == "foundation") {
    frameworkName = "jointswp-foundation";
  } else if (frameworkChoice == "bootstrap") {
    frameworkName = "jointswp-bootstrap";
  }

  download(`jeremyenglert/${frameworkName}`, 'test/temp', function (error) {
    console.log(error ? 'Error' : 'Success')
  })
}

// Sets the Theme Name in style.css
function changeThemeName(themeName) {
  if(themeName == "") {
    console.log(chalk.green.bold('Theme Name not changed.'));
    return;
  }
  const options = {
    files: 'style.css',
    from: /Theme Name: .{1,}/g,
    to: `Theme Name: ${themeName}`,
  };
  try {
    const changes = replace.sync(options);
    console.log(chalk.green.bold('Theme Name updated in: ') + ('style.css'));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

function changeNamespace(themeNamespace) {
  if(themeNamespace == "") {
    console.log(chalk.green.bold('Namespace not changed.'));
    return;
  }
  const nameSpace = themeNamespace.toLowerCase().split(' ').join('_');
  const options = {
    files: ['style.css', '**/*.php'],
    from: /theme_namespace/g,
    to: nameSpace,
  };
  try {
    const changes = replace.sync(options);
    console.log(chalk.green.bold('Namespace & Text Domain updated in:'), changes.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

function changeLocalUrl(themeLocalUrl) {
  if(themeLocalUrl == "") {
    console.log(chalk.green.bold('Local URL was not chnanged.'));
    return;
  }
  const options = {
    files: 'config.js',
    from: /projectUrl: .{1,}/g,
    to: `projectUrl: "${themeLocalUrl}"`,
  };
  try {
    const changes = replace.sync(options);
    console.log(chalk.green.bold('Local URL updated in: ') + ('config.js'));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}