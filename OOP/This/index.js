//this = reference to the object where THIS is used
//      (the object depends on the immediate context)
//      person.name = this.name

const person1 = {
    name : "Spongebob",
    favFood : "Hamburgers",
    sayHello : () => {
        console.log(`Hi I'm SpongeBob. My fav foods is ${this.favFood}`) },
}
// Arrow function (hàm mũi tên) là hàm không có con trỏ this, hay 
//nói cách khác con trỏ this của hàm lúc này là con trỏ this của 
//hàm gọi nó. it point to a window object, it does have a name but dont have value
//CÓ THỂ THAY THẾ BẰNG PERSON1.FAVFOOD
const person2 = {
    name : "Spongebob",
    favFood : "Hamburgers",
    sayHello : function () {
        console.log(`Hi I'm SpongeBob. My fav foods is ${this.favFood}`) },
}

person1.sayHello(); //IN RA: Hi I'm SpongeBob. My fav foods is underfined
person2.sayHello(); //IN RA: Hi I'm SpongeBob. My fav foods is Hamburgers