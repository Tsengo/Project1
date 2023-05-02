import {__openModal__} from "./script.js";
// Play Button Click Event Handler
const video = document.querySelector('.video-player');
const playButton = document.querySelector('#playButton');

playButton.addEventListener('click', () => {
    let videoClone = video.cloneNode(true);
    __openModal__(videoClone);
    videoClone.controls = true;
    videoClone.play();
});