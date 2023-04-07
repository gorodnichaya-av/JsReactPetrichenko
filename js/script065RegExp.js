'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f


// const ans = prompt('Your name');

// const reg = /n/; // search small letter 'n'
// const reg = /n/i; // search first any (small/big) letter 'n'
// const reg = /n/ig; // search all symbols 'n' global
// const reg = /\d/ig; // search only numbers
// console.log(reg.test('ans')); // true/false 


const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));



// \D - not number
// \W - not word

// classes:
// \d - numbers
// \w - words
// \s - space

// markers:
// i
// g
// m

// console.log(ans.search(reg)); // search letter and return its position
// console.log(ans.match(reg)); // search all letters and returns array


// const pass = prompt('Password');
// console.log(pass.replace(/./g, "*")); // replace all symbols to *
// console.log(pass.replace(/\./g, "*")); // replace '.' symbols to *


// console.log('12-12-12'.replace(/-/g, ':'));



