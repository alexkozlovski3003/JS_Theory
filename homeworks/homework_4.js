//1
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPriceWithDiscount(discount) {
        return this.price - (this.price * discount / 100);
    }
}
const telephone = new Product('Telephonbe', 50000);
const labtop = new Product('Labtop', 120000);

console.log(telephone.name);
console.log(labtop.name);
console.log(telephone.getPriceWithDiscount(15));
console.log(labtop.getPriceWithDiscount(15));

//2
class Customer {

    #customerID;

    constructor(name) {
        this.name = name;

        this.#customerID = Math.floor(Math.random() * 100);
    }

    getCustomerInfo() {
        return `Customer: ${this.name}, ID: ${this.#customerID}`
    }
}

const alex = new Customer('Alex');

console.log(alex.getCustomerInfo());

//3
class Shape {
    getArea() {
        return 'This is figure\'s area'
    }
}

class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

//4
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, I'm ${this.name}`
    }
}

class Admin extends User {

    constructor(name) {
        super(name);
    }
}

//5
class BankAccount {

    constructor(balance) {
        this._balance = balance;
    }
}

class SavingAccount extends BankAccount {

    constructor(balance) {
        super(balance);
    }

    addInterestRate(rate) {
        this._balance += this._balance * (rate / 100);
    }
}

class Order {

    #products;
    constructor() {
        this.#products = []
    }

    addProduct(product) {
        this.#products.push(product);
    }

    getTotalPrice() {
        return this.#products.reduce((sum, p) => sum + p.price, 0)
    }
}