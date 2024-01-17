// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  if (license !== 'none') {
     
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } 
 
else {
    return ""; 
}
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license == "MIT") {
    return `https://opensource.org/licenses/MIT`;
    }
    else if
    (license == "APACHE") {
      return `https://opensource.org/licenses/Apache-2.0`;
    }
    else if
    (license == "Eclipse") {
      return `https://opensource.org/license/epl-1.0/`;
    }
    else {
    return "";
    };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License 
    
    This project uses the ${license} license, and a link for further information can be found below.`
  }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}
   * ${renderLicenseLink(data.license)}
  
  
  ## Deployed Application URL
  ${data.link};

  ## Table of Contents
  *[Title](#title)
  *[Description](#description)
  *[Usage}(#usage)
  *[Installation](#installation)
  *[Testing](#testing)
  *[License](#license)
  *[Questions](#questions)
  
  ## Title
  ${data.title}
  ## Description
  ${data.description}
  ## Usage:
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Testing
  ${data.testing}
  ## License
  ${data.license}
  ## Questions
  Please get in touch via email: ${data.email} or visit [github/${data.username}](https://github.com/${data.username}) if you have any questions.
  `;
}

module.exports = generateMarkdown;
