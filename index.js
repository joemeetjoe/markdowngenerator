// Requirements for application to run, namely filesystem, generateMarkdown, and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const { prependListener } = require('process');
const gM = require("./utils/generateMarkdown.js");

//Array of questions for user input
const questions = [
"What is the title of your project?", 
"What was your motivation for completing this project?", 
"What problem does this project solve?", 
"What did you learn on this project?",
"What are some instructions for the user to use this project?",
"Please add a link to the deployed site or app.",
"What license did you use for this project?",
"Please list anyone you would like to credit as a contributor for the making of this project",
"Do you have any tests for this project?",
"Who developed this project?",
"Please supply a link to your github repo.",
"Please supply a link to your email."
];

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
        name: 'instructions',
        },
        {
        type: 'input',
        message: questions[5],
        name: 'appLink',
        },
        {
        type: 'list',
        message: questions[6],
        name: 'licenses',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', "BSD 2-Clause 'Simplified' License", "BSD Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Pulic License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"], 

        },
        {
            type: 'input',
            message: questions[7],
            name: 'contributors',
        },
       
        {
            type: 'input',
            message: questions[8],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'developer',
        },
        {
            type: 'input',
            message: questions[10],
            name: 'githubRepo',
        },
        {
            type: 'input',
            message: questions[11],
            name: 'emailLink',
        },
    
    ])
    .then((response) => {
        questionResponses = response;
        // console.log(questionResponses);
        markdownDelegator(questionResponses);
        
    });
    
};


// generating a title for the README
// 

// Writing the readme file and adding in the data
// let writeToFile = (fileName, data) => {
//     fs.writeFile( fileName, data, (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// }

let markdownDelegator = (data) => {
    gM.generateMarkdown(data);
};
// TODO: Create a function to initialize app
let init = () => {
    // let fileName = "README.md"
    // let data = " "
    // questions.forEach(element => console.log(element)); 
    questionPrompts();
    // writeToFile(fileName, data);
    
}

// Function call to initialize app
init();


