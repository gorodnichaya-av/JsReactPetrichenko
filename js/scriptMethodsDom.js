'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), 
      oneHeart = wrapper.querySelector('.heart'); 

box.style.backgroundColor = 'blue';
box.style.width = '250px';

const div = document.createElement('div');
// const text = document.createTextNode('Hello');

div.classList.add('black');

// wrapper.append(div);
box.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[2].replaceWith(circles[0]);

div.innerHTML = '<h3>Inner HTML</h3>';

div.insertAdjacentHTML('afterbegin', '<h2>Insert Adjacent HTML</h2>');
div.insertAdjacentHTML('beforebegin', '<h2>Insert Adjacent HTML</h2>');
div.insertAdjacentHTML('beforeend', '<h2>Insert Adjacent HTML</h2>');
div.insertAdjacentHTML('afterend', '<h2>Insert Adjacent HTML</h2>');

// div.textContent = 'Text content';

// Old methods
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[0]);
// wrapper.replaceChild(circles[0], hearts[0]);




