// Setup constructo to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old 


class Person {
    constructor(name= 'Anonymous', age =0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hello ' + this.name + "!";
        return `Hello, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
} 

class Student extends Person {
    constructor(name, age, major =''){
        super(name, age);
        this.major =major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.major==''){
            return description
        }
        else
        description += `, student in: ${this.major}`
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation)
        greeting += `. I'm visiting from ${this.homeLocation}`

        return greeting
    }
}

const saul = new Traveler('Saul Cañedo Castillo', 21, 'Mexicali');
const other = new Traveler()
console.log(saul.getGreeting());
console.log(other.getGreeting());