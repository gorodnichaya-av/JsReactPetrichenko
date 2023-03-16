'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 124,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('test')
  }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(border);

console.log(Object.keys(options).length);

/*let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`some text ${i} some text ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`some text ${options[key]}`);
    counter++;
  }
}*/