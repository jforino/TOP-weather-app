import { callVisualCrossingAPI } from "./visualcrossingapi";

export function grabUserCitySearchInput(){

    return new Promise((resolve) => {

    let userInputField = document.getElementById('user-input-field'); 
    let userFormField = document.getElementById('user-search-input-form'); 
    const loadingDiv = document.getElementById('loading-div');
        
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const input = userInputField.value;

        if (input !== ''){
            userInputField.classList.remove('no-field-input');

            loadingDiv.style.display = 'block'
            setTimeout( () => {
                resolve(callVisualCrossingAPI(input))
            }, 1000);
        }
        else {
            userInputField.setCustomValidity('Enter in a city!'); 
            userInputField.classList.add('no-field-input');
        }
        
        

    }
   
    userFormField.addEventListener('submit', handleSubmit); 
    });
}