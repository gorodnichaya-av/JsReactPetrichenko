'use strict';

// function showThis(a, b) {
//     function sum() {
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 5,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let Alex = new User('Alex', 35);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'Ron'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));

// 1. Звичайна функція: this = window; use strict: this = undefined.
// 2. Контекст у метода об'єкту - цу сам об'єкт.
// 3. this в конструкторах та класах - це новий екземпляр об'єкту.
// 4. Ручна привязка this: call, apply, bind


// Стрілочні функції не мають свого контексту виклику, тому звертаються до батька
// Звичайний виклик функціі має доступ до this, стрілочні - ні (this = undefined)
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
});
btn.addEventListener('click', () => {
    console.log(this);
});

const objectt = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        }

        say();
    }
}
objectt.sayNumber();

const doubleFull = (a) => {
    return a*2;
}
const doubleShort = a => a*2;