'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// Old version
// btn.onclick = function() {
//     alert('click');
// };
// btn.onclick = function() {
//     alert('second click');
// }

// Modern version
// btn.addEventListener('click', (e) => {
//     console.log('click');
// });
// btn.addEventListener('click', (e) => {
//     console.log('second click')
// });
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
// });

const deleteBtn = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteBtn);
    // }
};  
// btn.addEventListener('click', deleteBtn);
// overlay.addEventListener('click', deleteBtn);

btns.forEach(item=> {
    item.addEventListener('click', deleteBtn, {once: true});
});


const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});