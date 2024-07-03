// NodeList = Static collection of HTML elements by (id, class, elements)
//            Can be created by using querySelectorAll
//            Similar to an array, but no (map,filter,reduce)
//            Nodelist won't update to automatically reflect changes
let buttons = document.querySelectorAll(".myButton");


//ADD HTML/CSS PROPERTIES


buttons.forEach(button =>{
    button.style.backgroundColor="lightgreen";
    button.textContent +=" Hehe"
})

//CLICK event listener
/*
buttons.forEach(button =>{
    button.addEventListener("click",even=>{
        event.target.style.backgroundColor="tomato"
    });
});*/

//MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=> {
        event.target.style.backgroundColor="yellow";
    });

    //KO ĐC ĐỂ CHUNG NTN
    /*
    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor="lightgreen";
    });*/
    
    
})
buttons.forEach(button=>{
    
    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor="lightgreen";
    });
})

//ADD AN ELEMENT

const newButton = document.createElement("button");
//STEP 2 
newButton.textContent = "Button 5"; 
newButton.classList = "myButton";

//STEP 3
document.body.appendChild(newButton);

console.log(buttons);

//REMOVE AN ELEMENT

buttons.forEach(button =>{
    button.addEventListener("click",event =>{
        event.target.remove();
        //THE REMOVED BUTTONS IS STILL IN THE LIST
        buttons = document.querySelectorAll(".myButton"); //HAVE TO RESET AGAIN
        console.log(buttons); 
    });
});