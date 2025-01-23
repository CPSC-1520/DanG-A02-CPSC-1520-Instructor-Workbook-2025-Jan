console.log('JavaScript file loaded!');

// This is an example of a function that will be my Event Handler.
// It contains the code that I want to run when a certain event happens.
const handleClick = function(event) {
    event.preventDefault(); // don't do your default behaviour
    // TODO: Use for exploration purposes
    const target = event.target;    // DOM element
    document.getElementById('feedback').innerText = `Clicked from ${target.tagName}`;
}

let heading = document.querySelector('h1');
// I "register" my Event Handler with my DOM object by adding an
// "event listener" which "listens" for a specific event
heading.addEventListener('click', handleClick);
//                       \_____/  <--- The mouse-click event

// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #register element.
document.getElementById('register') // many ways to get this DOM element
        .addEventListener('dblclick', function(ev) {
            // this is my anonymous function to handle the dblclick event
            console.log('This was double-clicked');
        });

// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.
heading.addEventListener('dblclick', function(evt) {
    document.querySelector('html').dataset.theme = 'light';
});
