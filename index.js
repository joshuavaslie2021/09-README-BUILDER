
const inquirer = require('inquirer');
const { questions, extendedPrompts } = require('./data/promptQuestions');
const { licenses } = require('./data/licenseScript');
const getLicenseList = (licenses) => {
    return {
        type:'rawlist',
        message: 'select your choice of licensing',
        name: 'license_choice',
        choices: licenses,
    }
};
const main = async () => {
    const startUpPrompts = await inquirer.prompt(questions);
    
    if (startUpPrompts.completeReadMe) {
        var writeCompleteReadme = await inquirer.prompt(extendedPrompts)
    }
    else{
        var writeCompleteReadme = {
            description: 'Sample Description to be updated later formally',
            installation: 'Placeholder for Installation instructions if pending',
            usage: 'sample',
            tests: 'sample'
        }
    }
    
    // if (startUpPrompts.contributors) {
    // printReadMe(startUpPrompts,writeCompleteReadme)
    // }
    const licensePrompt = await inquirer.prompt(getLicenseList(licenses));
    printReadMe(startUpPrompts,writeCompleteReadme,licensePrompt);
}
const printReadMe = (startUpPrompts,writeCompleteReadme,licensePrompt) => {
let title = String(startUpPrompts.title).toUpperCase();
// let licenseTitle = licensePrompt.license_choice.name
let licenseText = licensePrompt.license_choice
let copyRightLine = `Copyright (c) [${startUpPrompts.year}] [${startUpPrompts.name}]`
let description = writeCompleteReadme.description;
let usage = writeCompleteReadme.usage;
let install = writeCompleteReadme.installation;

const fs = require('fs');
const readMeText = 
`## ${title}
## DESCRIPTION
${description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributions_&_Credits](#contributions_&_credits)
* [Licensing](#licensing)
## INSTALLATION
${install}
## USAGE
${usage}
## CONTRIBUTIONS & CREDITS

## LICENSING

${copyRightLine}

${licenseText}`
fs.writeFile(`README.md`, readMeText, (err) =>
err ? console.error(err) : console.log('Success!'))
};
main()