'use strict';

const inputUan = document.querySelector('#uan'),
      inputUsd = document.querySelector('#usd');

inputUan.addEventListener('change', () => {
    const request = new XMLHttpRequest;

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; chartset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUan.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Error';
        }
    });

    // status
    // statusText
    // response
    // readyState


}); 