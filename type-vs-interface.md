1.core differences between type aliases and interface in TypeScript-

In typescript type aliases and interface are use to define the structure of data.both are helpful for developers to describe the properties and type of objects.they look similer but, type aliases and interface are not same.it helps developers choose the right option in his project.


interface : interface mainly use to define the structure of an object.you can see in my code that there are 3 properties.Title,Book,Published.

interface bookDetails {
     Title : string;
     Book : string;
     Published : number

}

Type Alias : Type alias is different from interface.In type alias you can define union type,primitive type,intersection type,tuple type.

type bookDetails ={
     Title : string;
     Book : string;
     Published : number

}

type ID= string | number;

type Status = "Active"|"Offline";


there is one important different between type alias and interface.in typescript you can declare one interface in many time.type script can combine there properties for the interface.but in type alias, we can not declare to type alias with the same name in the samw scope.

example : 
   
interface Student {
    name : string;
}

interface Student {
    age : number;
}