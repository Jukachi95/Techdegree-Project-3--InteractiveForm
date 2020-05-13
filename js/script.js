
// Declare event listener on name input

window.onload = function(){
    // Once the page loads, place focus on the first input field
    document.getElementById('name').focus()

    // When the page loads, the design dropdown option of 'select theme' must be hidden
    // When selecting the element using the DOM, it will return it's children, similar to an array
    // Zero index based, so the 'Select Theme' option will be '0'
    let selectOption = document.getElementById('design')[0]

    // Set the display type to hidden
    selectOption.style.display = 'none'
    // The value can be viewed but cannot be selected from the dropdown


    // Create an option element 
    let newOptionEl = document.createElement('option');

    // Give it a value and/or text
    newOptionEl.textContent = 'Please select a T-Shirt theme';

    // Get the element for parent element that will be inserted
    let colorSelect = document.getElementById('color')


    // Hide paypal and bitcoin on load
    let paypalDiv = document.querySelector('#paypal');
   let bitcoinDiv = document.querySelector('#bitcoin');

   paypalDiv.hidden = true;
   bitcoinDiv.hidden = true;

}


                                //* JOB ROLE SECTION * //


// Target the input field with the id 'other-title'
let otherTitle = document.getElementById('other-title');

// Hide it initially in case JS is disabled
otherTitle.style.display = 'none'

// If the select option for 'other' is chosen, display 'otherTitle'
let selectTitle = document.getElementById('title')

// Set an event listener for the select element
// The event listener is 'change' which will fire when an option value is changed or selected
selectTitle.addEventListener('change', (e)=>{
    
    // By console logging e.target.value, the option values is logged e.g. designer, student, other
    // The specific value we want to display the input on is 'other'
    // When the user clicks on 'other'....
        if(e.target.value == 'other'){
            // The value is shown
            otherTitle.style.display = ''
        } else {
            // Otherwise, it is not displayed
            // Note: when the user chooses an option that is not other, the text input fiel will disappear
            otherTitle.style.display = 'none'
        }

})


                                        // * T-Shirt section * //


// Get design element 
let designEl = document.getElementById('design');

// Create an option element
let pleaseSelect = document.createElement('option');

// Create the text to be displayed in the option element
pleaseSelect.textContent = 'Please Select a T-Shirt theme';

// Get the parent element of the color option dropdown
let colorSelect = document.getElementById('color');

// For reference, get the first element child for the color dropdown a.k.a colorSelect
// This should be the option element with the text 'Cornflower Blue (JS Puns shirt only)'
let colorFirstChild = colorSelect.firstElementChild;

// Use the insertBefore method to add the 'Please select a T-Shirt theme' to the dropdown
colorSelect.insertBefore(pleaseSelect, colorFirstChild)

// Add the attribute of 'selected' to the new option element so that it is selected by default
pleaseSelect.selected = true;


// Loop through the indexes to hide all the other option elements
// Index 0 is the first option element (Please select a T-Shirt), so indexes after 0 must be hidden
// Hence why the loop starts at index 1
for(let i = 1; i < colorSelect.length; i++){
    colorSelect[i].hidden = true;
}



// designEl event listener here .......
designEl.addEventListener('change', (e)=>{

    let colorSelect = document.getElementById('color');
    
                                    // 7/4/2020 If there is no change on input , then it will be Please select a theme

 // If the selected option is equal to 'js puns', hide all the 'heart js' options
         if(e.target.value === 'js puns'){
                
                console.log(e.target.value)
                colorSelect[0].hidden = true;
                colorSelect[1].hidden = false;
                colorSelect[2].hidden = false;
                colorSelect[3].hidden = false;
                colorSelect[4].hidden = true;
                colorSelect[5].hidden = true;
                colorSelect[6].hidden = true;

                // The value that will be selected by default when the 'js puns' is picked
                colorSelect[1].selected = true;
        

 // If the selected option is equal to 'heart js', hide all the 'js puns' options               
         } else if(e.target.value == 'heart js'){

                colorSelect[0].hidden = true;
                colorSelect[1].hidden = true;
                colorSelect[2].hidden = true;
                colorSelect[3].hidden = true;
                colorSelect[4].hidden = false;
                colorSelect[5].hidden = false;
                colorSelect[6].hidden = false;
        
                // The value that will be selected by default when 'heart js' is picked
                colorSelect[4].selected = true;

    
    } 
})

                            // * Actvity Section * //

// Create a DOM element that will be appended to the 'activity' section
let newActivity = document.createElement('label')

// Get 'activities' section
let activitySection = document.querySelector('.activities')
// console.log(activitySection)
activitySection.appendChild(newActivity)

// Create a variable for the activity total that will be added to
let activityTotal = 0;


// Listen for changes in the activity section
activitySection.addEventListener('change', (e)=>{

        // Console.log() the input value that has been clicked 
        let clickedVal = e.target

        // Get the 'data-cost' attribute of the clicked input
        // Convert the returned value to a number
        let clickedValCost = Number(clickedVal.getAttribute('data-cost'))

        // Check that the correct value(s) are being logged
        console.log(clickedVal)

        // If/else statement to check if the input was checked
        // e.target.checked === true, then add val to activityTotal  

        // If the input is checked....
        if(clickedVal.checked){

            // Add the value to the activityTotal variable
            activityTotal+=clickedValCost;
            newActivity.innerHTML = 'Total: $' + activityTotal

        } else {

            // If unclicked, subtract the value from the activityTotal
            activityTotal-=clickedValCost;
            newActivity.innerHTML = 'Total: $' + activityTotal
        }


        
        // Create variable for data-day and time attributes

        let dateTime = clickedVal.getAttribute('data-day-and-time')

        // Loop over checkbox inputs in activity section
        let activityInputs = document.querySelectorAll('input[type="checkbox"]')

        // There should be 7 inputs
        console.log(activityInputs)

                for(i = 0; i < activityInputs.length; i++){
                    let currentIteration = activityInputs[i];
                    
                        if(dateTime === currentIteration.getAttribute('data-day-and-time') && clickedVal.name != currentIteration.name && clickedVal.checked){
                                currentIteration.disabled = true
                        } else if(!clickedVal.checked){
                                currentIteration.disabled = false;
                        }


                }


                // Does the activity at the current iteration? occur at the same time the
                // clicked activity is taking place
        
})


                                        // Payment Section //


// Select the 'payment' dropdown and hide the 'Select Payment Option' from dropdown

let selectPaymentOpt = document.querySelector('#payment')[0];
selectPaymentOpt.hidden = true;

let creditCardDropdown = document.querySelector('#payment')[1];
creditCardDropdown.selected = true;



// Select the 'payment' element

let paymentEl = document.querySelector('#payment');


// Select the corresponding divs for each payment option

let paypalDiv = document.querySelector('#paypal');
let bitcoinDiv = document.querySelector('#bitcoin');
let creditCardDiv = document.querySelector('#credit-card')



// Display the payment option divs, depending on the option that has been clicked

paymentEl.addEventListener('change', (e)=>{

        if(e.target.value === "credit card"){

            creditCardDiv.hidden = false;
            paypalDiv.hidden = true;
            bitcoinDiv.hidden = true;

            // Credit card validation

        } else if (e.target.value === "bitcoin"){

            creditCardDiv.hidden = true;
            paypalDiv.hidden = true;
            bitcoinDiv.hidden = false;
            let creditParentElement = document.querySelector('#credit-card')
            removeErrorCC(creditParentElement)

        } else if(e.target.value === "paypal"){
            creditCardDiv.hidden = true;
            paypalDiv.hidden = false;
            bitcoinDiv.hidden = true;
            let creditParentElement = document.querySelector('#credit-card')
            removeErrorCC(creditParentElement)
        }
       

})





// Should take in element name as parameter to style
function displayError(el){

        // Change the color of the elements border
        el.style.borderColor = 'red'

        // Create the error message
        let errorEl = document.createElement("span")

        
        // This is to prevent duplication of error messages 
        // if the next element sibling does not have the error text or if it does not exist, insert it
        if(el.nextElementSibling.textContent != "Please use the appropriate format"){

                // Error message text
                errorEl.textContent = 'Please use the appropriate format'

                 // Insert the message before the next element sibling
                el.parentElement.insertBefore(errorEl, el.nextElementSibling)
            
        } 

        // Error message color
        errorEl.style.color = 'red';

        // Error message font weight
        errorEl.style.fontWeight = '700'    
}



// Function to remove error message 

function removeError(el){

            // This will revert the borderColor to it's original color
            el.style.borderColor = '#5e97b0'
            
            if(el.nextElementSibling.textContent == 'Please use the appropriate format'){
                el.nextElementSibling.remove()
            }

}

// Display error for activity section

function displayErrorActivity(el){

     // Change the color of the elements border
     el.style.borderColor = 'red'

     // Create the error message
     let errorEl = document.createElement("span")

     
     // This is to prevent duplication of error messages 
     // if the next element sibling does not have the error text or if it does not exist, insert it
     if(el.nextElementSibling.textContent != "Please select an activity"){

             // Error message text
             errorEl.textContent = 'Please select an activity'

              // Insert the message before the next element sibling
             el.parentElement.insertBefore(errorEl, el.nextElementSibling)
         
     } 

     // Error message color
     errorEl.style.color = 'red';

     // Error message font weight
     errorEl.style.fontWeight = '700'    

}

function removeErrorActivity(el){

    el.style.borderColor = '#5e97b0'
            
    if(el.nextElementSibling.textContent == 'Please select an activity'){
        el.nextElementSibling.remove()
    }

}


// Function for credit card error display and removal
function displayErrorCC(el){


    // Create the error message
    let errorEl = document.createElement("span")

    // If the selected el or type is not credit card...
    let creditCardSelectVal = document.querySelector('#payment').value
    
    // This is to prevent duplication of error messages 
    // if the next element sibling does not have the error text or if it does not exist, insert it
    if(el.nextElementSibling.textContent != "Please enter the correct card details" && creditCardSelectVal == 'credit card'){

            // Error message text
            errorEl.textContent = 'Please enter the correct card details'

             // Insert the message before the next element sibling
            el.parentElement.insertBefore(errorEl, el.nextElementSibling)
        
    } 

    // Error message color
    errorEl.style.color = 'red';

    // Error message font weight
    errorEl.style.fontWeight = '700'    

}

// Function to remove error message for removing error message

function removeErrorCC(el){

   if(el.nextElementSibling.textContent == "Please enter the correct card details"){
       el.nextElementSibling.remove()
   }

}







function validName(){

            // Can only be letters and must be more than 1 character
            let nameValid = /\D[a-z]{1,}/ig
            
            // Select username input box
            let userNameInput = document.querySelector('#name');

            // Select username input value
            let userNameValue = document.querySelector('#name').value

            // Test this value against the vaue provided by the user
            let isNameValid = nameValid.test(userNameValue)

            // If the name is not valid, run a function that displays red
            if(isNameValid == false){
            displayError(userNameInput)
                return false
            } else{
                removeError(userNameInput)
                return true
            }
}



// Function to validate email

function validEmail(){

            // Regular expression rule that the input has to meet
            let emailValid = /[^@]+@[^@]+\.[^@]+/ig

            // Select the input with the id "mail"
            let emailInput = document.querySelector('#mail')

            // Select the value for emailInput and place into a variable
            let emailInputValue = emailInput.value
            
            // Test the value that the user has created and test it against the emailValid regex
            // Store it into a variable
            let isEmailValid = emailValid.test(emailInputValue);

            // If the if statement returns false, the displayError() function wil run
            if(isEmailValid == false){
                displayError(emailInput)
               return false
            } else{
                removeError(emailInput);
                return true
            }
}




function validActivitySection(){
    
    // Select the checkboxes that the user has clicked
    let activityButtonChecked = document.querySelector("input[type='checkbox']:checked");

    // Select the parent div / fieldset
    let activityDiv = document.querySelector('.activities')
    
    // If the activityButtonChecked variable does not exist, the displayError function will run
    if(!activityButtonChecked){
        displayErrorActivity(activityDiv)
        return false
    } else{
        removeErrorActivity(activityDiv)
        return true
    }
    
}




function validCreditCard(){

        // Regex values that the user will have to meet
        let creditRegEx = /^[\d]{4}[\d]{4}[\d]{4}[\d]{1,4}$/

        // Parent element
        let creditParentElement = document.querySelector('#credit-card')
        
        // Get the input element
        let creditCard = document.querySelector('#cc-num');

        // Get the value entered for the input element
        let creditCardVal = creditCard.value

        // Test the value and run it against the regEx and store it in a variale
        let creditCardTest = creditRegEx.test(creditCardVal)

      

                 // If the value entered does not meet the criteria, then the borderColor will change to indicate an error
            if(!creditCardTest){
                 creditCard.style.borderColor = 'red'
                 displayErrorCC(creditParentElement)
                return false
            } else{
                // Otherwise it will return to it's default styling
                 creditCard.style.borderColor = '#5e97b0'
                 removeErrorCC(creditParentElement)
                 return true
            }
}




function validZipCode(){

    // Get the input element 
    let zipCode = document.querySelector('#zip')

    // Store the value for in a new variable
    let zipCodeVal = zipCode.value

    let creditParentElement = document.querySelector('#credit-card')

    // UK Postcode regex
    // let zipRegEx = /^\w{1,4}\s?\d\w{2}$/

    // Create the regEx for a US Zipcode and store it into a variable
    let zipRegEx = /^[\d]{5}$/;
  
    // Test the value that the user has entered and store it into a variable
    let zipCodesTest = zipRegEx.test(zipCodeVal)


                if(!zipCodesTest){
                    zipCode.style.borderColor = 'red';
                    displayErrorCC(creditParentElement)
                    return false
                } else{
                    zipCode.style.borderColor = '#5e97b0'
                    removeErrorCC(creditParentElement)
                    return true
                }

}


// Valid CVV Function
function validCVV(){
  
        // Get the input element
        let cvv = document.querySelector('#cvv');

        // Store the value into a variable
        let cvvVal = cvv.value;

        // Set the regEx that the users value has to meet
        let cvvRegEx = /^[0-9]{3}$/

         // Test the value that the user has entered and store it into a variable
        let cvvTest = cvvRegEx.test(cvvVal)

        let creditParentElement = document.querySelector('#credit-card')

        
        
                if(!cvvTest){
                    cvv.style.borderColor = 'red'
                    displayErrorCC(creditParentElement)
                    return false
                } else{
                    cvv.style.borderColor = '#5e97b0'
                    removeErrorCC(creditParentElement)
                    return true
                }
}







function isValid(){

      // If selected, run these functions
      validName();
      validEmail();
      validActivitySection();
      validCreditCard();
      validZipCode();
      validCVV();

          let creditCardSelect = document.querySelector('#payment').value
          if(creditCardSelect == 'credit card'){
                if(validName()  && validEmail() && validActivitySection()  && validCreditCard()  && validZipCode()  && validCVV() ){
                        return true
                } else{
                        return false
                }
          } else if(creditCardSelect != 'credit card') {
                    if(validName() && validEmail() && validActivitySection()){
                            return true
                    } else{
                            return false
                    }
}
     
}




                                                // SUBMIT BUTTON EVENT LISTENER

let submitBtn = document.querySelector('button[type="submit"]')



submitBtn.addEventListener('click', (e)=>{

            isValid();    

                if(isValid() == false){
                    e.preventDefault()
                } 
    
    
})







// let creditCardSelect = document.querySelector('#payment').value

// if(creditCardSelect == 'credit card'){
                
//     if(validName()  && validEmail() && validActivitySection()  && validCreditCard()  && validZipCode()  && validCVV() ){
//         return true
//     } else{
//         return false
//     }


// } else {

//     if(validName() && validEmail() && validActivitySection()){
//         return true
//     } else{
//         return false
//     }


















// if(validName() == true && validEmail() == true && validActivitySection() == true && validCreditCard() == true && validCVV() == true && validZipCode() == true){
       
    //     return true
    // } else{
    //     return false
    // }
    



                  
//     //  Check if the credit card option is seleceted
//  let creditCardSelect = document.querySelector('#payment').value
 
//  // If selected, run these functions
//   if(creditCardSelect == 'credit card' && validName() == true && validEmail() == true && validActivitySection() == true && validCreditCard() == true && validCVV() == true && validZipCode() == true){
        

//       return true

//   } else if (creditCardSelect != 'credit card' && validActivitySection() == true && validEmail() == true && validName() == true){
     
//       return true

//   } else if(validName() == false && validEmail() == false && validActivitySection() == false && validCreditCard() == false && validCVV() == false && validZipCode() == false){
    
//     return false

//   }



// wAS PREVIOUSLY IN isValid
// if(validName() || validEmail() || validActivitySection() || validCreditCard() || validZipCode() || validCVV()){
//     return true
// } else{
//     return false
// }




// function creditCardSelect(){

// //       Check if the credit card option is seleceted
//   let creditCardSelect = document.querySelector('#payment').value
 
//         // If selected, run these functions
//                 if(creditCardSelect == 'credit card'){
//                     validCreditCard()
//                     validZipCode()
//                     validCVV()
//                     validActivitySection();
//                     validEmail()
//                     validName()
//                 } else {
//                     validActivitySection();
//                     validEmail()
//                     validName() 
//                 }
// }




// if(creditCardSelect == 'credit card'){
                    
//     if(validName() && validEmail() && validActivitySection() && validCreditCard() && validZipCode() && validCVV()){
//         return true
//     } else{
//         return false
//     }


// } else {

//     if(validName() && validEmail() && validActivitySection()){
//         return true
//     } else{
//         return false
//     }

// }