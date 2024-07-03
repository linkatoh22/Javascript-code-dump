// eventListener = Listen for specific events to create interactive 
//                  web pages events: keydown, keyup,keypress
//                  document.addEventListener(event,callback);

//FIRST EXAMPLE

const myBox= document.getElementById("myBox");

document.addEventListener("keydown",event=>{
    myBox.textContent = ":0";
    myBox.style.backgroundColor="tomato";
})

document.addEventListener("keyup",event=>{
    myBox.textContent=":D";
    myBox.style.backgroundColor="lightblue";
})

//SECOND EXAMPLE

const moveAmount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown",(event)=>{

    
    if(event.key.startsWith("Arrow"))
        {
            event.preventDefault();
            switch (event.key)
            {
                case "ArrowUp":
                    y -= moveAmount;
                    break;
                case "ArrowDown":
                    y+= moveAmount;
                    break;
                case "ArrowLeft":
                    x-=moveAmount;
                    break;
                case "ArrowRight":
                    x+= moveAmount;
                    break;
            }
            myBox.style.top=`${y}px`;
            myBox.style.left=`${x}px`;
        }
        console.log(event.key);
});