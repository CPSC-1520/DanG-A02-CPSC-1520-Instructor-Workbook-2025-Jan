function buildDaySlot(text) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(text);
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
    let endOfMonth = new Date(year, month, 0);
    let minDays = endOfMonth.getDate() + today.getDay() + 1;
    let weeks = minDays > 35 ? 6 : 5;
    // Adjust for when we want our calendar to start
    today.setDate(today.getDate() - (today.getDay() + 1));
    //            \____ 1 ______/   \___ offset _______/
    //                                   to "before" the week begins

    // Reset the calendar
    calendarContainer.innerHTML = '';

    // Add the days of the week
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let count = 0; count < days.length; count++) {
        calendarContainer.appendChild(buildDaySlot(days[count]));
    }

    // Add the dates of the month (e.g.: 1, 2, 3, etc.)
    for (let count = 0; count < days.length * weeks; count++) {
        today.setDate(today.getDate() + 1); // Add one day
        calendarContainer.appendChild(buildDaySlot(today.getDate()));
    }
}