
let globalWeather;
let convertedTemp;
let isConverted = false;  // false = farengate, true = Celseum
let city = 'Vinnytsia';



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b124ec8d5546495f87d1cfc27038a5cc`)
    .then(weather => {
        return weather.json();
    })
    .then(
        (weather) => {
            console.log(weather);
            globalWeather = weather;
            convertedTemp = weather.main.temp;
            printWeather(weather);
        }
    )

function toggleDiv() {
    if (isConverted) {
        convertedTemp = globalWeather.main.temp;
        isConverted = false;
    } else {
        convertedTemp = (((globalWeather.main.temp - 32) * 5) / 9);
        isConverted = true;
    }
    printWeather();
}


function toggleLondon(){
    city = 'London';
    ChangeCity()
}
function toggleParis(){
    city = 'Paris';
    ChangeCity()
}
function toggleVinnytsia(){
    city = 'Vinnytsia';
    ChangeCity()
}
function ChangeCity(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b124ec8d5546495f87d1cfc27038a5cc`)
        .then(weather => {
            return weather.json();
        })
        .then(
            (weather) => {
                console.log(weather);
                globalWeather = weather;
                convertedTemp = weather.main.temp;
                printWeather(weather);
            }
        )
}

function printWeather() {
    let nameElement = document.getElementById('nameEl')
    nameElement.innerText = globalWeather.name;

    let humElement = document.getElementById('humEl')
    humElement.innerText = globalWeather.main.humidity;

    let timeElement = document.getElementById('timeEl')
    timeElement.innerText = globalWeather.timezone;
    //
    let tempElement = document.getElementById('tempEl')
    tempElement.innerText = convertedTemp;

}

import css from "./style.css";

buttonOne.addEventListener("click",toggleVinnytsia)
buttonTwo.addEventListener("click",toggleLondon)
buttonThree.addEventListener("click",toggleParis)
buttonFour.addEventListener("click",toggleDiv)