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
