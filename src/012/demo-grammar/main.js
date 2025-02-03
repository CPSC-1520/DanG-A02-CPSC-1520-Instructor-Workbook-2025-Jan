/* The If-Else statement follows this grammar:

if(conditionalExpression)
    statementOrStatementBlock
else
    statementOrStatementBlock

where the "conditionalExpression" is some expression that will result in a true or false value, and the "statementOrStatementBlock" is either a single instruction/statement or a set of statements inside curly braces (statement block).

-----

Relational Operators

==      "is equal to" - equality operator
!=      "is not equal to" - equality operator
===     "is equal to" - identity operator
!==     "is not equal to" - identity operator
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to

*/

let numberFive = 5;
let numberEight = 8;   // literal number
let stringEight = '8'; // literal string
let myName = 'Dan';

// Let's do a bit of if/else
if(numberFive < numberEight)
    console.log('Expected 5 < 8');

// JavaScript allows for "truthy" and "falsy" values
if(numberFive)
    console.log('true side');
else
    console.log('false side');
// other "truthy" values
if(myName)
    console.log(`${myName} is truthy`);

// JavaScript "falsy" values
const logTruth = function(value) {
    if(value)
        console.log(`'${value}' is truthy`);
    else
        console.log(`'${value}' is falsy`);
}

logTruth(0);
logTruth('');
logTruth(null);
logTruth(undefined);
logTruth(numberEight);
logTruth(stringEight);
let element = document.querySelector('h1'); // is on the page
logTruth(element);
element = document.querySelector('input'); // not on the page
logTruth(element);
logTruth({}); // An empty object
element = {};
logTruth(element);
