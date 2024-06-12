
let UserName="To Khanh Linh";

console.log(UserName.charAt(0));//String at the index

console.log(UserName.indexOf("i")); //First Appear Letter
UserName="      To Khanh Linh";
UserName=UserName.trim(); //TRIM WHITESPACE;
console.log(UserName);

console.log(UserName.toUpperCase());// Upper case;

console.log(UserName.toLowerCase()); //Lower case;

console.log(UserName.repeat(3)); //Reapeat the string 3 times

UserName=" To Khanh Linh ";
result= UserName.startsWith(" ")? "You can't begin username with whitespaces": "Username valid";
console.log(result);

result=UserName.endsWith(" ")? "You can't end username with whitespaces": "Username valid";
console.log(result);

result=UserName.includes(" ")? "YO USERNAME CAN NOT HAVE WHITESPACE":"USER NAME VALID";
console.log(result);

let phoneNumber="123-456-7890";
//Replace the first dash
phoneNumber=phoneNumber.replace("-","");
console.log(phoneNumber);
//Replace the all the dash
phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);
//Pad the string with 0 until the string 15 character long

phoneNumber=phoneNumber.padStart(15,"0");

console.log(phoneNumber);
