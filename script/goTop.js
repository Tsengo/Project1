'use strict';

const goTop = document.querySelector('#goTop');
let reachDirection = false;

window.addEventListener('scroll', (e) => {
    const elementPosition = numberIncreaser.getBoundingClientRect();
    elementPosition.top <= 1400 && !reachDirection ?
        goTop.classList.add('appear') :
        goTop.classList.remove('appear')
});
goTop.addEventListener('click', (e) => {
    document.documentElement.scrollTop = 0;
});