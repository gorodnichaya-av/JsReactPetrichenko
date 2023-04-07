'use strict';

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.background = 'orange';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.background = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.background = 'orange';
    }
});

const persone = {
    name: 'Alex',
    age: 23
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));