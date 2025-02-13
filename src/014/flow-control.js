console.log('Running my flow-control.js script');

const rollDie = function() {
    let rnd = Math.random();
    rnd = rnd * 6; // floating-point value > 0  < 6
    rnd = Math.ceil(rnd); // 1 <= rnd <= 6;
    return rnd;
}

// Test our rollDie() function
// console.log('Testing rollDie(): ', rollDie());

// Game - Street Craps
const shootDie = function() {
    let firstDie = rollDie();
    let secondDie = rollDie();
    let total = firstDie + secondDie;
    let message = `You rolled a ${total}`;

    // Determine win/lose situation
    if(total === 7 || total === 11) {
        message += ' - You Win!!';
    } else if(total === 2 || total === 3 || total === 12) {
        message += ' - You lose 😢'; // Windows + .
    } else {
        // TODO: Complete this game for the points
        // Playing the point
        let point = total;
        let count = 0;
        message += ' - attempting to match point\n\t';
        // Do-While statement
        do {
            // repeating logic
            message += '.';
            count++;
            firstDie = rollDie();
            secondDie = rollDie();
            total = firstDie + secondDie;
        } while(total !== point && total !== 7);

        // Report on the results
        message += `\nAfter ${count} more rolls`;
        if(total === 7) {
            message += ' - you lost 😭';
        } else {
            message += ' you won! 🎉';
        }
    }
    console.log(message);
}

// Call my game function
shootDie();

// =================================
// What is looping?
const learnLoops = function() {
    console.log('\n======\nExplore looping...\n');
    // While statements
    while(rollDie() !== 6) {
        // Run when the conditional expression is truthy
        console.log('Not a 6...');
    }
    console.log('Finally! A 6');

    // Let's do something a little less random
    let message = 'Counting to ten: ';
    let count = 1;
    while(count <= 10) {
        message += count + ', ';
        count++; // Increment operator
    }
    console.log(message);
    console.log('done with while loop\n\ndemo of for loop');
    message = 'Counting with for statement:\n';
    for(let counter = 0; counter <= 10; counter++) {
        // my repeating logic...
        message += counter + ' | ';
    }
    console.log(message);
}

// learnLoops(); // TODO: Comment out when done...

// Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13, ....
//               \/ \ /
//                |  |- Current
//                |- Previous
//                     , Next value

/**
 * Generates the string of Fibonacci numbers up to a certain quantity
 * @param {number} quantity The quantity of numbers in the sequence
 * @returns {string} - A string with the Fibonacci sequence
 */
const buildFibonacciSequence = function(quantity) {
    let sequence;
    if(quantity <= 0) {
        sequence = 'Invalid quantity - must be greater than zero';
    } else if(quantity === 1) {
        sequence = '1';
    } else {
        // Use a loop to build the sequence
        // setup of variables
        let previous = 0;
        let current = 1;
        sequence = `${current}`;
        // begin the loop
        for(let count = 2; count <= quantity; count++) {
            // console.log(`calc: next = ${previous} + ${current}`);
            let next = previous + current;
            sequence += `, ${next}`;
            // update values for the next time through the loop
            previous = current;
            current = next;
            // console.log(`previous: ${previous}, current: ${current}`);
        }
    }

    return sequence;
}

console.log('\n\n');
// console.log(buildFibonacciSequence(1));
// console.log(buildFibonacciSequence(7));

// Factorial   5!
//             5 x 4 x 3 x 2 x 1 => 120
