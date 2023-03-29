'use strict';

// const now = new Date('2023-03-29');
// const now = new Date(2023, 3, 29, 20);
// const now = new Date();

// new Date.parse('2023-03-29');

// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`working for ${end - start}`);