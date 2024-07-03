// --EXAMPLE 1 <h1> ---

//STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");

//STEP 2 ADD ATRIBUTES/PROPERTIES
newH1.textContent = "I like pizza";
newH1.id="myH1";
newH1.style.color = "tomato";
newH1.style.textAlign="center";

newH2.textContent = "I like strawberry milk";
newH2.id="myH1";
newH2.style.color = "pink";
newH2.style.textAlign="center";

//STEP 3 APPEND ELEMENT TO DOM


document.body.append(newH1);
document.body.prepend(newH1); //HIỆN Ở ĐẦU
document.getElementById("box3").append(newH1);

//document.getElementById("box2").prepend(newH1);
const box2=document.getElementById("box2");
document.body.insertBefore(newH1,box2); //INSERT newH1 element before box2

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[2]);

//REMOVE HTML ELEMENT
document.body.removeChild(newH1); //REMOVE ELEMENTS

//BUT H2 DONT WORK
document.getElementById("box1").append(newH2);
//document.body.removeChild(newH2); DONT WORK
document.getElementById("box1").removeChild(newH2);


