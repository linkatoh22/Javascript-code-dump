// map() = accepts a callback and applies that function
//          to each elements of an array then return a new array

const numbers = [1, 2, 3 , 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(squares);
function square(elements)
{
    return Math.pow(elements,2);
}

function cube(elements)
{
    return Math.pow(elements,3);
}

/*SECOND EXAMPLE*/
const students = ['SpongeBob','Patrick','Squidward','Sandy'];
const studentsUpperCase = students.map(upperCase);
const studentsLowerCase = students.map(lowerCase);
const studentsCapitalize = students.map(capitalize);

console.log(studentsUpperCase);
console.log(studentsLowerCase);
console.log(studentsCapitalize);

function upperCase (elements)
{
    return elements.toUpperCase();
}
function lowerCase (elements)
{
    return elements.toLowerCase();
}
function capitalize (elements)
{
    return elements.charAt(0).toUpperCase() + elements.slice(1);
}
// THIRD EXAMPLE 
const dates = ["2014-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element)
{
    const parts = element.split("-"); //Chia thành 3 mảng năm tháng ngày
    return `${parts[1]} / ${parts[2]} / ${parts[0]}`;
}
