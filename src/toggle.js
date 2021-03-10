import{ChangeCity} from "./script.js";

export let city = 'Vinnytsia';
                                                         // false = farengate, true = Celseum
export function toggleLondon(){
    city = 'London';
    ChangeCity()
}
export function toggleParis(){
    city = 'Paris';
    ChangeCity()
}
export function toggleVinnytsia(){
    city = 'Vinnytsia';
    ChangeCity()
}