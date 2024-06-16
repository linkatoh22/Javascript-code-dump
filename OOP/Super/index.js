
//SUPER DÙNG ĐỂ GỌI HÀM KHỞI TẠO VÀ HÀM CỦA LỚP CHA
class Animal {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed} m/s`)
    }
}
class Rabbit extends Animal{
    constructor (name,age,hoopSpeed){
        super(name,age);
        this.hoopSpeed = hoopSpeed;
    }
    hoop()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.hoopSpeed);
    }
}
class Fish extends Animal{
    constructor (name, age,swimSpeed)
    {
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor (name, age, flySpeed)
    {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}
//ERROR
const rabbit = new Rabbit("Tokki",1,25);
const fish = new Fish("Bob",4,25);
const hawk = new Hawk("Jim",3,55); 

console.log(rabbit.name + " " +rabbit.age + " "+rabbit.hoopSpeed);
console.log(fish.name + " " +fish.age + " "+fish.swimSpeed);
console.log(hawk.name + " " +hawk.age + " "+hawk.flySpeed);

rabbit.hoop(); 
fish.swim();
hawk.fly();