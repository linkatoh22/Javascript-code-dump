//DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// ---firstElementChild---

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "purple";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement=>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor="pink";
})

// ---lastElementChild---


const lastChild = element.lastElementChild;
lastChild.style.backgroundColor="lightgreen";

ulElements.forEach(ulElement=>{
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor="lightgreen";
})

//--nextElementChild--
const element_fruits = document.getElementById("cake");
const nextSiblingFruits = element_fruits.nextElementSibling;
nextSiblingFruits.style.backgroundColor="orange";

const element_topic = document.getElementById("fruits");
const nextSiblingTopic = element_topic.nextElementSibling;
nextSiblingTopic.style.backgroundColor="orange";

// --previousElementSibling
const element_prev = document.getElementById("orange");
const prevSibling = element_prev.previousElementSibling;
prevSibling.style.backgroundColor="blue";

const prevTopic = element_topic.previousElementSibling;
prevTopic.style.backgroundColor="black";

//  --parentElement--
const element_parent = document.getElementById("apple");
const parent = element_parent.parentElement;
parent.style.backgroundColor="yellow";

//  --children--
const element_children = document.getElementById("fruits");
const children = element_children.children;
children[1].style.backgroundColor = "orange";
Array.from(children).forEach(child =>{
    child.style.backgroundColor = "black";
})
