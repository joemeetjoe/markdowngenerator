// compares the license answers to the different badges out there and populates based off of the user answer
let renderLicenseBadge = (data) => {
  let badgeAppend;
  if (data.licenses == 'None') {
    badgeAppend = ``
  } else if (data.licenses == 'Apache License 2.0') { 
    badgeAppend = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    
    `
  } else if (data.licenses == 'GNU General Public License v3.0') { 
    badgeAppend = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    
    `
  } else if (data.licenses == 'MIT License') { 
    badgeAppend = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    `
  } else if (data.licenses == 'BSD 3-Clause "Simplified" License') { 
    badgeAppend = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

    `
  } else if (data.licenses == 'Boost Software License 1.0') { 
    badgeAppend = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

    `
  } else if (data.licenses == 'Creative Commons Zero v1.0 Universal') { 
    badgeAppend = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

    `
  } else if (data.licenses == 'Eclipse Public License 1.0') { 
    badgeAppend = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

    `
  } else if (data.licenses == 'Mozilla Public License 2.0') { 
    badgeAppend = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

    `
  } else if (data.licenses == 'The Unlicense') { 
    badgeAppend = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    
    `
  };
  return(badgeAppend);
};

// generates a markdown title using template literals
let  generateMarkdownTitle = (data) => {
  let titleAppend = `# ${data.title}

`
  return (titleAppend);
};

// generates a markdown description section using template literals
let renderDescriptionSection = (data) => {
  let descriptionAppend = `## Description
  
  -Motivations for this project: ${data.motivation}

  -What problems this application solves: ${data.problemsSolved}

  -What I learned on this project: ${data.lessonsLearned}
  
  `
  return (descriptionAppend);
};

// generates a table of contents using template literals
let renderTableOfContents = () => {
  let tableAppend = `## Table Of Contents
  
  *[Intallation](#installation)
  
  *[Usage](#usage)
  
  *[License](#license)
  
  *[Contributing](#contributing)
  
  *[Tests](#tests)
  
  *[Questions](#questions)
  
  `

  return (tableAppend);
};

// generates installation instructions using template literals
let renderInstallation = (data) => {
  let installationAppend = `## Installation
  
  To install neccesary dependencies, run the following command:

  ---

  -${data.installation}

  ---
  `
  return (installationAppend);
};

// generates Usage instructions using template literals
let renderUsage = (data) => {
  let usageAppend = `## Usage
  
  Please see link to deployed application below:
  
  ${data.appLink}
  
  `
  return(usageAppend);
};

// template literal to set the license section. If the license is none, set the section to blank
let renderLicenseSection = (data) => {
  let licenseAppend;
  if (data.licenses == 'None') {
    licenseAppend = ``
  } else {
    licenseAppend = `## License

  This project is licensed under the ${data.licenses}.
  
  `
  };
  
  return(licenseAppend);
};

// generates a contributions section using template literals
let renderContributions = (data) => {
  let contributionsAppend = `## Contributing
  
  ${data.contributors}
  
  `

  return (contributionsAppend);
};

// generates a tests section using template literals
let renderTests = (data) => {
  let testsAppend = `## Tests
  
  To run tests, run the following command:
  
  ---
  
  ${data.tests}

  ---
  
  `
  
  return (testsAppend);
};

// generates a questions section using template literals. 
let renderQuestions = (data) => {
  let appendQuestions = `## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.emailLink}.
  You can find more of my work here: [${data.githubRepo}](github.com/${data.githubRepo}).`

  return (appendQuestions);
};

// exports all of the functions to the index.js to be called by markdownDelegator
module.exports = {
  generateMarkdownTitle,
  renderLicenseBadge,
  renderLicenseSection,
  renderDescriptionSection,
  renderTableOfContents,
  renderInstallation,
  renderUsage,
  renderContributions,
  renderTests,
  renderQuestions
};

