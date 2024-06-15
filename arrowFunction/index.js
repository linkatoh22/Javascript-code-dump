// arrow function = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code

//NORMAL
function hello ()
{
    console.log("Hello");
}
// AROW FUNCTION
const hello_arrow = (name,age) =>{ console.log(`Hello ${name}`) 
    console.log(`You are ${age} `);
};
hello_arrow("Linh",20);


//SECOND EXAMPLE

setTimeout(hello_arrow("Linh",19),3000);

//THIRD EXAMPLE

const numbers = [1,2,3,4,5];

const squares = numbers.map( (element) => Math.pow(element,2) );

const cubes = numbers.map( (element) => Math.pow(element,3) );

const evenNums = numbers.filter ( (element) => element % 2 === 0);

const oddNums = numbers.filter ( (element) => element % 2 !==0 );

const total = numbers.reduce ( (accumulator,element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);