
const inquirer = require('inquirer');
const { questions, extendedPrompts,contributorPrompt, contributors } = require('./data/promptQuestions');
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
    let writeCompleteReadme
    if (startUpPrompts.completeReadMe) {
        writeCompleteReadme = await inquirer.prompt(extendedPrompts)
    }
    else{
        writeCompleteReadme = {
            description: 'Sample Description to be updated later formally',
            installation: 'Placeholder for Installation instructions if pending',
            usage: 'sample',
            tests: 'sample'
        }
    }
    let contributorInput
    if (startUpPrompts.contributors) {
     contributorInput = await inquirer.prompt(contributors)
    }
    const licensePrompt = await inquirer.prompt(getLicenseList(licenses));
    printReadMe(startUpPrompts,writeCompleteReadme,licensePrompt,contributorInput);
}
const printReadMe = (startUpPrompts,writeCompleteReadme,licensePrompt,contributorInput) => {
let title = String(startUpPrompts.title).toUpperCase();
let copyRightLine = `Copyright (c) [${startUpPrompts.year}] [${startUpPrompts.name}]`
let description = writeCompleteReadme.description;
let usage = writeCompleteReadme.usage;
let contributors = contributorInput.contributors;
let install = writeCompleteReadme.installation;
const licenseData = String(licensePrompt.license_choice).split('~',2)
const licenseTitle = licenseData[0]
const licenseBody = licenseData[1]
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
${contributors}
## LICENSING
${licenseTitle}
${copyRightLine}
${licenseBody}`
fs.writeFile(`README.md`, readMeText, (err) =>
err ? console.error(err) : console.log('Success!'))
};
main()