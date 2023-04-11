'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`User's name ${this.name}, age ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('error');
        }
        
    };

}

const alex = new User('Alex', 23);
console.log(alex.name);
console.log(alex.getAge());

alex.setAge(30);
alex.setAge(300);

console.log(alex.getAge());

alex.say();

