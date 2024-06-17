// nested objects = Objects inside of other object.
//                  Allows you to represent more complex data 
//                  structures
//                  Child Objects is enclosesd by a Parent Object

//                  Person(Address{},ContactInfo{})
//                  ShoppingCart{Keyboard{}, Mouse{},Monitor{}}

const person = {
    fullname : "SpongeBob Squarepants",
    age : 30,
    isStudents : true ,
    hobbies : ["karate","jellyfishing","cooking"],
    address : {
        street : "124 Conch St.",
        city : "Bikini Bottom",
        country:"Int. Water"
    }
}
/*
console.log(person.fullname);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[1]);*/
console.log("NESTED OBJECT");
console.log(person.address.street);
for (const property in person.address)
    {
        //console.log(property); STREET CITY COUNTRY
        console.log(person.address[property]);
    }

//SECOND EXAMPLE
class Person{
    constructor (name,age,...address)
    {
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor (street, city,country)
    {
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

let person1 = new Person("SpongeBob",30,"124 Conch St.","Bikini Bottom","Int.Waters");

const person2 = new Person("Patrick",34,"123 Conch St.","Bikini Bottom","Int. Waters");

console.log(person1.address);