
/*
1,var let const
2,break up with var
*/

const numbers = [34, 56, 78];

let salary = 450;
salary = 566;

// default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// template string
const element = `
<div>
    <h3>Name : </h3>
    <p>Address</p>
    <p>Salary : ${calculateSalary(10000, 0, 0)}</p>
    <p>Others : ${numbers[2]}</p>
</div>
`;

// arrow function
const doubleIt = x => x * 2;

const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread
const ages = [12, 34, 45, 55, 77, 8];
const newAges =[...ages];
console.log(newAges);
console.log(ages);

// destructuring 
const { x, y, age, ...z} = { x: 45, y: 50, name: "jakaria", age: 24, salary: 80000 };
console.log(x);
console.log(y);
console.log(z);
console.log(age);

const [a, b, c, d, e, f] = [12, 34, 45, 55, 88, 99];
console.log(a,f);
