'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Surname';

    say() {
        console.log(`User's name ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('error');
        }
        
    }

}

const alex = new User('Alex', 23);
console.log(alex.name);
console.log(alex.surname);
console.log(alex.age);

alex.say();

