'use strict';

const burger = document.getElementById('burger');

burger.addEventListener('click', e => {
    console.log('click');
    burger.classList.toggle('active-burger')
})