const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//Callback function that takes two numbers and a callback operation
const calculate = (a, b, operation) => {
    return operation(a, b);
};

// Using the calculate function with different callbacks
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15

add(10, 20); // 30
multiply(10, 20); // 200


console.log(calculate(10, 20, (a,b) => a - b)) 

// setInterval(() => {
//     console.log('Interval executed');
// }, 1000);

setTimeout(() => {
    console.log('Timeout executed');
}, 1000); 