import {globalWeather,convertedTemp} from "./script.js";


export function printWeather() {
    let nameElement = document.getElementById('nameEl')
    nameElement.innerText = globalWeather.name;

    let humElement = document.getElementById('humEl')
    humElement.innerText = globalWeather.main.humidity;

    let timeElement = document.getElementById('timeEl')
    timeElement.innerText = globalWeather.timezone;

    let tempElement = document.getElementById('tempEl')
    tempElement.innerText = convertedTemp;

}