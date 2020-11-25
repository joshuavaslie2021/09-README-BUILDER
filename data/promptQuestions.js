
const inquirer = require('inquirer');
        const startPrompt = [
        {
            type: 'input',
            message: 'please enter developer(s) names',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'input year project was completed:',
            name: 'year',
        },
        {
            type: 'input',
            message: 'enter your email address:',
            name: 'email',
        },
        {
            type: 'confirm',
            message: 'were there other contributors on the project? y/n',
            name: 'contributors',
        
        },
        {
            type: 'confirm',
            message: 'complete READMe.md body?',
            name: 'completeReadMe',
        }
    ];
    const fullReadMe = [
        {
            type: 'input',
            name: 'description',
            message: `please provide a description for project?`
        },
        {
            type:'input',
            name:'installation',
            message:'install info'
        },
        {
            type: 'input',
            message: 'describe the usage of the project',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'test input',
            name: 'tests',
        },
        
    ]
    
module.exports = {
    questions:startPrompt,
    extendedPrompts:fullReadMe
}
