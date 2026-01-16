// cd /workspaces/Angular_repo/day6 && npx tsc app.ts && node app.js
class Person{
    name1:string;
    age:number;

    constructor(name1:string,age:number){
        this.name1=name1;
        this.age=age;
    }

    greet():void{
        console.log(`hello my name is ${this.name1} and my age is ${this.age}`);
    }

}
let p1=new Person("kaushal",24);
console.log(p1.name1);
p1.greet();

class User{
    constructor(
        public name:string,
        public email:string,
        public password:string

    ){}
}
let u1=new User("kaushal","kaushal@gmail.com","123456");
console.log(u1.email);
// When you use public keyword in the constructor parameters, TypeScript does both things automatically:

// Creates the property (name, email, password)
// Assigns the value to it
// So it's just a shortcut. Behind the scenes, TypeScript converts it to the same thing as Pattern 1.





//professional way(Real-world example)

// export class Employee{
//     constructor(
//         public name:string,
//         public id:number,
//         public role:string
//     ){}
//     getDetails(){
//     return `Name: ${this.name}, ID: ${this.id}, Role: ${this.role}`;
// }
// }

// let e1=new Employee("kaushal",101,"developer");
// console.log(e1.getDetails());

