function StudentConstructor(name, age, skills, hasInternship){
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.hasInternship = hasInternship;
    this.checkIntershipStatus = () => this.hasInternship ? "has intern" : "no intern";

}


// student = {name: "", age: "", skills: "", hasIntership: "", checkIntershipStatus: () => {}}

let studentA = new StudentConstructor("Frank", 32, ["HTML", "Javascript", "CSS", "React"], false)

console.log(studentA)

console.log(studentA.checkIntershipStatus())

class Students {
    constructor(name, age, skills, hasInternship){
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.hasInternship = hasInternship;
    }
    checking(){
        return this.hasInternship ? `${this.name} has an intern with the skills: ${this.skills} with height ${this.height}` : `${this.name} has no intern with the age of ${this.age}`;
    }
} 

let StudentB = new Students("Banana", 67, ["Python", "Java", "C", "C+"], true)

const studentData = ["Banana", 67, ["Python", "Java", "C", "C+"], true];
const studentBAgain = new Students(...studentData);

StudentB.height = 188;
console.log(StudentB)
console.log(StudentB.checking())


class TipsClass {
    constructor(total, percent){
        this.total = total;
        this.percent = percent;
    }
    tipCalculate(){
        return this.total * this.percent / 100
    }
}


let firstCustomer = new TipsClass(356, 10)

console.log(firstCustomer.tipCalculate())