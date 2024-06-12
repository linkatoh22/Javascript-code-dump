const pi=3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick=function(){

    radius = document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("myResult").textContent=circumference + " cm";
}