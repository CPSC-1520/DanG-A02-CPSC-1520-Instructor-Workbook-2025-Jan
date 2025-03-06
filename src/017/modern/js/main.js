console.log('Loaded main.js...');

import { Course, EvaluationItem } from './course-marks';

let demo = new Course('CPSC-1520', 'Learn JavaScript From the Experts');
demo.evaluations.push(new EvaluationItem('Assignment 1', 10, 25, 29));


console.log(demo);
