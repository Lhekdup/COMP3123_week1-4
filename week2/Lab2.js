// Exercise 1

const gretter = (myArray, counter) => {
    const greetText = 'Hello';
    
    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

// Exercise 2

const capitalize = (string) => {
    const [first, ...rest] = string;
    return `${first.toUpperCase()}${rest.join('')}`;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3

const capitalize2 = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
    
    const colors = ['red', 'green', 'blue'];
    const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

// Exercise 4

var values = [1,60,34,30,20,5]
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20)

// Exercise 5

var array = [1,2,3,4]
const calculateSum = array.reduce((accumulator, value) => accumulator + value, 0);
const calculateProduct = array.reduce((accumulator, value) => accumulator * value, 1);
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

// Subclass
class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); // call parent constructor
    this.balance = balance;
  }

  info() {
    return `${this.details()}, Balance: $${this.balance}`;
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 3000);
console.log(sedan.info());