// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, 
//          places)
//          object = {ket:value, function ()}


const person = 
{
    firstName: "Spongebob",
    lastName : "Squarepants",
    age : 30,
    isEmployed : true,
    sayHello : function () {console.log("i'm Spongebob!")},
    eat : function() {console.log("I'm eating a Krabby Patty")},
}

const person2 =
{
    firstName : "Matrick",
    lastName : "Star",
    age : 43,
    isEmployed : false,
    sayHello : () => {console.log("I'm Matrick!")},
    eat: () => {console.log("I'm eating")},
}

console.log (person.firstName);
console.log(person.lastName);

console.log(person2.firstName);
console.log(person2.lastName);

person.sayHello();
person2.sayHello();

