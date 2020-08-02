const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./src/Employeeclass");
arr1 = [];

//need to use arr1 to make html file 
//use fs from hw 


//Manager Questions
inquirer.prompt ([
    {type: 'input' , message: 'What is your name', name:'managerName'},
    {type: 'input' , message: 'What is your employee ID number', name: 'managerID'},
    {type: 'input', message: 'What is your email', name: 'managerEmail' },
    {type: 'input', message: 'What is your office number', name: 'officeNumber' }
]


).then (repsonse => {
    try{
    console.log(repsonse)
    var employ1 = new Manager (response.managerName , repsonse.managerId, repsonse.managerEmail , repsonse.officeNumber)
    arr1.push
    }
    catch(err){}
    team()
})


function team (){
    inquirer.prompt([
        {type: 'list', message: "What do you want to add", choices: ['Engineer', 'Intern', 'Exit'], name:'engineerOrIntern'}
    ]).then(response => {
        if (response.engineerOrIntern == 'Engineer'){
            createEng()
        }
        if(repsonse.engineerOrIntern == 'Intern'){
            createInt()
        }

    })
}

    function createEng() {
        inquirer.prompt([
            {type: 'input', message: 'What is your name', name: 'engName'},
            {type: 'input', message: 'What is your employee ID number', name: 'engID'},
            {type: 'input', message: 'What is your email', name: 'engEmail'},
            {type: 'input', message: 'What is your github username', name: 'engGit'},
        ]).then (repsonse => {
            try{
            console.log(repsonse)
            var employ1 = new Engineer (response.engName , repsonse.engId, repsonse.engEmail , repsonse.engGit)
            arr1.push
            }
            catch(err){}
            team()
        })
        team()
    }
    function createInt(){
        inquirer.prompt([
            {type: 'input', message: 'What is your name', name: 'intName'},
            {type: 'input', message: 'What is your employee ID number', name: 'intID'},
            {type: 'input', message: 'What is your email', name: 'intEmail'},
            {type: 'input', message: 'What is your school', name: 'intSchool'},
        ]).then (repsonse => {
            try{
            console.log(repsonse)
            var employ1 = new Intern (response.intName , repsonse.intID, repsonse.intEmail , repsonse.intSchool)
            arr1.push
            }
            catch(err){}
            team()
        })
        team()
    }

    
