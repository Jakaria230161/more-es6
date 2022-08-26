
// map, forEach, filter , find and reduce

// reduce : accumulator function,initial value = initial value will be 0
// accumulator function use two parameters like = previous and current

const numbers = [1, 3, 4, 5, 6, 7, 8];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const names = ["jakaria", "Imran", "Hridoy"];
const allName = names.reduce((previous, current) => previous + current, 0);
console.log(allName);



// dot notations 
const student = {
    name: "Jakaria",
    id: 17190029,
    class: "LL.B",
    marks: {
        math: 80,
        english: 99,
        bangla : 95
    }
};

const marks = student.marks.bangla;
const englishMark =student.marks.english;
console.log(marks);
console.log(englishMark);


// brackets notations

const math = student['marks']['math'];

console.log(math);

const subject = "bangla";
const banglaMark = student.marks[subject];

console.log(banglaMark);