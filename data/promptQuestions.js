
const inquirer = require('inquirer');
        const startPrompt = [
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter your Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Input year project was completed:',
            name: 'year',
        },
        
        {
            type: 'confirm',
            message: 'Were there other contributors on the project? y/n',
            name: 'contributors',
        
        },
        {
            type: 'confirm',
            message: 'Complete READMe.md body?',
            name: 'completeReadMe',
        }
    ];
    const fullReadMe = [
        {
            type: 'input',
            name: 'description',
            message: `Please provide a description for project?`
        },
        {
            type:'input',
            name:'installation',
            message:`Please provide instructions for installing the project and any required dependencies:`
        },
        {
            type: 'input',
            message: 'Describe the planned usage of the project:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What, if any, methods of testing were done on the project prior to launch?',
            name: 'tests',
        },
    ]
    const contributorObj = {
        type:'input',
        name:'contributors',
        message:'List contributors of project (format: First Name Last Name, Email (optional))'
    }
module.exports = {
    questions:startPrompt,
    extendedPrompts:fullReadMe,
    contributorPrompt:contributorObj,
}
