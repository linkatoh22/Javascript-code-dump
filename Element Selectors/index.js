//element selectors = Mehthods used to target and manipulate HTML elements
//                    They allows you to selectt onr or multiple HTML elements
//                      from the DOM (Docyment Object Model)

//1. document.getElementsById()     //ELEMENT OR NULL




const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); //<id id="my-heading" style="background-color: yellow; text-align: center;">Food R Us</id>


//2. document.getElementsClassName() //HTML COLLECTION

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red"
fruits[1].style.backgroundColor = "orange"
fruits[2].style.backgroundColor = "yellow"

for(let fruit of fruits)
    {
        fruit.style.backgroundColor="yellow";
    }

//fruits.forEach() ERROR we cant use that
Array.from(fruits).forEach(fruit=>{
    fruit.style.backgroundColor="red";
}); //TYPE CAST fruits to array


//3. document.getElementsByTagName() //HTML COLLECTION

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
h4Elements[1].style.backgroundColor="yellow";
for(let h4Element of h4Elements)
    {
        h4Element.style.backgroundColor="yellow";
    }

for (let liElement of liElements)
    {
        liElement.style.backgroundColor="lightgreen";
    }

//4. document.querySelector()        //SELECT FIRST ELEMENT OR NULL
const element = document.querySelector("li");

element.style.backgroundColor = "purple";

//5. document.querySelectorAll()     //NODELIST

const fruit = document.querySelectorAll(".fruits");

fruit[0].style.backgroundColor = "pink";

const foods = document.querySelectorAll("li");

//foods[2].style.backgroundColor = "pink";
foods.forEach(food =>{
    food.style.backgroundColor="blue";
});