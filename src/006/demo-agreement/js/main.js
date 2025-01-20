/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
console.log('main.js has loaded');
// ask the user for the names of the parties to this legal agreement
let discloser = prompt('What is the name of the disclosing party?');
let receiver = prompt('What is the name of the receiving party?');

let firstPlaceholder = document.querySelector('.disclosing-party');
let secondPlaceholder = document.querySelector('.receiving-party');

firstPlaceholder.innerText = discloser;
secondPlaceholder.innerText = receiver;

document.querySelector('.signature .disclosing-party').innerText = discloser;
document.querySelector('.signature .receiving-party').innerText = receiver;
