console.log("script file loaded");

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} replace False if you wish to append the HTML, true if you wish to replace it
 */
const outputLine = function (htmlMarkup, replace) {
  const out = document.getElementById("output");
  htmlMarkup += "<br />";
  if (replace) {
    out.innerHTML = htmlMarkup; // replace
  } else {
    out.innerHTML += htmlMarkup; // append
  }
};

/**
 * Adds evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const addEvalItem = function (evt) {
  evt.preventDefault();
  // TODO: Write your exploratory code here
  outputLine("Processing eval item...", true);

  // get ahold of the input elements
  // console.log(evt.target.elements);
  let elements = evt.target.elements;
  let inputName = elements.evalName;
  let inputWeight = elements.weight;

  let isValid = true; // Optimistic on data entry
  let canCalculate = false; // Pessimistic
  let message; // to build my string apart from the call to outputLine()

  if(!isEmpty(inputName) && !isEmpty(inputWeight)) {
    // All good, display the message
    message = `The ${inputName.value} item is worth ${inputWeight.value} %.`;
    outputLine(message);
  } else {
    isValid = false; // Missing critical data
    if(isEmpty(inputName)) {
      message = '<span class="error">You must enter a name for the evaluation item.</span>';
      outputLine(message);
    }
    if(isEmpty(inputWeight)) {
      message = '<span class="error">A weight is required for the evaluation item.</span>';
      outputLine(message);
    }
  }

  // TODO: Get earned/total points
  let inputTotal = elements.totalPoints;
  let inputEarned = elements.earnedPoints;

  if(!isEmpty(inputTotal)) {
    if(!isEmpty(inputEarned)) {
      if(inputEarned.value > inputTotal.value) {
        isValid = false;
        message = "<span class='error'>You cannot earn more than the total points.</span>";
        outputLine(message);
      } else {
        // Can only calculate if I have values and the earned <= total
        canCalculate = true;
      }
    }
  } else {
    if(!isEmpty(inputEarned)) {
      // Problem
      isValid = false;
      message = "<span class='error'>You've entered earned points without a total available points.</span>";
      outputLine(message);
    } 
  }

  // Finish my processing
  if(isValid) {
    outputLine('Saving evaluation item.');
    if(canCalculate) {
      message = `You earned ${inputEarned.value}/${inputTotal.value} or <mark>${inputEarned.value / inputTotal.value * 100} %</mark>.`;
      outputLine(message);
      message = `That's worth <b>${(inputEarned.value / inputTotal.value) * inputWeight.value} %</b> of your final grade.`;
      outputLine(message);
    }

    // Clear the inputs
    inputName.value = '';
    inputWeight.value = '';

    inputName.focus(); // Make control ready for keyboard input
  }

}; // end of addEvalItem() event handler

/* Utility Functions */
/**
 * isEmpty() determines if the input's value (once trimmed) is an empty string.
 * @param {HTMLInputElement} inputElement An input element to be validated
 * @returns {boolean} - True if the trimmed value is empty, false otherwise
 */
const isEmpty = function(inputElement) {
  return (inputElement.value.trim() === '');
}



/**
 * Reports information about the last state of the form before the reset was applied to the input controls.
 * @param {Event} evt A `reset` event on the `<form>` element.
 */
const resetForm = function (evt) {
  outputLine("The form has been reset");
};

// Register the form event handlers
const form = document.querySelector("form");

form.addEventListener("submit", addEvalItem);
form.addEventListener("reset", resetForm);

// Register the calculation of final grades
const calc = document.getElementById("calc");

calc.addEventListener("click", function () {
  // TODO:
});

// Register the generation of fake data
const fake = document.getElementById("fake");

fake.addEventListener("click", function () {
  // TODO: Generate some random evaluation items with marks
});
