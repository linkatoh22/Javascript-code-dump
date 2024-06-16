class Animal
{
    alive = true ; 
    eat ()
    {
        console.log(`This ${this.name} is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal
{
    name = "rabbit";
    hoop()
    {
        console.log(`This ${name} is hooping`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim()
    {
        console.log(`This ${name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";
    fly()
    {
        console.log(`This ${name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.sleep();
fish.sleep();