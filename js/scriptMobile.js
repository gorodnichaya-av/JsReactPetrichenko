'use script';

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        //console.log('touchstart');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('touchmove');
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('touchend');
    // });
});

// touches - few fingers on window
// targetTouches - fingers on window
// changedTouches - list of fingers on window