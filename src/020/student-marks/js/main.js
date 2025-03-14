// main.js
console.log('main.js');
// Apply the stylesheet
import '@picocss/pico/css/pico.css';

import { populateAbout } from './about-ui';
import { populateCourseInformation } from './course-marks-ui';

// Get the contents for the About dialog
fetch('./ReadMe.md')
    .then(resp => resp.text())
//                \_________/
//                  |
//                 \|/
    .then(populateAbout);

fetch('./data/courses.json')
    .then(resp => resp.json())
    .then(populateCourseInformation);
