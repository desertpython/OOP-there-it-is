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
    constructor (arg1 , Id , email, role, officeNum) {
        super(arg1 , Id , email, role) 
        this.officeNum = officeNum
    }

    getRole(){
        return 'manager'
    }
    getOfficNum(){
        return this.officeNum
    }
    

};

var employee1 = new Manager('John' , '12345' , 'test@test.com' , 'text', '522')

console.log(employee1.getName())
console.log(employee1.getId())
console.log(employee1.getEmail())
console.log(employee1.getRole())
console.log(employee1.getOfficNum())

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
