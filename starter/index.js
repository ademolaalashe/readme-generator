const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "Tell us your project name"
    },
    {
        type: "input",
        name: "title",
        message: "Describe what your project is about:"        
    },
    {
        type: "list",
        name: "license",
        message: "Tell us what license your project has:"
        choices: ["Boost1.0", "MIT", "APACHE2.0", "Chrome", "BSD2", "BSD3", "GPL3.0", "None"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "List anyone who contributed to this project"
    
    },
    {
        type: "input",
        name: "reponame",
        message: "What is your repository name for the ReadME?"
    }
    


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
