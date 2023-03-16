'use strict';

const arr = [1,2,3,4,5];
arr.sort(compareNum); // sorting number

function compareNum(a, b) {
  return a - b;
}
arr[99] = 0;
console.log(arr);

arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} inside ${arr}`);
});

arr.pop();
arr.push(10);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

const str = prompt('', '');
const products = str.split(', ');
products.sort(); //sorting text
console.log(products.join('; '));