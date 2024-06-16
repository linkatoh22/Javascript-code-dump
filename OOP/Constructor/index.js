//CONSTRUCTOR FOR OBJECT

function Car (make,model,year,color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.colorCar = function () {console.log(`Color of the car is ${this.color}`)}
}

const car1 = new Car ("Ford","Mustang",2024,"red");
const car2 = new Car ("Chevrolet","Camaro",2025,"blue");

console.log(car1.make);
console.log(car1.model);
car1.colorCar();

console.log(car2.make);
console.log(car2.color);
car2.colorCar();