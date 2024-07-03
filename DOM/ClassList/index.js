//classList = Element property in Javascript used tto interact
//            with an element's list of classes (CSS classes)
//            Allows you to make reusable classes for many elements
//            across your webpage.



const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

//SECOND EXAMPLE
//ADD ()


/* REMOVE THIS IF REVIEWED

myButton.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
})

myButton.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
})
    
REMOVE THIS IF REVIEW */




//TOGGLE the same with add () toggle(Remove if present, Add if not)


/* REMOVE THIS IF REVIEW
myButton.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout",event=>{
    event.target.classList.toggle("hover");
})
REMOVE THIS IF REVIEW*/



// REPLACE replace (oldClass,newClass)
myButton.classList.add("enabled");


/*REMOVE THIS IF REVIEW
myButton.addEventListener("click",event=>{
    event.target.classList.replace("enabled","disabled");
})
REMOVE THIS IF REVIEW*/


// contains
const myH1 = document.getElementById("myH1");
myButton.classList.add("enabled");

myH1.classList.add("enabled");

myH1.addEventListener("click",event=>{
    if(event.target.classList.contains("disabled"))
    {
            event.target.textContent+=" hihi";
    }
    else
    {
        event.target.classList.replace("enabled","disabled");
    }
})
myButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled"))
        {
            //event.target.classList.replace("disabled","enabled");
            event.target.textContent+=" hihi";
        }
    else if(event.target.classList.contains("enabled")){
        event.target.classList.replace("enabled","disabled");
    }
})

