console.log('script file loaded');

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} append True if you wish to append the HTML, false if you wish to replace it
 */
const outputLine = function(htmlMarkup, append) {
    const out = document.getElementById('output');
    htmlMarkup += '<br />';
    if(!!append) { // The !! acts to coerce (force) a boolean value
        out.innerHTML += htmlMarkup;
    } else {
        out.innerHTML = htmlMarkup;
    }
}

/**
 * Compares the two values based on the selected comparison operator and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const compareValues = function(evt) {
    evt.preventDefault();
    // TODO: Write your exploratory code here
    outputLine("Edit this form's event handler to compare the values");

    // Make sure I have values to compare
    let elements = evt.target.elements;
    // <input name="lhSide" />
    let leftHand = elements.lhSide;
    // <input name="rhSide" />
    let rightHand = elements.rhSide;

    debugger; // this will pause execution

    let lh = getValue(leftHand);
    let rh = getValue(rightHand);
    if(lh && rh) {
        outputLine(`Comparing ${describeValue(lh)} to ${describeValue(rh)}`);
    } else {
        outputLine('One of the sides is empty');
    }
}

const getValue = function(inputControl) {
    let result;
    if(inputControl.type == 'number') {
        result = parseFloat(inputControl.value);
    } else {
        result = inputControl.value;
    }
    return result;
}

const describeValue = function(value) {
    let result;
    let type = typeof (value);
    if(type === 'number') {
        result = `the ${type} ${value}`;
    } else {
        result = `the ${type} '${value}'`;
    }
    return result;
}

/**
 * Reports information about the last state of the form before the reset was applied to the input controls.
 * @param {Event} evt A `reset` event on the `<form>` element.
 */
const resetForm = function(evt) {
    outputLine('The form has been reset');

}

/**
 * Changes the `type` attribute of the `<input>` elements with the names `lhSide` and `rhSide`.
 * @param {Event} evt A `click` event
 */
const changeInputType = function(evt) {
    const target = evt.target;
    if (target.tagName === 'INPUT' && target.type === 'radio') {
        let input;
        let type = target.value;
        let name = target.name;
        
        if (name === 'lhType') {
            input = form.querySelector('input[name=lhSide]');
        } else {
            // Somewhat presumptuous that name is `rhType`...
            input = form.querySelector('input[name=rhSide]');
        }

        input.type = type;
        outputLine(`  <i>Input type changed to '${type}' for &lt;input name='${name.substring(0, 2)}Side' /&gt;</i>`, true);
    }
}

// Register the event handlers
const form = document.querySelector('form');

form.addEventListener('submit', compareValues);
form.addEventListener('reset', resetForm);
form.addEventListener('click', changeInputType);
