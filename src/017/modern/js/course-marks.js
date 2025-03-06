console.log('course-marks.js loaded');

// This will hold our Constructor Functions for the
// Course and EvaluationItem objects.
const Course = function(courseCode, courseName) {
    this.code = courseCode;
    this.name = courseName;
    this.evaluations = [];
}

export { Course }
