
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#place-of-slider');
const priceTxt = document.querySelector('#price');
const travelCountry = document.querySelector('#travelCountry');
const smallTxt = document.querySelector('#smallTxt');
const arrow = document.querySelector('#arrow');

// Create array of images
const arrayOfSlider = [
    {
        image: 'Elafonisi-Beach-Crete-Greece.png',
        price: 'From $199/Person',
        travelCountry: 'Discover Greece',
        smallTxt: 'Travel With Unique Experience'
    },
    {
        image: 'Exploring Breathtakingly Beautiful Spots in Greece.png', price: 'From $199/Person',
        travelCountry: 'Discover Greece',
        smallTxt: 'Travel With Unique Experience'
    },
    {
        image: 'Ikaria-Evdilos-min-880x660.jpg',
        price: 'From $199/Person',
        travelCountry: 'Discover Greece',
        smallTxt: 'Travel With Unique Experience'
    },
    {
        image: 'things-to-do-in-crete.png',
        price: 'From $199/Person',
        travelCountry: 'Discover Greece',
        smallTxt: 'Travel With Unique Experience'
    },
    {
        image: 'Santorini-Greece-1.jpg',
        price: 'From $199/Person',
        travelCountry: 'Discover Greece',
        smallTxt: 'Travel With Unique Experience'
    }
];

let photoIndexToShow = 0;
const img = document.createElement('img');

const photoToShow = () => {
    img.src = `./images/${arrayOfSlider[photoIndexToShow].image}`;

    priceTxt.textContent =
        `${arrayOfSlider[photoIndexToShow].price}`;
    
    travelCountry.textContent =
        `${arrayOfSlider[photoIndexToShow].travelCountry}`;
    
    smallTxt.textContent =
        `${arrayOfSlider[photoIndexToShow].smallTxt}`;
    
    slider.innerHTML = '';
    slider.appendChild(img);
};
photoToShow();

const nextSlide = () => {
    photoIndexToShow++;
    photoIndexToShow === arrayOfSlider.length ? photoIndexToShow = 0 : photoToShow();
};

const previousSlide = () => {
    photoIndexToShow--;
    photoIndexToShow < 0 ? photoIndexToShow = arrayOfSlider.length - 1 : photoToShow();
};

// Next slide every 3 sec
let interval = setInterval(nextSlide, 3000);

// Pause interval when hover slider
arrow.addEventListener('mouseover', () => {
    clearInterval(interval);
});

// Resume interval when hover end 
arrow.addEventListener('mouseout', (e) => {
    e.preventDefault();
    interval = setInterval(nextSlide, 3000);
});

// When click left button show previous photo
left.addEventListener('click', previousSlide);

// When click right button show next photo
right.addEventListener('click', nextSlide);

// Hot service side 
const wrapService = document.querySelector('#wrap-service');

// Create array of clips 
const arrayOfClip = [
    {
        image: 'Rectangle 4.png',
        headOfClip: 'Flight Booking',
        id: 1,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        image: 'Rectangle 4 copy.png',
        headOfClip: 'HOTEL & RESORT BOOKING',
        id: 2,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        image: 'Rectangle 4 copy 2.png',
        headOfClip: 'FAMILY TRIP PLANNER',
        id: 3,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        image: 'vidar-nordli-mathise.png',
        headOfClip: 'CRUISE TOUR',
        id: 4,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        image: 'robson-hatsukami-mor.png',
        headOfClip: 'FIRE CAMP',
        id: 5,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        image: 'Rectangle 4 copy 2 (1).png',
        headOfClip: 'CORPORATE HOLIDAYS',
        id: 6,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
];

import { createHtmlContent } from "./forClips.js";
// Add element to the parent
arrayOfClip.forEach(el => {
    createHtmlContent(el, wrapService);
});

// PopUp side
// Variables of some-content element
const pop = document.querySelector('.pop');
const popup = document.querySelector('#popup');
const popContent = document.querySelector('#popContent');
const closePop = document.querySelector('#closePop');
const linkContent = document.querySelectorAll('.some-content');
const overlay = document.querySelector('#overlay');

export const __closeModal__ = function () {
    pop.classList.add('deactive');
    overlay.classList.remove('active');
    popContent.textContent = '';
}

export const __openModal__ = function (currentElement) { 
    popContent.insertAdjacentElement('afterbegin', currentElement);
    overlay.classList.add('active');
    popup.classList.remove('deactive');
}

for (let i = 0; i < linkContent.length; i++) {
    linkContent[i].addEventListener('click', e => {
        let clone = e.currentTarget.cloneNode(true);
        __openModal__(clone);
    });
};

overlay.addEventListener('click', __closeModal__)
closePop.addEventListener('click', __closeModal__);

// Numbers increaser
const arrayOfNumbers = [
    {
        logo: 'Layer 1.png',
        number: 120859,
        text: 'HAPPY TRAVELERS',
        id: '1'
    },
    {
        logo: 'Layer 1 (1).png',
        number: 2594,
        text: 'SATISFIED TOURS',
        id: '2'
    },
    {
        logo: 'Layer 1 (2).png',
        number: 854,
        text: 'DESTINATION',
        id: '3'
    },
    {
        logo: 'Rounded Rectangle 1 .png',
        number: 978,
        text: 'HOTELS & RESORTS',
        id: '4'
    },
];

import { increaseNumber} from "./autoIncrement.js";

const numberIncreaser = document.querySelector('#numberIncreaser');
let reachDirection = false;

window.addEventListener('scroll', function () {
    const elementPosition = numberIncreaser.getBoundingClientRect();
    if ((elementPosition.bottom >= window.innerHeight || elementPosition.top <= window.innerHeight) && !reachDirection) {
        arrayOfNumbers.forEach(function (e) {
            let elements = `
            <div class="inc-logoNum flex-column">
                <img src="./images/${e.logo}" id="numberImg">
                <p id="numbers-${e.id}" class="number">${e.number}</p>
                <p id="content" class="num-content">${e.text}</p>
            <div>`;
            numberIncreaser.insertAdjacentHTML('afterbegin', elements)
            increaseNumber(e);
        });
        reachDirection = true;
    }
});


// Popular Tour Package
const tours = document.querySelector('#tours');

const arrOfTourPackage = [
    {
        img: 'blue beauty of greece.png',
        price: '$299/person',
        tourName: 'Blue Beauty of Greece',
        days: '5 Days / 6 Night',
        content: 'Honeymoon'
    },
    {
        img: 'nature future.jpg',
        price: '$178/person',
        tourName: 'Nature of Phuket',
        days: '3 Days / 4 Night',
        content: 'Holiday'
    },
    {
        img: 'oo paris.jpg',
        price: '$1111/person',
        tourName: 'World Tour of Paris',
        days: '7 Days / 8 Night',
        content: 'Holiday'
    },
];

arrOfTourPackage.map(element => {
    let tourNameHtml = `
        <div class="tour-types flex-column">
            <div class="tour-content">${element.content}</div>
            <img class="tour-image" src="./images/${element.img}">
            <p class="tour-price">${element.price}</p>
            <h2>${element.tourName}</h2>
            <p class="tour-days">${element.days}</p>
        </div>`;
    tours.insertAdjacentHTML('beforeend', tourNameHtml);
});

// PPl Thoughts
const arrOfComment = [
    {
        img: './woman.png',
        name: 'Ribeca Singh',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        imgComment: './Forma 1.png'
    },
    {
        img: './avatar.png',
        name: 'Jimmy dean',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        imgComment: './Forma 1.png'
    },
    {
        img: './avatar.png',
        name: 'Theodule Terer',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        imgComment: './Forma 1.png'
    },
];

const pplComment = document.querySelector('#pplComment')

arrOfComment.forEach(element => {
    let comments = `
        <div class="ppl--comment flex-column">
            <img class="ppl--pic" src="./images/${element.img}">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <img src="./images/${element.imgComment}">
        </div>`;
    pplComment.insertAdjacentHTML('beforeend', comments);
});

const arrDestination = [
    {
        countryImg: 'thailand.jpg',
        countryName: 'Thailand',
        price: '$900 - $1900'
    },
    {
        countryImg: 'italy.jpg',
        countryName: 'Italy',
        price: '$700 - $2000'
    },
    {
        countryImg: 'indonesia.jpg',
        countryName: 'Indonesia',
        price: '$300 - $1100'
    },
    {
        countryImg: 'singapore.jpg',
        countryName: 'Singapore',
        price: '$1900 - $2700'
    },
]

const countryDiv = document.querySelector('.country--wrap')

arrDestination.forEach(element => {
    let countries = document.createElement('div');
    countries.setAttribute('class', 'country-wrap flex-row');
    countries.style.backgroundImage = `url(./images/${element.countryImg})`;
    let countryPriceName = `
    <div class="blur"></div>
    <div class="country-details flex-row">
        <div class="country-name-price flex-column">
            <h2>${element.countryName}</h2>
            <p>${element.price}</p>
        </div>
        <button class="country-btn"></button>
    </div>`;
    countries.insertAdjacentHTML('afterbegin', countryPriceName);
    countryDiv.appendChild(countries);
});