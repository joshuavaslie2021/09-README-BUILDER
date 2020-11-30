const { questions, extendedPrompts, contributorPrompt } = require('./data/promptQuestions');
const getLicenseList = (licenses) => {
    return {
        type:'rawlist',
        message: 'select your choice of licensing',
        name: 'license_choice',
        choices: licenses,
    };
};
const main = async () => {
    const inquirer = require('inquirer');
    const startUpPrompts = await inquirer.prompt(questions);
    let writeCompleteReadme
    if (startUpPrompts.completeReadMe) {
        writeCompleteReadme = await inquirer.prompt(extendedPrompts)
    }
    else{
        writeCompleteReadme = {
            description: 'Sample Description to be updated later formally',
            installation: 'Placeholder for Installation instructions if pending',
            usage: 'Usage of Project/Application to be updated',
            tests: 'Enter all various methods of testing conducted on application'
        }
    }
    let contributorInput
    if (startUpPrompts.contributors) {
         contributorInput = await inquirer.prompt(contributorPrompt)
    }
    if (startUpPrompts.contributors === false) {
        contributorInput  = {
            contributors:'N/A'
        }
    }
    
    const { licenses } = require('./data/licenseScript');
    const licensePrompt = await inquirer.prompt(getLicenseList(licenses));
    printReadMe(startUpPrompts,writeCompleteReadme,licensePrompt,contributorInput);
}
const printReadMe = (startUpPrompts,writeCompleteReadme,licensePrompt,contributorInput) => {
let title = String(startUpPrompts.title).toUpperCase();
let copyRightLine = `Copyright (c) [${startUpPrompts.year}] [${startUpPrompts.name}]`
let description = writeCompleteReadme.description;
let usage = writeCompleteReadme.usage;
let install = writeCompleteReadme.installation;
let contributors = contributorInput.contributors;
let githubUser = startUpPrompts.github;
const questionText = `If you have any questions or concerns in regards to the project, please reach out to the developer via
 Github: ${githubUser} or Email: ${startUpPrompts.email}`
const licenseData = String(licensePrompt.license_choice).split('~',4)
const licenseBody = licenseData[0];
const licenseBody2 = licenseData[2];
const licenseBadge = licenseData[3]
const fs = require('fs');
const readMeText = 
`## ${title} 

${licenseBadge}

## DESCRIPTION

${description}

## Table of Contents 

* [Installation](#INSTALLATION)
* [Usage](#USAGE)
* [Contributions_&_Credits](#CONTRIBUTIONS_&_CREDITS)
* [Licensing](#LICENSING)

## INSTALLATION

${install}

## USAGE

${usage}

## CONTRIBUTIONS_&_CREDITS

${contributors}

## QUESTIONS

${questionText}

## LICENSING  

${licenseBody}

${copyRightLine}

${licenseBody2}`;
fs.writeFile(`README.md`, readMeText, (err) =>
err ? console.error(err) : console.log('Success!'))
};
main()