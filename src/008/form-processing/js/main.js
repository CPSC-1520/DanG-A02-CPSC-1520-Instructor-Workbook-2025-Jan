// Utility functions for showing text on the page (echoing to the user what they entered)
const appendFeedback = function(line) {
    document.querySelector('#feedback').innerText += `\n${line}`;
    // This uses a template string with placeholder  \_________/
}

const clearFeedback = function(text) {
    document.querySelector('#feedback').innerText = `${text || ''}`;
}

// Process the 'subscribe' form's inputs
document
    .getElementById('subscribe') // Get the <form id="subscribe"> element
    .addEventListener('submit', function(ev) { // an anonymous function responding to submit
        ev.preventDefault(); // This will stop the browser from submitting the form to the server
        // console.log(ev);
        let theForm = ev.target;
        clearFeedback('The subscribe form was submitted.');
        // <form> elements have a collection of other DOM elements that hold
        // the information that will be submitted to the webserver
        // That collection is called .elements
        // console.log(theForm.elements);
        let firstNameInput = theForm.elements.firstname; // <input name="firstname" />
        appendFeedback("The first name is: '" + firstNameInput.value + "'");
        // <input>, <select> and others have a property       \____/  <-- the data entered/used
        let emailInput = theForm.elements.email;
        appendFeedback(`Their email is: '${emailInput.value}'`);

        appendFeedback(`Agreed to terms? '${theForm.elements.terms.checked}'`);
        // <input type="checkbox | radio">                        \______/  
        //    When .checked is true, then the name/value of the control is sent to the server
        //    Typically, the "value" of the control is something "hardcoded" into the HTML
        // <input type="radio" name="bg-color" value="#ff0000" />  bg-color=#ff0000
        //                      name/value pair                    \______________/
        console.log(theForm.elements.term); // see the <input type="checkbox" in the console
    });


let otherForm = document.querySelector('#assorted');
const exploreForm = function(ev) {
    ev.preventDefault();
    clearFeedback('This is the data from the assorted form:');
    let target = ev.target;
    let theInputs = target.elements;
    console.log('theInputs: ', theInputs);

    // If your input control has a name with a dash in it,
    // use the name's value as an "index" for the object.
    let theBackgroundColorInput = theInputs['bg-color']; // Indexer to access the element
    // for <input type="radio" name="bg-color" value="#ff0000" />
    //                               \______/  hypenated name (kebab-case)
    //                     theInputs.bg-color   // JavaScript will interpret it as subtraction
    //                                          // so it won't work this way
    document.querySelector('aside h3') // <aside> <h3>Form Output</h3>
            .style.backgroundColor = theBackgroundColorInput.value;



    let dateInput = document.getElementById('date');
    appendFeedback(`The selected date is ${dateInput.value}.`);
    let timeInput = document.getElementById('time');
    appendFeedback(`The chosen time is ${timeInput.value}.`);
    let colorInput = document.getElementById('color');
    appendFeedback(`The user picked the color ${colorInput.value}`);

    document.querySelector('aside h3').style.color = colorInput.value;


    // Here's an interesting (but wonky) use of indexers to call
    // the .log() function of the console object.
    console['log']("Isn't that cool?!");
};
otherForm.addEventListener('submit', exploreForm);
