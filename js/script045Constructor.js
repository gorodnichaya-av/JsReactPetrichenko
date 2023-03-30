'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} go out`)
}

const Alex = new User('Alex', 28);
const Ivan = new User('Ivan', 13);

Alex.hello();
Ivan.hello();

Alex.exit();

console.log(Alex, Ivan);