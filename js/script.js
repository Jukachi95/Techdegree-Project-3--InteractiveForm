// When the document loads, focus on the first input
// Can either use window.onload or select the Name input element and place focus on it

// Declare variable for 'Name' input element


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

    // Possible solutions.....

    // Do I want to use insert before, because if I do  I will have to delete the other options
    // Or do I want to remove the elements completely and just add the single newOptionEl
    // Or do I add the newOptionEl and THEN hide the other items until clicked

    // Current solution --->  Loop through the children to hide display
    // for(let i = 0; i < colorSelect.length; i++){
    //     colorSelect[i].style.display = 'none'
    // }

    // PREVIOUS SOLUTION
    // colorSelect.innerHTML = ` <option> Please select a T-Shirt theme </option>`;

    // New solution would be to hide the elements and only show the select tshirt message
    // console.log(colorSelect)

    //    Hide or do not display the option element when adding the 'change' event listener
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
// ?????? May have to change  variable name to 'cost'
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
console.log(selectPaymentOpt)


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

        } else if (e.target.value === "bitcoin"){

            creditCardDiv.hidden = true;
            paypalDiv.hidden = true;
            bitcoinDiv.hidden = false;

        } else if(e.target.value === "paypal"){
            creditCardDiv.hidden = true;
            paypalDiv.hidden = false;
            bitcoinDiv.hidden = true;
        }
       

})

                                        // Form Validation  - Event Listener

// SUBMIT BUTTON EVENT LISTENER
let submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    // May have to delcare variables before putting into functions

    let userNameInput = document.querySelector('#name').value
    console.log(userNameInput)
    
    
})



function validName(){

    // Can only be letters and must be more than 1 letter
    let nameValid = /\D[a-z]+/ig

    // Test this value against the vaue provided by the user

}


