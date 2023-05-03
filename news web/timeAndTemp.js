'use strict';
// /////////////////////////////////////  Get timezone and temperature

const dataTime = document.querySelector('.data--time');
const temperature = document.querySelector('#temperature');

setInterval(function (e) {
    const now = new Date();
    const options = {
        timezone: 'UTC',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        year: 'numeric',
        month: 'long',
        weekday: 'long'
    };
const newDate = String(new Intl.DateTimeFormat(navigator.language, options).format(now)).replace('at', ' ').replaceAll(',', ' / ');
dataTime.textContent = newDate;
}, 1000);



const __twoDig__ = function (time) {
    return time < 10 ? '0'+time : time;
};

const method = {
    methods: 'GET',
}
function weather() {
    temperature.innerHTML = '';
    // get ISO string time ti fund current date and time
    setInterval(function (e) {
        const newDateTime = new Date();
        const year = newDateTime.getFullYear();
        const month = newDateTime.getMonth() + 1;
        const day = newDateTime.getDate();
        const hour = newDateTime.getHours();
        const timeString = `${year}-${__twoDig__(month)}-${__twoDig__(day)}T${__twoDig__(hour)}:00`;
        if (navigator.geolocation) {
                
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, method)
                    .then(req => req.json())
                    .then(function (response) {
                        // console.log(response);
                        if (response.hourly.time.includes(timeString)) {
                            const tempTxt = `${response.hourly.temperature_2m[response.hourly.time.indexOf(timeString)]}${response.hourly_units.temperature_2m}`;
                            temperature.textContent = tempTxt;
                        };
                    }); 
            });   
        } else {    
            console.log("Geolocation is not supported by this browser.");    
        };
    }, 1000);
};
weather();
