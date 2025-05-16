import "./style.css"
import { grabUserCitySearchInput } from './input-handler.js'
import { callVisualCrossingAPI } from "./visualcrossingapi.js";
import { insertWeatherData } from "./render-DOM.js";

let currentUserCitySearch;
let userSearchResultsObject; 

async function waitForUserInputAndCallAPI() {
    while (true){
        const APICallResults = await grabUserCitySearchInput(); 
        
        console.log(APICallResults);

        insertWeatherData(APICallResults); 
    }
}

function main(){

    waitForUserInputAndCallAPI()
    

}


main();
