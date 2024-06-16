class Product {
    constructor (name,price)
    {
        this.name=name;
        this.price = price;
    }
    displayProduct ()
    {
        console.log (`Produce: ${this.name}`);
        console.log (`Price: ${this.price.toFixed(2)}$`);
    }

    calculateTotal (salesTax)
    {
        return this.price = (this.price + salesTax);
    }
}

const salesTax=0.05;
const product = new Product ("Shirt",19.99);
product.displayProduct();

const product2 = new Product ("Pants",15.00);
product2.displayProduct();

const total = product.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`)