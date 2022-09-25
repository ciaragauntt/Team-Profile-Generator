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
            validate: name => {
                if (name) {
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
            validate: name => {
                if (isNaN(name)) {
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
            validate: email => {
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
            validate: name => {
                if (isNaN (name)) {
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
        const manager = new Manager (name, id, email, officeNumber);

        Team.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log('*****ADDING EMPLOYEE TO TEAM*****');

    return inquirer.prompt ([
        {
            //emplyee role
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Engineer', 'Intern']
        },
        {
            // employee name
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Employee name required!');
                    return false;
                }
            }
        },
        {
            // employee id
            type: 'input',
            name: 'id',
            message: 'Enter employee id',
            validate: name => {
                if (isNaN(name)) {
                    console.log('Employee Id required!');
                    return false;
                } else {
                    return true;
                }
            }

        },
        {
            // employee email
            type: 'input',
            name: 'email',
            message: 'Enter employee email',
            validate: email => {
                valid =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Email required!')
                    return false;
                }
            }
        },
        {
            // employee github
            type: 'input',
            name: 'github',
            message: 'Enter employees github username',
            when: (input) => input.role === "Engineer",
            validate: name => {
                if(name) {
                    return true;
                } else {
                    console.log('Employee github required!');
                    return false;
                }
            }
        },
        {
            // intern school
            type: 'input',
            name: 'school',
            message: 'Enter interns school',
            when: (input) => input.role === "Intern",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Interns school required");
                    return false;
                }
            }
        },
        {
            // confirming adding the employee/inten
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then (employeeData => {
        let {name, id, email, role, github, school, confirmAdd} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        Team.push(employee);

        if (confirmAdd) {
            return addEmployee(Team);
        } else {
            return Team;
        }
    })
};

// generate html page

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("TEAM PROFILE HAS BEEN CREATED");
        }
    })
};

addManager()
    .then(addEmployee)
    .then (Team => {
        return htmlCreate(Team);
    })
    .then(HTMLpage => {
        return writeFile(HTMLpage);
    })
    .catch (err => {
        console.log(err);
    });