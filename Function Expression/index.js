//fucntion declaration = define a reusable block of code
//                      that performs a specifics task

/*
function hello ()
{
    console.log("Hello");
}*/

//function expressions = a way to define functions as
//                      values of variables

//FIRST EXAMPLE
const hello = function ()
{
    console.log ("Hello");
}

//PASSING A FUNCTION AS A VALUE
setTimeout(hello, 3000);

//SECOND EXAMPLE

const numbers = [1,2,3,4,5,6];
//MAP to a array
const squares = numbers.map(function(element)
{
    return Math.pow(element,2);
}   );
const cubes = numbers.map(function (element)
{
    return Math.pow(element,3);
}   );

//FILTER
const evenNums = numbers.filter (function(element)
{
    return element%2===0;
});
const oddNums = numbers.filter (function(element)
{
    return element%2!==0;
});
//REDUCE 
const sumNums = numbers.reduce ( function(accumulator, element){
        return accumulator + element;
} );


console.log(cubes);
console.log(squares);
console.log(evenNums);
console.log(oddNums);
console.log(sumNums);
