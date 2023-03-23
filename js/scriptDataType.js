'use strit';

// To String

// 1.
console.log(typeof(String(null)));

// 2.
console.log(typeof(null + ''));

const num = 5;
console.log("www.google.com" + num);

const fontSize = 26 + 'px';


// To Number

// 1.
console.log(typeof(Number('4')));

// 2.
console.log(typeof(+'5'));

// 3.
console.log(typeof(parseInt('15px', 10)));


// let answ = +prompt('hello', '');


// To boolean

// 0, '', null, underfined, NaN // flase

// 1.
let switcher = null;
if (switcher) {
  console.log('---'); // fasle = not working
}

switcher = 1;
if (switcher) {
  console.log('++++'); // true = working
}

// 2.
console.log(typeof(Boolean('4')));

// 3.
console.log(typeof(!!'4444'));
