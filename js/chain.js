
const users = [
    { id: 1719029, name: "jakaria", age: 24, job: "student" }
];

console.log(users);  // get total array
console.log(users[0]);  // get objects in array
console.log(users[0].id);  // get id into obj 
console.log(users[0].name); // get name from obj 
console.log(users[0].age);  // get age from obj
console.log(users[0].job);  // get job from obj

const data = {
    count: 5000,
    data: [
        { id : 1, name : "imran", job : "leader"},
        { id : 2, name : "Hridoy", job : "pati neta"},
    ]
}

const secondJob = data.data[1].job;
console.log(secondJob);

console.log(data); // get all objects
console.log(data.data);  // get data objects from the data array
console.log(data.data[0].job); // get job from the number one objects in data 
console.log(data.data[1].name);
console.log(data.data[0].name);
console.log(data.data[1].id);


const user = {
    id: 50001,
    name: "Jakaria Mahmud",
    address: {
        street: {
            first: "In front of the Islamic University",
            second: "In front of the Labratory School",
            third : "In the corner room "
        },
        profession: "student",
        city : "Dhaka"
    }
}

const userFloor = user.address.street.third;
const userHome = user.address.street.second;
const userCity = user.address.city;
console.log(userFloor);
console.log(userCity);
console.log(userHome);
console.log(user);


/*
TypeError : Cannot read properties of undefined :- that's means any properties name spelling is missing or wrong spell that's they provide this type of error.
if you didn't want to eat these error then u have to give question mark ? (optional chaining) if any value isn't given then u have to use this chining , means that question mark
*/