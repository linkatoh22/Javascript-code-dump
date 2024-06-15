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

console.log(squares);

console.log(cubes);