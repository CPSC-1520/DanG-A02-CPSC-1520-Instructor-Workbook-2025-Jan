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
    out.innerHTML = htmlMarkup;
  } else {
    out.innerHTML += htmlMarkup;
  }
};

/**
 * Builds the HTML for a form that will allow editing evaluation items and marks.
 * @param {string} evalName Name of evaluation item
 * @returns {string} HTML markup of a form
 */
const buildFormHtml = function (evalName) {
  return `
  <form>
    <fieldset class="grid">
        <label>Name
            <input type="text" name="evalName" placeholder="Evaluation Name" value="${evalName}">
        </label>
        <label>Weight (%)
            <input type="number" name="weight" step="1" min="1" max="100" />
        </label>
        <label>Total Points
            <input type="number" name="totalPoints" step="0.5" min="1" />
        </label>
        <label>Earned Points
            <input type="number" name="earnedPoints" step="0.5" min="0" />
        </label>
        <label>
            &nbsp;
            <button type="submit">Update</button>
        </label>
    </fieldset>
</form>
`;
}

const dataType = function (value) {
  let result;
  if(value == undefined || value == null) {
      result = `The value is ${value}`;
  } else {
      result = `The data type is ${value.constructor.name}`;
  }
  return result;
}

/**
 * Generates additional forms for individual evaluation items in the course
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const createForms = function (evt) {
  // TODO: Part 1 - Build forms and append to the <section id="evaluations">
  evt.preventDefault();
  const elements = evt.target.elements;
  const inputCategory = elements.category;
  const inputQuantity = elements.quantity;

  outputLine('Generating course evaluation forms...', true);

  let isValid = true; // optimistically

  if(inputCategory.value.trim() === '') {
    isValid = false;
    outputLine('Category name is required');
    inputCategory.ariaInvalid = true;
  } else {
    inputCategory.ariaInvalid = false;
  }

  // Validate that the quantity is greater than zero and less than 10
  let quantity = parseFloat(inputQuantity.value);
  if(inputQuantity.value === '' || quantity <= 0 || quantity >= 10) {
    isValid = false;
    outputLine('Quantities must be greater than zero and less than 10');
    inputQuantity.ariaInvalid = true;
  } else {
    inputQuantity.ariaInvalid = false;
  }

  if(isValid) {
    outputLine(`Create ${inputQuantity.value} forms for '${inputCategory.value}' items`, true);

    //debugger; // Pause when the dev tools are open
    let evalName = inputCategory.value;
    let quantity = parseInt(inputQuantity.value);
    let container = document.getElementById('evaluations');
    for(let count = 1; count <= quantity; count++) {
      let html = buildFormHtml(`${evalName} ${count}`);
      container.innerHTML += html;
    }
    // Reset the form
    inputCategory.value = '';
    inputQuantity.value = '';
    inputCategory.focus();
  }
} // end of createForms() event handler

/**
 * Modifies evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const editEvalItem = function (evt) {
  // This handler is listening to the container of
  // all the individual course evaluation forms.
  evt.preventDefault();
  // TODO: Part 2 - Update information on the current evaluation item
  outputLine("User feedback on editing the evaluation item", true);
  // Which form are we using?
  const form = evt.target;
  // Get the form's input elements...
  console.log(form.elements);
  // evalName
  let inputName = form.elements.evalName;
  // weight
  let inputWeight = form.elements.weight;
  // totalPoints
  let inputTotal = form.elements.totalPoints;
  // earnedPoints
  let inputEarned = form.elements.earnedPoints;

  // TODO: Validate the inputs
  let isValid = true;


  // Process the inputs by adding/updating the global array
  if(isValid) {
    // See if the eval item exists
    let found = null;
    for(let index = 0; index < evalData.length; index++) {
      let item = evalData[index];
      if(item.name === inputName.value) {
        found = item;
      }
    }
    // If so, then update it's details
    if(found) { // a truthy conditional expression
      found.weight = parseInt(inputWeight.value);
      // short-hand way... (ternary expression)
      found.total = isNaN(inputTotal.value) ?
                   null : parseInt(inputTotal.value);
      // long way...
      if(isNaN(inputEarned.value)) {
        found.earned = null;
      } else {
        found.earned = parseInt(inputEarned.value);
      }
    } else {
      // Otherwise add this as a new evaluation item
      // Create a new object literal
      found = {
        name: inputName.value,
        weight: parseInt(inputWeight.value),
        total: isNaN(inputTotal.value) ?
               null : parseInt(inputTotal.value),
        earned: isNaN(inputEarned.value) ?
                null : parseInt(inputEarned.value)
      }
      // Add it to my array
      evalData.push(found); // add to the end
    }
  }
};

// Use a global variable to store my course evaluation data
const evalData = []; // An empty array
// each element is an object:
// { name: string, weight: number, total: number | null, earned: number | null }

/**
 * Reviews all the recorded weights/marks in the `<section id='evaluations'>`
 * forms and outputs recalculated summaries of marks
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const calculateGradeStatus = function (evt) {
  evt.preventDefault();
  // TODO: Part 3 - Explore all the marks recorded and update grade status
}

// Register the form event handlers
const form = document.querySelector('form#addInputs');
form.addEventListener('submit', createForms);

const evaluations = document.getElementById('evaluations');
evaluations.addEventListener('submit', editEvalItem);

const gradeStatus = document.querySelector('form#status');
gradeStatus.addEventListener('submit', calculateGradeStatus);
