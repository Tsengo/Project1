// Submit form
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.getElementById('subForm');
const emailInput = document.getElementById('subInput');
const subscribeButton = document.getElementById('subscribe');
// LastForm
const lastInput = document.getElementById('lastInput')
const lastInputBtn = document.getElementById('lastBtn');
const lastForm = document.getElementById('last-form');
// Function of error Form and regexp
const regIsFalse = function (element) {
    if (!emailRegex.test(element.value)) {
        element.classList.add('error')
        lastInputBtn.classList.add('error')
    } else {
        element.value = '';
        element.classList.remove('error')
    }
    element.placeholder = 'Enter your email';
};
// Submit form function
const fromSubmitted = function (element,regElement) {
    element.addEventListener('submit', (e) => {
        e.preventDefault();
        regIsFalse(regElement)
        window.history.replaceState({}, document.title, window.location.pathname);
    });
}
// btn function submit
subscribeButton.addEventListener('mouseup', (e) => {
    regIsFalse(emailInput);
});

subscribeButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
    emailInput.classList.remove('error');
});
fromSubmitted(form, emailInput);

// Last form clicked
lastInputBtn.addEventListener('mouseup', (e) => {
    regIsFalse(lastInput);
});

lastInputBtn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    lastInput.classList.remove('error');
    lastInputBtn.classList.remove('error')
});
fromSubmitted(lastForm, lastInput);