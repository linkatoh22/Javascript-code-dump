//  reduce() = reduce the elements of an array
//              to a single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log (`$${total.toFixed(2)}`);
function sum (accumulator, element)
{
    return accumulator + element;
}

// SECOND EXAMPLE

const grades = [75,50,90,65,95];

const maximum = grades.reduce(findMax);
console.log (`Max grade is ${maximum}`);

const minimum = grades.reduce(findMin);
console.log (`Min grade is ${minimum}`);

function findMax(accumulator,element)
{
    return accumulator > element ? accumulator:element;
}

function findMin(accumulator,element)
{
    return Math.min(accumulator,element);
}