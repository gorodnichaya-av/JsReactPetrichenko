'use sctrict';

import  calc from'./modules/calc';
import  cards from'./modules/cards';
import  forms from'./modules/forms';
import  modal from'./modules/modal';
import  slider from'./modules/slider';
import  tabs from'./modules/tabs';
import  timer from'./modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {  
    
    //SHOW MODAL in few seconds
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 100000);
    
    calc();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-04-17');
});