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

import { DomBuilder } from './dom-builder';
let footInfo = new DomBuilder();
footInfo
    .create('div')
    .and('span', 'Styles by PicoCSS')
    .andText(' | ')
    .and('span', 'Copyleft 2025')
    .andText(' | ')
    .and('span', 'Author: Dan Gilleland')
    .with('h4').andText('Buy my course on Advanced JavaScript');

let footer = document.querySelector('footer');
footer.appendChild(footInfo.fragment);
/* 
<footer>
  <div>
    <span>Styles by PicoCSS</span>
    |
    <span>Copyleft 2025</span>
    |
    <span>Author: Dan Gilleland</span>
    <h4>Buy my course on Advanced JavaScript</h4>
  </div>
</footer>
*/ 
