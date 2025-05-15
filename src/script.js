import "./style.css"
import { grabUserCitySearchInput } from './input-handler.js'

let userSearchTerm;

async function waitForUserInput() {
    while (true){
        const input = await grabUserCitySearchInput(); 

        if (input == '' || input == userSearchTerm){
            console.log('ERROR: Enter in a new search term');
            continue;
        }

        userSearchTerm = input;
        console.log(`User search term is now: ${userSearchTerm}`); 
    }
}



waitForUserInput()