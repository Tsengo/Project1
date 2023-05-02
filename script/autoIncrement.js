// Create auto increment functionality
export const increaseNumber = function (e) {
    let num = 0;
    let increment = Math.max(1, Math.floor(e.number / 100));
    let timer = setInterval(function () {
        num += increment;
        document.querySelector(`#numbers-${e.id}`).textContent = num.toLocaleString();
        if (num > e.number) {
            if (increment < 10) {
                num = e.number - increment;
            } else {
                num = e.number - Math.max(1, Math.floor(increment / 100));
            };
            document.querySelector(`#numbers-${e.id}`).textContent = num.toLocaleString();
            clearInterval(timer);
            if (num < e.number) {
                timer = setInterval(function () {
                    num++;
                    document.querySelector(`#numbers-${e.id}`).textContent = num.toLocaleString();
                    if (num === e.number) {
                        clearInterval(timer);
                    };
                }, 400);
            };
        };
    }, 10);
};

