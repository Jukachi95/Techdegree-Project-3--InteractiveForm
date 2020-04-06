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

    // ??? IF THE DROPDOWN HASNT BEEN CLICKED

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

    colorSelect.innerHTML = ` <option> Please select a T-Shirt theme </option>`;

    console.log(colorSelect)

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


// If a design has not been picked by the user on the Design tab
// Change 


// Get the event listener for the 'Select Menu' option in Design (((ALTERNATIVE SOLUTION IN WINDOW.ONLOAD())))
