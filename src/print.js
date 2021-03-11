import {globalWeather,convertedTemp} from "./script.js";


export function printWeather() {
    let nameElement = document.getElementById('nameEl')
    nameElement.innerText = globalWeather[0].name;

    let humElement = document.getElementById('humEl')
    humElement.innerText = globalWeather[0].humidity;

    let timeElement = document.getElementById('timeEl')
    timeElement.innerText = globalWeather[0].timezone;

    let tempElement = document.getElementById('tempEl')
    tempElement.innerText = convertedTemp;

}