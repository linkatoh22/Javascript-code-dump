//static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the 
//          objects)

class MathUtil
{
    static PI = 3.14159; 
    static getDiameter (radius)
    {
        return radius *2;
    } 
    static getCircumference(radius)
    {
        return 2*this.PI*radius;
    } 
    static getArea (radius)
    {
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI); //WITH STATIC PRINT PI RIGHT AWAY
console.log(MathUtil.getDiameter(10)); //STATIC FUCNTION
console.log(MathUtil.getCircumference(2));
console.log(MathUtil.getArea(2));

const MathUtil_1 = new MathUtil (); //DONT NEED TO DO THIS
console.log(MathUtil_1.PI); //TO PRINT THIS 


//SECOND EXAMPLE

class User {
    static userCount = 0 ;
    constructor (username)
    {
        this.username=username;
        User.userCount++;
    }
    static getUserCount()
    {
        console.log(`There are ${User.userCount} users on the system`);
    }
    sayHello()
    {
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("SpongeBob");
const user2 = new User ("Squarepants");
const user3 = new User ("Sandy");
console.log(User.userCount);
user3.sayHello();
User.getUserCount();
