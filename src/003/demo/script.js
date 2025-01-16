console.log('script.js is loaded'); // This outputs data to the browser console

/*
    We will create some variables to hold a reference to parts of our DOM.
    Having a variable that references a DOM element makes it easier to work
    with that element when we want to interact with it.
    We have a few keywords to use when declaring variables: var, let, const
    Generally, we will be using let instead of var because the let keyword
    is better at honouring scope.
*/
let banner = document.querySelector('#top-banner');
banner.innerText = 'This is a quick-and-dirty web page to explore JavaScript.';

// In C#, we can use string interpolation like this: $"My name is {name}.";
// In JavaScript, we use backticks for string interpolation:
//                          `My name is ${name}.`
console.log(`I have a variable referencing my banner. The banner tag is ${banner.tagName}`);

// JavaScript, as a dynamically-typed language, allows us to change the type of a variable
// simply by storing a different value inside the variable. In other words, the data type
// of a variable in JavaScript depends entirely on what value the variable holds.
banner = 'Hello bob'; // Now, banner is a string
console.log(banner);

banner = 5; // Now, banner is a number
console.log(`${banner} * 3 = ${banner * 3}`);

// Let's demonstrate how in JavaScript we can easily (or accidentally) create new
// members of objects.
let firstItem = document.querySelector('li');
console.log('The list item text is:', firstItem.innerText);
// I'll do a typo on this next line of code
firstItem.innertext = 'Here is my first item in my list';
// Check the web page. Did the `<li>` text change? Check the console. Did you get an error??
