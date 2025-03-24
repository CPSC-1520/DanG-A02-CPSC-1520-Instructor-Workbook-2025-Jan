/**
 * Shows the current date on the page.
 * @param {HTMLElement} thisDate DOM element as the container in which to show the date information.
 */
const showDate = function(thisDate) {
    // does a "breakdown" of the date data
    const getDatePortion = function(someDate) {
        if(someDate instanceof Date) {
            // Build a string with just the date portion
            // YYYY-MM-DD
            let text = `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
            text = `${months[someDate.getMonth()]} ${someDate.getDate()}, ${someDate.getFullYear()}`;
            return text;
        } else {
            // Not much I can do
            return undefined;
        }
    }
    let months = ['Jan', 'Feb', 'Mar', 'Apr'];
    let today = new Date(); // the point at which they have loaded the page
    thisDate.innerText = getDatePortion(today); // Let them know the date

    const logTime = function(/** @type {Date} */ someDate) {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
        let hour = someDate.getHours();
        let minutes = someDate.getMinutes();
        let seconds = someDate.getSeconds();

        // return `${hour}:${minutes}:${seconds}`;
        return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`;
    }
    let timeInfo = logTime(today);
    thisDate.innerText += ` (${timeInfo})`;
    console.log('main.js is loaded');
};

// Gets the DOM element to put the date into
const output = document.getElementById('thisDate');
showDate(output); // call my function

// Button click handler to show time information.
document.querySelector('button').addEventListener('click', function(ev) {
    const rightNow = new Date();
    console.log("The current time is:", rightNow);
})