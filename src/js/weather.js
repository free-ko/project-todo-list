const API_KEY = "d355d4ab44959fde64c0ec93b58c51d7";
const COORDS = 'coords';

const div = document.querySelector(".js-weather");
const weather = div.querySelector(".js-weatherDetail");
const currentPlace = div.querySelector(".js-weatherLocation");
const currentWeather = document.querySelector(".js-currentWeather");


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            return response.json();
    })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            const curWeather = json.main;
            weather.innerText = `${Math.ceil(temperature)} ℃  `;
            currentPlace.innerText = `${place}`;
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function successCoords(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}


function errorCoords() {
    console.log("can't access geolocation!");
  }


function askForCoords(){
    navigator.geolocation.getCurrentPosition(successCoords, errorCoords); 
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
       const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();