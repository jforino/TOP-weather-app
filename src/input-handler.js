export function grabUserCitySearchInput(){
    return new Promise((resolve) => {
        let userInputField = document.getElementById('user-input-field'); 
        let userInputFieldSubmitBtn = document.getElementById('user-input-submit-btn'); 
        
        userInputFieldSubmitBtn.addEventListener('click', () => {
            resolve(userInputField.value);
        })
    })
    
}