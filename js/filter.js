// filter condition fulfill korlei output dibe
const numbers = [2, 3, 4, 6, 7, 8, 10, 23, 45, 55, 56];
const bigNumbers = numbers.filter(number => number > 50);
const tinyNumbers = numbers.filter(number => number < 20);
const even = numbers.filter(number => number % 2 === 0);
const odd = numbers.filter(number => number % 2 === 1);

// find - condition fil korar por prothom jeta pabe oita diye dibe r filter sobgula diye dey.
const fives = numbers.find(numbers => numbers % 3 === 0);
console.log(fives);


console.log(bigNumbers);
console.log(tinyNumbers);
console.log(even);
console.log(odd);


const products = [
    { id: 1, name: "Mobile", price: 150000 },
    { id: 2, name: "Laptop", price: 250000 },
    { id: 3, name: "Watch", price: 50000 },
    { id: 4, name: "Tablet", price: 90000 }
];

const expensive = products.filter(products => products.price > 50000);
const lowest = products.filter(products => products.price < 80000);


console.log(expensive);
console.log(lowest);

