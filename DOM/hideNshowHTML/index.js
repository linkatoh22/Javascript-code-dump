const myButton =document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click",event=>{
    if(myImg.style.display === "none")
        {
            myImg.style.visibility="visible"; //MAKE THE IMAGE visible LEAVING SPACE
            //myImg.style.display="block"; ////MAKE THE IMAGE APPEAR NOT LEAVING SPACE
            myButton.textContent = "Hide";
        }
    else{
        //myImg.style.display="none"; //MAKE THE IMAGE DISAPPEAR NOT LEAVING SPACE 
        myImg.style.visibility="hidden"; //MAKE THE IMAGE HIDDEN LEAVING SPACE
        myButton.textContent="Show";
        }
});