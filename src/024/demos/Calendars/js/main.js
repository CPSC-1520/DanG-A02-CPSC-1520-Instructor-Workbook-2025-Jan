function buildDaySlot(date) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(date.getDate());
    div.appendChild(span);
    span.appendChild(textNode);
    return div;
}

// Add an event listener for the <input type="month" /> control
document.getElementById('selected-month')
    .addEventListener('change', buildCalendar);


function buildCalendar(evt) {
    let calendarContainer = document.getElementById('calendar');
    let selection = evt.target.value;  // '2025-04' === April, 2025
    
    let [year, month] = selection.split('-'); // string[]
    // Creating a date object with year/month only defaults the date to
    // the first date of the month
    let today = new Date(year, month - 1);  // This could be any day of the week
    // Adjust for when we want our calendar to start
    today.setDate(today.getDate() - (today.getDay() + 1));
    //            \____ 1 ______/   \___ offset _______/
    //                                   to "before" the week begins

    // Reset the calendar
    calendarContainer.innerHTML = '';
    for (let count = 0; count < 35; count++) {
        today.setDate(today.getDate() + 1); // Add one day
        calendarContainer.appendChild(buildDaySlot(today));
    }
}