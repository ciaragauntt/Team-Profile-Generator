const htmlCreate = require('./src/htmlCreate');

//connect to specific team javascript
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const Team = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            //manager name
            type: 'input',
            name: 'name',
            message: 'Please input manager name',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Managers name required!");
                    return false;
                }
            }
        },
        {
            //manager id
            type: 'input',
            name: 'id',
            message: 'Please input manager id',
            validate: managerName => {
                if (isNaN(managerName)) {
                    console.log('Manager id required!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            //manager email
            type: 'input',
            name: 'email',
            message: 'Please input managers email',
            validate: managerEmail => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log('Enter a correct email');
                    return false;
                }
            }
        },
        {
            // manager office number
            type: 'input',
            name: 'officeNumber',
            message: 'Please input managers office number',
            validate: managerName => {
                if (isNaN (managerName)) {
                    console.log('Office number required!');
                    return false
                } else {
                    return true;
                }
            }
        }
    ])
    .then (managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const Manager = new Manager (name, id, email, officeNumber);

        Team.push(Manager);
        console.log(Manager);
    })
};