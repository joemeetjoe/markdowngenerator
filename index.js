// Requirements for application to run, namely filesystem, generateMarkdown, and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const gM = require("./utils/generateMarkdown.js");

//Array of questions for user input
const questions = [
"What is the title of your project?", 
"What was your motivation for completing this project?", 
"What problem does this project solve?", 
"What did you learn on this project?",
"Please add a link to the deployed site or app:",
"What license did you use for this project?",
"Please list instructions for how to contribute to this project:",
"Please list instructions for how to run tests on this project:",
"Please list instructions for how to install this project:",
"Please enter your github username to link your github repo:",
"Please supply a link to your email:"
];
// global variable for question responses
let questionResponses;
// inquirer to gather user input
let questionPrompts = () => {
    inquirer
    .prompt([
        {
        type: 'input',
        message: questions[0],
        name: 'title',
        },
        {
        type: 'input',
        message: questions[1],
        name: 'motivation',
        },
        {
        type: 'input',
        message: questions[2],
        name: 'problemsSolved',
        },
        {
        type: 'input',
        message: questions[3],
        name: 'lessonsLearned',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'appLink',
        },
        {
        type: 'list',
        message: questions[5],
        name: 'licenses',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 3-Clause "Simplified" License',  "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "Mozilla Public License 2.0", "The Unlicense"], 

        },
        {
            type: 'input',
            message: questions[6],
            name: 'contributors',
        },
       
        {
            type: 'input',
            message: questions[7],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'githubRepo',
        },
        {
            type: 'input',
            message: questions[10
            ],
            name: 'emailLink',
        },
    
    ])
    .then((response) => {
        questionResponses = response;
        markdownDelegator(questionResponses);
    });
};

// setting global variable totalmarkdown to add the template literals to from the generatemarkdown file
let totalMarkdown;
// markdownDelegator that takes the data from the question responses and uses that to call all of the generatemarkdown functions,
// then adds them to the empty string and calls the write to file function
let markdownDelegator = (data) => {
    totalMarkdown = gM.generateMarkdownTitle(data) +
    gM.renderLicenseBadge(data) +
    gM.renderDescriptionSection(data) +
    gM.renderTableOfContents(data) +
    gM.renderInstallation(data) +
    gM.renderUsage(data) +
    gM.renderLicenseSection(data) +
    gM.renderContributions(data) +
    gM.renderTests(data) +
    gM.renderQuestions(data);
    // calling writetofile and plugging in all the template literals
    writeToFile(totalMarkdown);   
};

// Writing the readme file and adding in the data
let writeToFile = (data) => {
    let fileName = "README1.md"
    fs.writeFile( fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// initializing the file on startup, calling questionPrompts
let init = () => {
    questionPrompts();
};

// calling the init function
init();


