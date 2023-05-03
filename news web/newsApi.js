'use strict';

// ////////////////////////////////// Get news from api

const popNews = document.querySelector('.popup__news');
const closePopup = document.querySelector('.closePop');
const firstFourItems = document.querySelector('.first--four');
const overlay = document.querySelector('.overlay');
const head__news__block = document.querySelector('.head--news--block');
const head__news__wrap = document.querySelector('.head--news--wrap');


async function fetchData() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=391537a2653b4c7ea52b3bdede12699a')
        const data = await response.json();
        const arrOfNews = [];
        const arrayOfItems = [];

        function sliceMethod(el,indexItem) {
            return el.slice(0, el.lastIndexOf(indexItem))
        }
        function createHtmlContent(insertHtmlTag,element,item,link) {
            const news = `
                    <div class="first__four__news popup__div item--${item + 1}" id="${link}">
                        <img src="${element.urlToImage}" alt="image" class="image__of__element">
                        <div class="small__info pop__small__info">
                            <p class="auth__published">${element.author ? element.author + ' - ' : ''}${sliceMethod(element.publishedAt, 'T')}</p>
                            <div class="col-rev-news">
                                <p class="article">${sliceMethod(element.content.includes('<ul>') ? element.description : element.content, '[')}
                                <a href='${element.url}' target='_blank'>
                                see more
                                </a>
                                </p>
                                <h3 class="title">${element.title}</h3>
                            </div>
                        </div>
                    </div>`;
                    insertHtmlTag.insertAdjacentHTML('afterbegin', news);
                    const some = document.querySelector(`#${link}`);
                    arrayOfItems.push(some);
        };

        data.articles.forEach(element => {
            if (element.content && element.title && element.author && element.url && element.urlToImage && element.publishedAt) {
                arrOfNews.push(element)
            };
        });

        console.log(arrOfNews);
        const firstFour = arrOfNews.slice(0, 4);

        firstFour.forEach((element, item) => {
            createHtmlContent(firstFourItems,element,item,'link');
        });
        
        const headNews = arrOfNews.slice(4, 5);
        headNews.forEach((element, item) => {
            createHtmlContent(head__news__block,element,item,'head--news--link');
        });

        console.log(arrayOfItems);
        const headNewsWrapRow = arrOfNews.slice(5, -1);
        headNewsWrapRow.forEach((element, item) => {
            createHtmlContent(head__news__wrap,element,item,'row--news--link');
        });
        let parent = '';
        let child = '';
        // let children = '';
        arrayOfItems.forEach(element => {
            element.addEventListener('click', e => {
                let clone = e.currentTarget.cloneNode(true);
                popNews.appendChild(clone);

                // parent = element.parentElement;
                // child = element;
                // console.log(parent);
                // overlay.classList.remove('hidden')
                // popNews.style.display = 'flex';
                // element = popNews.children[1];
                // console.log(element.parentElement)
            });
            closePopup.addEventListener('click', e => {
                parent.appendChild(child);
                overlay.classList.add('hidden')
                popNews.style.display = 'none';
            })
            overlay.addEventListener('click', e => {
                parent.appendChild(child);
                overlay.classList.add('hidden')
                popNews.style.display = 'none';
            })
        })
    } catch (error) {
        console.log(error);
    }
}
fetchData()
