let fruits = ["apple","orange","banana","coconut","pineapple"];

fruits.sort();

console.log(fruits);

let number =[6,3,2,5,4,1,9,8];

number.sort((a,b)=> b - a );

console.log(number);


//SECOND EXAMPLE

const people = [{name:"SpongeBob",age:30,gpa:3.0},
    {name:"Patrick",age:37,gpa:1.5},
    {name:"SquidWard",age:38,gpa:2.5},
    {name:"Sandy",age:27,gpa:4.0}
]

people.sort((a,b)=>a.gpa - b.gpa);

//SORT NAME BY ALPHABET
people.sort((a,b)=>a.name.localeCompare(b.name)); //A-Z
console.log(people);
people.sort((a,b)=>b.name.localeCompare(a.name)); //Z-A
console.log(people);


