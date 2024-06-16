//As we say spread =expand array into seprates elements
//so REST is = bundles seperates elements into an array


function openFridge(...foods)
{
    console.log(foods);
}
function getFood(...foods)
{
    return foods;
}
const foods1="pizza";
const foods2="hamburger";
const foods3="hotdog";
const foods4="sushi";
//openFridge(foods1,foods2,foods3,foods4,"ramen");

const foods = getFood(foods1,foods2,foods3,foods4,"ramen");
console.log(foods);


//SECOND EXAMPLE
console.log("SECOND EXAMPLE \n\n")

function sum(...numbers )
{
    let result = 0;
    for (let number of numbers )
        {
            result+=number;
        }
    return result;
}
const total=sum(1,4,5,6,7);
console.log(`Your total is ${total}`)

function avg(...numbers)
{
    let result = 0;
    for (let number in numbers)
        {
            result += number;
        }
    return result/numbers.length;
}

const avgTotal = avg(1,4,5,6,7);
console.log(`Your avg is ${avgTotal}`)

//THIRD EXAMPLE
console.log("THIRD EXAMPLE \n\n");

function combineString (...strings)
{
    return strings.join(" ");
}

const fullname = combineString("Mr.","Spongebob","SquarePants","III");
console.log(fullname);