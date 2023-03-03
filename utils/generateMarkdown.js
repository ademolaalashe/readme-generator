// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing
  ${data.tests}
  
  ## Questions
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  ## License
  This project is licensed under ${data.license} license.` 
}

module.exports = generateMarkdown;
