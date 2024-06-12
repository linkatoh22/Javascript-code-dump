const fullName="To Khanh Linh";

//let firstName = fullName.slice(0,2);
//let lastName= fullName.slice(9,13);

let firstChar= fullName.slice(0,1);//FRIST CHARACTER;
let lastChar=fullName.slice(-3); //THREE LAST CHARACTER

let firstName= fullName.slice(0,fullName.indexOf(" "));
let lastName=fullName.slice(fullName.indexOf(" ")+1); //GIVE EVERY CHARACTER COMES AFTER THE WHITESPACE
console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);


const email="Vro1@gmail.com";
let username= email.slice(0,email.indexOf("@"));
let extenstion = email.slice (email.indexOf("@"));
console.log(username);
console.log(extenstion);