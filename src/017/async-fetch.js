// node --watch async-fetch.js

let apiEndPoint = 'https://randomuser.me/api';
console.log(`Fetching data from ${apiEndPoint}\n`);

// fetch() is a function included in browsers and NodeJS.
// The fetch() function is an Asynchronous function.
// This means that our code will not wait for the function to finish running.
fetch(apiEndPoint)
// \_____________/
//   Promise<Response> - Promises run asynchronously
    .then(response => { 
        console.log('Done.');
    });

fetch(apiEndPoint)
    .then(x => x.json())
    .then(x => { console.log(x); });

console.log('\n-- The End --');
