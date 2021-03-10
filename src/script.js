import {toggleVinnytsia,toggleParis,toggleLondon,city} from "./toggle.js";
import {printWeather} from "./print.js";

export let globalWeather;
export let convertedTemp;
let isConverted = false;

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

export function ChangeCity(){
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

import css from "./style.css";

buttonOne.addEventListener("click",toggleVinnytsia)
buttonTwo.addEventListener("click",toggleLondon)
buttonThree.addEventListener("click",toggleParis)
buttonFour.addEventListener("click",toggleDiv)