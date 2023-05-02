// Function for creating a new Clips
export const createHtmlContent = function(element, mother) {
    const clipService = `
    <div class="some-content flex-column" data-id="${element.id}">
        <div class="img-div">
            <img src="./images/${element.image}"  alt="clip image" class="image-style">
        </div>
        <h2>${element.headOfClip}</h2>
        <p>${element.content}</p>
    </div>`;
    mother.insertAdjacentHTML('beforeend', clipService);
};