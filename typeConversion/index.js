let agePre = window.prompt("How old are you");

let ageBefore,ageAfter;

ageBefore= agePre+2;

console.log(`Your Korea age is ${ageBefore}`, typeof ageBefore);
console.log(`That is not seems right...`);
console.log(`Wait lemme fix`);

ageAfter=Number(agePre);
ageAfter+=2;

console.log(`DONE! Your Korea age is ${ageAfter}`, typeof ageAfter );


//Similarly we can converse to other types like bellow
let x="1";

x=Number(x);
console.log(x, typeof x);
x=String(x);
console.log(x, typeof x);
x=Boolean(x);
console.log(x, typeof x);

