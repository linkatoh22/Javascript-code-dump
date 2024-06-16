class Rectangle
{
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
    }
    set width (newWidth)
    {
        if(newWidth > 0)
            {
                this._width = newWidth;
            }
        else
        {
            console.error("Width must be a positive number");
        }
    }
    set height (newHeight){
        if(newHeight > 0)
            {
                this._height = newHeight;
            }
        else{
            console.error("Height must be a positive number");
        }

    }
    get width()
    {
        return this._width.toFixed(1);
    }
    get height()
    {
        return `${this._height.toFixed(1)} cm`;
    }
    get area()
    {
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(4,5);
console.log(rectangle.width);
console.log(rectangle.height);

rectangle.width = 6;
rectangle.height = 4;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
//SECOND EXAMPLE
class Person
{
    constructor(NewfirstName,NewlastName,Newage)
    {
        this.firstName=NewfirstName;
        this.lastName=NewlastName;
        this.age=Newage;
    }
    set firstName(NewfirstName)
    {
        if(typeof NewfirstName === "string" && NewfirstName.length >0){
        this._firstName = NewfirstName;
        }
        else
        {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(NewlastName){
        if (typeof NewlastName ==="string" && NewlastName.length>0){
        this._lastName = NewlastName;
        }
        else{
            console.error("Last name must be a non-empty string")
        }
    }
    set age(Newage){
        if(typeof Newage === "number" &&Newage>=0)
            {
                this._age=Newage;
            }
        else{
            console.error("Age must be a non-empty integer");
        }
    }
    get firstName()
    {
        return this._firstName;
    }
    get lastName()
    {
        return this._lastName;
    }
    get age ()
    {
        return this._age;
    }
    gather()
    {
        return this._firstName+" "+this._lastName+" "+this._age;
    }
}
const person = new Person("Cheese","Pizza",20);

fullname=person.gather();
console.log(person.gather());
