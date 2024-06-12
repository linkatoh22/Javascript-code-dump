console.log("HIHI")
//SEPERATE ARRAY OR STRING BY SYNTAX: ...
let numbers=[1,2,3,4,5];
let maxinum = Math.max(...numbers);
console.log(maxinum);
let minimum = Math.min(...numbers);
console.log(minimum);

let username="LinKaToh";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","celery","potatoes"];
let foods = [...fruits,...vegetables,"eggs","milk"];
console.log(foods);
