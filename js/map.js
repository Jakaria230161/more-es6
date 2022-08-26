// this is functional 
const numbers = [2, 4, 5, 6, 8, 9];
function getDoubles(numbers) {
    const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
    }
    return output;
}

const result = getDoubles(numbers)
console.log(result);

// this is not functional, but working same
const num = [4, 5, 6, 7];
const outResult = [];
for (const number of num) {
    const triple = number * 3; 
    outResult.push(triple);
}

console.log(outResult);


const multiply = [2, 5, 7, 9];
function getMultiply(multiply) {
    const multiplier = [];
    for (const multi of multiply) {
        const foruthMulti = multi * 4;
        multiplier.push(foruthMulti);
    }
    return multiplier;
}

const total = getMultiply(multiply);
console.log(total);


// map
const num1 = [2, 4, 5, 6, 7, 8];
const double = (num1) => num1 * 2;
const makeDouble = num1.map(double);
console.log(makeDouble);

const num2 = [3, 5, 6, 7, 8];
const tripleIt = (num2) => num2 * 3;
const directDouble = num2.map(tripleIt);
console.log(directDouble);


// this is the super magic of using map function
const numbers1 = [4, 5, 6, 7, 8, 9];
const makeMultiplier = numbers1.map(x => x * 2);
console.log(makeMultiplier);

const numbers2 = [12, 23, 45, 66, 77];
const make3 = numbers2.map(x => x * 3);
console.log(make3);

// this is the very simple version of map function
const fiveTimes = [2, 3, 5, 6, 9].map(x => x * 5);
console.log(fiveTimes);