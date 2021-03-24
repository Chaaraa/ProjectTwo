import {toggleVinnytsia,toggleParis,toggleLondon,city} from "./toggle.js";
import {printWeather} from "./print.js";

export let globalWeather;
export let convertedTemp;
let isConverted = false;

// fetch(`http://localhost:5000/${city}`)
//     .then(weather => {
//         return weather.json();
//     })
//     .then(
//         (weather) => {
//             console.log(weather);
//             globalWeather = weather;
//             convertedTemp = weather[0].temp;
//             printWeather(weather);
//         }
//     )

function toggleDiv() {
    if (isConverted) {
        convertedTemp = globalWeather[0].temp;
        isConverted = false;
    } else {
        convertedTemp = (((globalWeather[0].temp - 32) * 5) / 9);
        isConverted = true;
    }
    printWeather();
}

export function ChangeCity(){
    fetch(`http://localhost:5000/${city}`)
        .then(weather => {
            return weather.json();
        })
        .then(
            (weather) => {
                console.log(weather);
                globalWeather = weather;
                convertedTemp = weather[0].temp;
                printWeather(weather);
            }
        )
}
buttonFour.addEventListener("click",toggleDiv)
import css from "./style.css";
