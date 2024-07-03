// eventListener = Listen for specific events to create interactive 
//                 web page events: click, mouseover, mouseout
//                  .addEventListener (even, callback);

const myBox= document.getElementById("myBox");
const myButton= document.getElementById("myButton");

myBox.addEventListener("click", (event)=>
{
    event.target.style.background="tomato"
    event.target.textContent="OUCH :(";
});

myBox.addEventListener("mouseover", (event)=>
{
    event.target.style.backgroundColor="yellow"
    event.target.textContent="DONT DO IT :0";
});

myBox.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent="Click Me :)";
})

