5.how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP -

In Typescript Access Modifires are used for control the accessibility of class properties and methods.its a helpful for developers to protect the data and manage code property.the Modifires are protected,public,readonly,private.Using readonly modifire, you can just console & you can read the value but you can not get the access to change the value after initialization.Private modifire is stuck in the class where you use the modifire for properties.once you declared a property private in a class,you cant use the private in other class or any where.but using protected modifire you can use the modifire in other class but cant use it outside the class.if you want to use the protected property in onther class.you must be use extands to use the property in child class.

Code Example for Public Modifire :

class Student {
   public name : string;
    constructor(name : string){
        this.name=name
    }
}

const student = new Student ("Ajhar");

console.log(student.name);


Code Example for readonly Modifire :
  
  class Salary{
    readonly baseSalary : number;
    constructor(baseSalary : number){
        this.baseSalary=baseSalary
    }
  }

const salary= new Salary(5000)
console.log(salary.baseSalary)
salary.baseSalary=6000; 

  we can not change the property baseSalary after the object has been created.if you want to change the baseSalary you cant change it because its a readonly modifire.like there salary.baseSalary=6000; does not work.
  

Code Example for private Modifire : 

class Employee {
    private baseSalary : number;
    constructor ( baseSalary:number){
        this.baseSalary=baseSalary
    }
    getSalary (): number{
        return this.baseSalary
    }
}        

Here we can access the baseSalary with the getSalary() method.But we can not declearly access it outside the method.


Code Example for protected Modifire : 

class Employee {
    protected name : string;
    constructor(name : string){
        this.name=name
    }

}
class Manager extends Employee {
    constructor(name:string){
        super(name)
    }

    showName() : string{
        return this.name
    }
}

const manager = new Manager("Alam")
console.log(manager.showName())
here the Manager class can access the name property because it extends the Employee class.