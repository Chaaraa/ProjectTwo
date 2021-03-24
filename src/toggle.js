import{ChangeCity} from "./script.js";

export let city;  // false = farengate, true = Celseum
export function toggleLondon(){
    city = 'london';
    ChangeCity()
}
export function toggleParis(){
    city = 'paris';
    ChangeCity()
}
export function toggleVinnytsia(){
    city = 'vinnytsia';
    ChangeCity()
}