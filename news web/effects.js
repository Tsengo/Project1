'use strict';
export const url = 'http://localhost'
const menu = document.querySelectorAll('.menu');
const actMenu = document.querySelectorAll('.right--side--menu');
const popNews = document.querySelector('.popup__news');
const overlay = document.querySelector('.overlay');


const clickHandler = function (link, mother, classHtml) {
    mother.forEach(element => {
        element.classList.remove(`${classHtml}`);
    });
    link.classList.add(`${classHtml}`);
};
// export function __openPop__ (element, parent, child) {
//     popNews.style.display = 'flex';
//     popNews.appendChild(element);
//     overlay.classList.remove('hidden')
//     console.log(parent);
//     parent = element.parentElement;
//     child = element;
// }
// export function __closePop__(parents, childs) {
//     parents.appendChild(childs);
//     popNews.style.display = 'none';
//     overlay.classList.add('hidden');
// }


menu.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        clickHandler(e.currentTarget, menu, 'active');
    });
});

actMenu.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        clickHandler(e.currentTarget, actMenu, 'act');
    });
});

