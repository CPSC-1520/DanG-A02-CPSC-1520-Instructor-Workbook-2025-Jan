// It's a common practice to import any 3rd-party libraries at the top of your script file
import markdownit from 'markdown-it';
// We can apply CSS stylesheets to our website just by importing .css files
import '@picocss/pico/css/pico.css';

console.log('Loaded main.js');

// <section id="content"></section>

const handleResponse = function(responseObject) {
    console.log(responseObject);
    return responseObject.text();   // instead of .json(), because we loaded a Markdown file
}

const handleContent = function(markdown) {
    console.log(markdown);

    // Convert markdown text into HTML
    const md = markdownit();
    const result = md.render(markdown);
    console.log(result);

    // Add to the page
    let section = document.getElementById('content');
    section.innerHTML = result;
}

// Grab markdown content from the web server
fetch('./content/ReadMe.md')    // fetch() returns a Promise<Response>
    .then(handleResponse)       // Callback to deal with whatever comes back from the web server
    .then(handleContent)        // Next, we process the content of the reponse

/* Any Promise<T> runs asynchronously and it returns an object that supports
   the .then() and .catch() functions.
*/


//-----------------
import { generateFooter } from './dynamic-footer';

let result = generateFooter(2018, 'DanG-IT Specialist');
document.body.appendChild(result);
