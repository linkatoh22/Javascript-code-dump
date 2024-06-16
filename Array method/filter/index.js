//filter() = Creates new array by filtering out the elements

let numbers = [1, 2, 3,4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
let oddNums=numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(elements)
{
    return elements % 2 ===0;
}

function isOdd (elements)
{
    return elements % 2 !==0;
}

//SECOND EXAMPLE
const age = [16, 17, 18,19,20,60];
let adults = age.filter(isAdults);

let childs = age.filter(isChild);
console.log(adults);
console.log(childs);
function isAdults(age){
    return age >=18;
}

function isChild(age){
    return age<18
}

//THIRD EXAMPLE

const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];

const shortWord = words.filter(getShortWords);
console.log(shortWord);

const longWord = words.filter(getLongWords);
console.log(longWord);
function getShortWords(element)
{
    return element.length <= 6;
}
function getLongWords(element)
{
    return element.length > 6;
}

