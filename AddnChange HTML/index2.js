//EXAMPLE

// STEP 1 CREATE THE ELEMENT

const newListItem = document.createElement("li");

//STEP 2 ADD ATRIBUTES / PROPERTIES 

newListItem.textContent = "coco";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";

//STEP 3 APPEND ELEMENT TO DOM

document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);
//document.body.append(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem,orange);

const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listItem[0]);

//REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem);