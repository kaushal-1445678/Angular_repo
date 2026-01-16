// cd /workspaces/Angular_repo/day6 && npx tsc app.ts && node app.js
var Person = /** @class */ (function () {
    function Person(name1, age) {
        this.name1 = name1;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("hello my name is ".concat(this.name1, " and my age is ").concat(this.age));
    };
    return Person;
}());
var p1 = new Person("kaushal", 24);
console.log(p1.name1);
p1.greet();
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
var u1 = new User("kaushal", "kaushal@gmail.com", "123456");
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
