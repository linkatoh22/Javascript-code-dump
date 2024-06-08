let myButton = document.getElementById("myButton");
let label = document.getElementById("Number");
console.log("RUN HERE1");
const min=1;
const max=6;
let numberMain;
myButton.onclick=function(){
    console.log("RUN HERE");
    numberMain=Math.floor(Math.random() * max ) + min;
    label.textContent=numberMain;
}
