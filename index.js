
const inquirer = require('inquirer');
// const licenseFormats = require('./licenses.js');
// const fileData = require('./filedata.js');
const fs = require('fs');
inquirer
.prompt([ 
{
    type: 'input',
    message: 'enter your email address:',
    name: 'email',
}, 
{
    type: 'input',
    message: 'provide link to github profile',
    name: 'github',
}, 
{
    type: 'input',
    message: 'briefly describe your project',
    name: 'description',
},
{
    type: 'input',
    message: 'briefly outline your installation instructions',
    name: 'installation',
},
{
    type: 'input',
    message: 'describe the usage of the project',
    name: 'usage',
},
{
    type: 'input',
    message: 'list any contributors of the project: First Name, Last Name, Github Username',
    name: 'contributors',
},
{
    type: 'input',
    message: 'test input',
    name: 'tests',
},
{
    type:'rawlist',
    message: 'select your choice of licensing',
    choices:['MIT', 'GNU', 'Apache'],
    name: 'license_choice'
}

])
.then((response) => {
const readMeText = `
## DESCRIPTION
${response.description}
## INSTALLATION
${response.installation}
## USAGE
${response.usage}
## CONTRIBUTIONS
${response.contributors}
## LICENSING
${response.license_choice}
`
fs.writeFile(`README.md`, readMeText, (err) =>
err ? console.error(err) : console.log('Success!')
);

});