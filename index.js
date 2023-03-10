const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Tell us what license your project has:',
      choices: [
        'Boost1.0',
        'MIT',
        'APACHE2.0',
        'CDDL1.0',
        'BSD2',
        'BSD3',
        'GPL3.0',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'title',
      message: 'Tell us your project name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe what your project is about:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use your application?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe tests for your application',
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Please wait...");
        writeToFile("./generated-readme/README.md", generateMarkdown(data));
        console.log("Success!");
    })
    .catch((error) => console.error(error));

}

// function call to initialize program
init();
