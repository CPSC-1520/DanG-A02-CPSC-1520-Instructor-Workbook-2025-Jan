console.log('course-marks.js loaded');

// This will hold our Constructor Functions for the
// Course and EvaluationItem objects.
const Course = function(courseCode, courseName) {
    this.code = courseCode;
    this.name = courseName;
    this.evaluations = [];
}

const EvaluationItem = function(name, weight, earned, possible) {
    this.name = name;
    this.weight = weight;
    this.earned = earned;
    this.possible = possible;
}

export { Course, EvaluationItem }
