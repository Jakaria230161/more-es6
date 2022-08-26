
class TeamMember{
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you so much your feedback`);
    }

}

class Instructor extends TeamMember {
    name;
    designation = "Web Course Instructor";
    team = "web team";
    location;
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please creatae quiz for module ${module}`);
    }
}


class Developer extends TeamMember {
    designation = "Web Course Instructor";
    team = "web team";
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
        
    }
    developerFeature(feature) {
        console.log(`please develop the feature ${feature}`);
    }
    release(version) {
        console.log(`please release the version ${version}`);
    }
}


class JobPlacement extends TeamMember {
    designation = "Job placement Commandos";
    team = "Job Placement";
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(feature) {
        console.log(`please develop the feature where can able to make a resume ${feature}`);
    }
    prepareStudent(version) {
        console.log(`please prepare all student to get a job ${version}`);
    }
}

const jakaria = new Developer("jakaria", "Kushtia", "React")
console.log(jakaria);
jakaria.provideFeedback();

const imran = new JobPlacement("imran", "america", "bangladesh")
console.log(imran);
