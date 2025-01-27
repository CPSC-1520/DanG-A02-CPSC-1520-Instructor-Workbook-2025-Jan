console.log('main.js has been loaded');
const sandbox = document.querySelector('output#sandbox');
sandbox.innerText = 'Experimental code output below...';

// TODO: Use the space below for playing with JavaScript.
let step = 0;
const append = function(text) {
    let currentStep = getOffsetStep(step++); // post-fix increment  ++
    sandbox.innerHTML += '<br>'; // HTML line break
    sandbox.innerHTML += currentStep + text;
}

// Demonstration of a function that returns a value
const getOffsetStep = function(offset) {
    let start = 'A';
    let code = start.charCodeAt(0);
    let step = code + offset;
    return String.fromCharCode(step) + ') ';
}

let message;
message = 'I created the append() and getOffsetStep() functions.';
append(message); // I should have calledin a sick day....
// Imagine I am at sample D), which is an offset from A) of 3
// message = `${getOffsetStep(3)}This is a sample step`;
// message = '5';
// let code = message.charCodeAt(0); // strings are arrays of character
// message = `The character '${message}' has the character code ${code}.`;
// append(message);


//////////// Event Handler to Toggle the Output display
document.querySelector('h1').addEventListener('click', function(evt) {
    sandbox.classList.toggle('hidden'); // 'hidden' is a CSS class in Tailwind
    console.log(sandbox.classList);
    // The .classList property of an HTMLElement represents the collection
    // of CSS classnames that are currently "on" that DOM element.
    // This property has certain methods available
    //  - .toggle()  <-- alternates between adding and removing the class
    //  - .add()     <-- add the class to the element (if not present)
    //  - .remove()  <-- remove the class from the element
})
