// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge(license) => {
  if (license === "none") {
    return "";
  } else {
   `return (https://img.shields.io/badge/${license}-blue.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `\n  * [License](#license) \n`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
  This app is covered under the ${license} license.`
  }
}

module.exports = generateMarkdown;
