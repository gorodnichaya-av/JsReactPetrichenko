'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.userAge = age;
    }

    say() {
        console.log(`User's name ${this.name}, age ${this.userAge}`);
    }

    getAge() {
        return this.userAge;
    }

    setAge(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this.userAge = age;
        } else {
            console.log('error');
        }
        
    }

}

const alex = new User('Alex', 23);
console.log(alex.name);
console.log(alex.getAge());

alex.setAge(30);
alex.setAge(300);

console.log(alex.getAge());

alex.say();

