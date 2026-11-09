
const multiplyValue=(value:number, multiplier?:number) :number=>{
   return value *(multiplier ?? 2)
}





const processInput=(value :string | number | boolean) : number | string =>{
    switch (typeof value) {
        case "string":
            return value.toLowerCase().trim()
           
         case "number" :
           return value * 10

          case "boolean":
            if(value===true) {
                return "Active"
            }
             if (value===false){
                return "Inactive"
            }
        default:
            throw new Error("please put a value")
            
            
    }
}



const formatCoordinate=(coordinate: readonly [latitude: number, longitude: number, locationName: string]): string=>{
 return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}



const concatenateArrays=<T>(...arrays: T[][]) :T[]=>{
    return arrays.flat()
}




interface Course{
    title:string,
    students:number,
    isPublished:boolean
}

const getPopularCourses=(courses :Course[],minStudents:number) : Course[]=>{
     return courses.filter((c)=>{
        return c.isPublished === true && c.students>=minStudents
       
     })
}





const pluckValues=<T, K extends keyof T> (items: T[],key: K):T[K][]=>{
    const pluckResult : T[K][]=[]
    for(let itm of items){
        pluckResult.push(itm[key])
    }
    return pluckResult
}





class Employee {
   

    constructor(protected name:string,private baseSalary:number){

    }
   getDetails():string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
   }
}

class Manager extends Employee{
    
    constructor(name:string,baseSalary:number,private department:string){
      super(name,baseSalary)
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}





const validateAgeAsync=async (age:number):Promise<string>=>{
    return new Promise((resolve,reject )=>{
        if(age>=18){
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000);
        }
        else{
            reject( new Error("Access Denied: Must be 18 or older"))
        }
    })
    }

    