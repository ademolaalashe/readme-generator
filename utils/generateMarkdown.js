// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}`
}

module.exports = generateMarkdown;
