const {
    Manager,
    Engineer,
    Intern
} = require('./src/Employeeclass')
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

// const render = require('./src/page-template.js')


const teamMembers = [];
const arrayId = [];
//need to use arr1 to make html file 
//use fs from hw 


//Manager Questions
inquirer.prompt([{
            type: 'input',
            message: 'What is your name',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is your employee ID number',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is your role',
            name: 'role'

        },
        {
            type: 'input',
            message: 'What is your office number',
            name: 'officeNumber'
        }
    ]


).then(response => {
    try {
        console.log(response)
        var employ1 = new Manager(response.managerName, response.managerID, response.managerEmail, response.role, response.officeNumber)
        console.log(employ1)
        teamMembers.push(employ1)
    } catch (err) {
        console.log(err)
    }
    team()
})


function team() {
    inquirer.prompt([{
        type: 'list',
        message: "What do you want to add",
        choices: ['Engineer', 'Intern', 'Exit'],
        name: 'engineerOrIntern'
    }]).then(response => {
        if (response.engineerOrIntern == 'Engineer') {
            createEng()
        }
        if (response.engineerOrIntern == 'Intern') {
            createInt()
        }
        if (response.engineerOrIntern == 'Exit') {
            quittinTime()
        }
    })
}

function createEng() {
    inquirer.prompt([{
            type: 'input',
            message: 'What is your name',
            name: 'engName'
        },
        {
            type: 'input',
            message: 'What is your employee ID number',
            name: 'engID'
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'engEmail'
        },
        {
            type: 'input',
            message: 'What is your role',
            name: 'engRole'
        },
        {
            type: 'input',
            message: 'What is your github username',
            name: 'engGit'
        },
    ]).then(response => {
        try {
            console.log(response)
            var employ1 = new Engineer(response.engName, response.engID, response.engEmail, response.engRole, response.engGit)
            teamMembers.push(employ1)
        } catch (err) {}
        team()
    })

}

function createInt() {
    inquirer.prompt([{
            type: 'input',
            message: 'What is your name',
            name: 'intName'
        },
        {
            type: 'input',
            message: 'What is your employee ID number',
            name: 'intID'
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'intEmail'
        },
        {
            type: 'input',
            message: 'What is your role',
            name: 'intRole'
        },
        {
            type: 'input',
            message: 'What is your school',
            name: 'intSchool'
        },
    ]).then(response => {
        try {
            console.log(response)
            var employ1 = new Intern(response.intName, response.intID, response.intEmail, response.intRole, response.intSchool)
            teamMembers.push(employ1)
        } catch (err) {}
        team()
    })

}

function quittinTime() {
    //display results from teamMembers
    //end questions
    //etc
    console.log(teamMembers);
//     if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath, render(teamMembers), 'utf-8')

}
