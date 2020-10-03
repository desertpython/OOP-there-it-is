class Employee {
    constructor (arg1 , Id , email, role){
        this.name = arg1
        this.Id = Id
        this.email = email
        this.role = role
        

    }
     getName(){
        // I have a constructor with name as an arguement
        // get name arguement and use in function
        // display/make available name for later use
        return this.name
     }


    getId(){
        return this.Id
    }


    getEmail(){
        return this.email
    }

    getRole(){
        return 'employee'
    }
};
class Manager extends Employee{
    constructor (arg1, Id, email, role, officeNum) {

        super(arg1, Id, email, role) 
        this.officeNum = officeNum
    }

    getRole(){
        return 'manager'
    }
    getOfficNum(){
        return this.officeNum
    }
    

};
class Engineer extends Employee{
    constructor (arg1, Id,  email, role, gitName) {
    super(arg1, Id, email, role)
    this.gitName = gitName

}
    getRole(){
        return 'engineer'
    }
    getGitName(){
        return this.gitName
    }
};
class Intern extends Employee{
    constructor (arg1, Id, email, role, school){
    super(arg1, Id, email, role)
    this.school = school
}
    getRole(){
        return 'intern'
    }
    getSchool(){
        return this.school
    }
};


// var employee1 = new Intern('John' , '12345' , 'test@test.com' , 'text', 'LSU' )

// console.log(employee1.getName())
// console.log(employee1.getId())
// console.log(employee1.getEmail())
// console.log(employee1.getRole())
// // console.log(employee1.getOfficNum())
// // console.log(employee1.getGitName())
// console.log(employee1.getSchool())

module.exports = {Employee, Engineer, Intern, Manager}



