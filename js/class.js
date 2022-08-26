
/* 1,class : syntactic sugar
2, class name will be first letter capital
*/

class Instructor {
    name;
    designation = "Web Course Instructor";
    team = "web team";
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please creatae quiz for module ${module}`);
    }
}

const jakaria = new Instructor("jakaria", "Kushtia");
jakaria.startSupportSession("9.00");
jakaria.createQuiz(60);
console.log(jakaria);