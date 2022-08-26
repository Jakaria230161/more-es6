// map in numbers
const numbers = [2, 3, 5, 6, 7, 8, 9];
const half = numbers.map(numbers => numbers / 2);
console.log(half);

const third = numbers.map(x => x / 3);
console.log(third);

const double = numbers.map(x => x * 2);
console.log(double);

// map in string
const friends = ["Jakaria", "Imran", "Hridoy", "Abdullah", "Ahsan Tanim"];
const firstLetter = friends.map(friends => friends[0]);
const secondLetter = friends.map(friends => friends[1]);
const thirdLetter = friends.map(friends => friends[2]);
const fourthLetter = friends.map(friends => friends[3]);
const fifthLetter = friends.map(friends => friends[4]);
const friendsLength = friends.map(friends => friends.length);

console.log(firstLetter);
console.log(secondLetter);
console.log(thirdLetter);
console.log(fourthLetter);
console.log(fifthLetter);
console.log(friends.length);
console.log(friendsLength);


// object in map
const products = [
    { id: 1, name: "Mobile", price: 150000 },
    { id: 2, name: "Laptop", price: 250000 },
    { id: 3, name: "Watch", price: 50000 },
    { id: 4, name: "Tablet", price: 90000 }
];

// const items = products.map(products => console.log(products));
// here console log didn't return , they give undefined results

const items = products.map(products => products.name);
const prices = products.map(products => products.price);
const id = products.map(products => products.id);
console.log(items);
console.log(prices);
console.log(id);


