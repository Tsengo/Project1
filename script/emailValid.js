// Submit form
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.getElementById('subForm')
const emailInput = document.getElementById('subInput');
const subscribeButton = document.getElementById('subscribe');

const regIsFalse = function () {
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error')
    } else {
        emailInput.value = '';
        emailInput.classList.remove('error')
    }
    emailInput.placeholder = 'Enter your email';
}
subscribeButton.addEventListener('mouseup', (e) => {
    regIsFalse();
});
subscribeButton.addEventListener('mousedown', e => {
    e.preventDefault();
    emailInput.classList.remove('error');
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    regIsFalse()
    window.history.replaceState({}, document.title, window.location.pathname);
})