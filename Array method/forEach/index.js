//forEach() = method used to iterate over the elements
//          of an array and apply a specified function (callback)
//          to each element

//array.forEach(callback)
// element, index, array are provided

let numbers = [1,2,3,4,6];
numbers.forEach(double);
numbers.forEach(display);
function double(element, index,array){
    array[index] = element * 2;

}
function triple(element,index,array)
{
    array[index] = element * 3;

}
function triple(element,index,array)
{
    array[index] = Math.pow(element, 2);

}
function cube(element,index,array)
{
    array[index] = Math.pow(element, 3);

}
function display(element)
{
    console.log(element);
}

/*Second example*/

let fruits = ["apple" , "orange", "banana","coconut"];

fruits.forEach(UpperCaseFruits);
fruits.forEach(display);
fruits.forEach(LowerCaseFruits);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);
function UpperCaseFruits(element,index,array)
{
    array[index] = element.toUpperCase();
}
function LowerCaseFruits(element,index,array)
{
    array[index] = element.toLowerCase();
}
function capitalize(element,index,array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function displayFruits (element)
{
    console.log(element);
}
