import "./style.css"
import { grabUserCitySearchInput } from './input-handler.js'

console.log(grabUserCitySearchInput());

async function grabUserinput(){
    let answer = await grabUserCitySearchInput();
    console.log(answer); 
}

