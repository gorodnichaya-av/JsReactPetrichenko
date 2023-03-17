'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(a, b);

const obj = {
  a: 5,
  b: 1
};
const copyArr = obj; //link to object

copyArr.a = 10;

console.log(copyArr);

console.log(obj);

/*******/

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(numbers);
console.log(newNumbers);


/*******/

const add = {
  d: 17,
  e: 20
}

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);


/********/

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = '111';
console.log(oldArray);
console.log(newArray);


const video = ['1', '22', '333'],
      blogs = ['a', 'bb', 'ccc'],
      inter = [...video, ...blogs, 'qqqqq', 'wwwww'];

console.log(inter);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

/*******/

const array = ['a', 'b'];
const newAAAA = [...array];

const q = {
  aa: 1,
  bb: 2
}
const newObj = {...q};


