const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What is the usage of your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please describe the installation process',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide any testing instructions',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Enter your GitHub ID',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the URL to your deployed site?',
        name: 'URL',
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Please select a license type if applicable',
        name: 'license',
        choices: ['none','MIT','APACHE','Eclipse'],
    },
 ];

// TODO: Create a function to write README file
function writeToFile(name, data) {
    return fs.writeFileSync(path.join(process.cwd(),name),data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your README.md file will now appear in your IDE");
        writeToFile('./output/README/', generateMarkdown(responses));
    });
}

// Function call to initialize app
init();