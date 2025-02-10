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
    } // TODO: Complete this game for the points

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

learnLoops(); // TODO: Comment out when done...

