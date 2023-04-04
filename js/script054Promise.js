'use strict';

// console.log('Text....');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Pre Text...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         }
    
//         resolve(product);
//     }, 2000); 
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('error')
// }).finally(() => {
//     console.log('finaly')
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

// test(1000),then(() => console.log('1000'));
// test(2000),then(() => console.log('2000'));

// after all promises
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

// after first promise
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('first');
});


