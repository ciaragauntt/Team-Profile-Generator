const htmlCreate = require('./src/htmlCreate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

//created array for all information to fit into to create html page
const teamGenerator = [];

// prompting for manager input 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please input manager name',
            validate: managerName => {
                if (!managerName) {
                    console.log("Name Required!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input manager id',
            validate: managerId => {
                if (isNaN(managerId) || managerId.trim() === ' ') {
                    console.log('Manager id required!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input managers email',
            validate: managerEmail => {
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!valid.test(managerEmail)) {
                    console.log("Email required!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please input managers office number',
            validate: officeNumber => {
                if(!officeNumber) {
                    console.log('Office number required!');
                    return false
                } else {
                    return true;
                }
            }
        }
    ])
// adding manager to the array to be pushed to the htmlcreate
    .then (managerInput => {
        let { name, id, email, officeNumber } = managerInput;
        let manager = new Manager (name, id, email, officeNumber);

        teamGenerator.push(manager);
    })
};

// prompting employee input
const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?',
            validate: employeeName => {
                if (!employeeName) {
                    console.log("Employee name required!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id',
            validate: employeeId => {
                if (isNaN(employeeId) || employeeId.trim() === '') {
                    console.log('Employee Id required!');
                    return false;
                } else {
                    return true;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email',
            validate: employeeEmail => {
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!valid.test(employeeEmail)) {
                    console.log("Email required!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
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
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
// adding employee to the array to be added to the htmlcreate
    .then (employeeData => {
       let {name, id, email, role, github, school, confirmAdd} = employeeData
       let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github)
            
        } else if (role === "Intern") {
            employee  = new Intern(name, id, email, school);
           
        }
        teamGenerator.push(employee);

        if (confirmAdd) {
            return addEmployee(teamGenerator);
        } else {
            return teamGenerator;
        }
    })
};

// using fs to write the file and add it to the index.html
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
    .then (teamGenerator => {
        return htmlCreate(teamGenerator);
    })
    .then(HTMLpage => {
        return writeFile(HTMLpage);
    })
    .catch (err => {
        console.log(err);
    });