// Add in the code from the walk-through and observe the page behaviour.
/*
In this walkthrough, we will use JavaScript to prompt the user for two numbers, add them together, and display the result on the page along with the numbers supplied by the user.
*/
let first = prompt('Enter a number');
document.querySelector('#firstNumber').innerText = first;
let another = prompt('Enter another number');
document.querySelector('#secondNumber').innerText = another;



// OOPS! I should have done a sample of how to return a value from a function!!
const addNumbers = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let result = addNumbers(parseInt(first), parseInt(another));

document.getElementById('answer').innerText = result;