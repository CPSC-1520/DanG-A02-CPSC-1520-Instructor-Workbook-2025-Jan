/* UI Notes:
    - Making some presumptions about styling being based on PicoCSS
    - <section id="courses">
        - The container to be populated with information on each course
    - <template id="course-shell">
        - A template for each course. This is "bare-bones" in that it contains a <details> element with placeholders for the course name and code. Individual evaluation items would need to be dynamically appended to this HTML.
        - For information on using this, see [A more involved example](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#a_more_involved_example)

    Here's an advanced example of the template, but with slots.
    ```html
        <template id="course-shell">
            <details>
                <summary><span class="course-code"></span> <span class="course-name"></span> &mdash; <span class="summary-marks"></span></summary>
                <section class="grid grid-col-4"></section>
                <hr />
            </details>
        </template>
    ```
*/
import { Course } from './course-marks';

const populateCourseInformation = function(jsonData) {
    // #courses     #course-shell   .course-code    .course-name    .summary-marks
    //  section.grid
    let container = document.getElementById('courses');
    let template = document.getElementById('course-shell');
    jsonData.forEach(item => {
        // Access the data
        let course = Course.fromJsonObject(item);
        
        // Make a clone/copy of the template's content
        let courseContainer = template.content.cloneNode(true);
        //                            \______/ \_____________/
        //                   <details></details>     |- deep copy

        // Show the code
        let span = courseContainer.querySelector('.course-code');
        let textNode = document.createTextNode(course.code);
        span.appendChild(textNode);
        
        // Show the name
        span = courseContainer.querySelector('.course-name');
        textNode = document.createTextNode(course.name);
        span.appendChild(textNode);

        // Show the summary of the marks that have been earned to-date
        let mark = document.createElement('mark');
        let earnedToDate = course.getTotalEarned();
        let total = course.getTotalWeight();
        let text = `${earnedToDate.toFixed(1)} %`;
        textNode = document.createTextNode(text);
        mark.appendChild(textNode);
        text = ` (out of ${total})`;
        textNode = document.createTextNode(text);
        span = courseContainer.querySelector('.summary-marks');
        span.appendChild(mark);
        span.appendChild(textNode);
        
        // Build out all the detailed evaluation items for the course.
        // <section class="grid">
        let grid = courseContainer.querySelector('.grid');

        course.evaluations.forEach((item) => {
            let itemElement = createEvaluationItemElement(item);
            grid.appendChild(itemElement);
        })

        container.appendChild(courseContainer);
    });
}

// TODO: Consolidate imports to top of file
import { EvaluationItem } from './course-marks';

const createEvaluationItemElement = 
    function(/** @type {EvaluationItem} */ evalItem) {
    // Get the details from the evalItem
    // Destructuring syntax
    let { name, weight, earned, possible } = evalItem;
    let earnedWeight = evalItem.getWeightedPercent();
    let earnedPercent = evalItem.getPercent();

    // Build the document fragment
    let div = document.createElement('div');
    // TODO: populate with details
    let textNode = document.createTextNode(`${name}:`);
    let space = document.createTextNode(' ');
    div.appendChild(textNode);
    div.appendChild(space);
    let tag = document.createElement('strong');
    textNode = document.createTextNode(`${weight} %`);
    tag.appendChild(textNode);
    div.appendChild(tag);
    let br = document.createElement('br');
    div.appendChild(br);

    if(earned) {
        let text = `Earned ${earned}/${possible}`;
        tag = document.createElement('small');
        textNode = document.createTextNode(text);
        tag.appendChild(textNode);
        div.appendChild(tag);
    } else {
        textNode = document.createTextNode('TBD');
        tag = document.createElement('em');
        tag.appendChild(textNode);
        div.appendChild(tag);
    }
    div.appendChild(br.cloneNode());

    // TODO: figure out where to put the earnedWeight and earnedPercent values.
    return div;
}

export { populateCourseInformation }
