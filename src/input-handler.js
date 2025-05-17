import { callVisualCrossingAPI } from "./visualcrossingapi";

export function grabUserCitySearchInput(){

    return new Promise((resolve) => {

    let userInputField = document.getElementById('user-input-field'); 
    let userFormField = document.getElementById('user-search-input-form'); 
    const loadingDiv = document.getElementById('loading-div');
        
    const handleSubmit = (e) => {
        e.preventDefault(); 

        loadingDiv.style.display = 'block'

        const input = userInputField.value;
        
        setTimeout( () => {
            resolve(callVisualCrossingAPI(input))
        }, 1000);
        

    }
   
    userFormField.addEventListener('submit', handleSubmit); 
    });
}