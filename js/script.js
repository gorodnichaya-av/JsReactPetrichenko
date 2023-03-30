'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}
log('aa', 'bb', 'rest', 'rest2');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3);
