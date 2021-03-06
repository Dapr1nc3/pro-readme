// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const loadReadme = require('./utils/generateMarkdown');
const util = require('util');
const { resolve } = require('path');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function userquestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What would you like to name your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('You need to enter a projet name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a Github name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter a email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a short description of your project?',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please provide a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'What kind of license should your project have?',
            choices: ['MIT','GNU','Apache','None']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            validate: instalInput => {
                if (instalInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'runtest',
            message: 'What command should be run to run test?',
            validate: runInput => {
                if (runInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'To whom do you want to give credit to for this project?',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributingrepo',
            message: 'What does the user need to know about contributing to the repo?',
            validate: runInput => {
                if (runInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
    ])
}


const makeFile = (generatePage, userInput) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(`../dist/${userInput.project}.md`, generatePage, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File was created'
            })

        })
    })

};



async function init() {
    try {
        const userInput = await userquestions();
        const generatePage = loadReadme(userInput);

        return makeFile(generatePage, userInput);
    } catch (err) {
        console.log(err);
    }
}

init()