'use strict';

// filter

const names = ['Alex', 'Ann', 'Mary', 'Bogdan'];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});
console.log(shortNames);


// map

let  answers = ['Alex', 'AnN', 'MAry'];
answers = answers.map(item => item.toLocaleLowerCase());
console.log(answers);


// every/some

const some = [4, 'hjhj', '121212'];
console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));


// reduce 

const arr = [1, 3, 5, 6, 2, 7],
      fruits = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const resF = fruits.reduce((sum, current) => `${sum}, ${current}`);
console.log(resF);

const obj = {
    alex: 'persone',
    mary: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)     // object to array
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
