// node --watch arrays-and-arrows.js
console.log('loaded script...');

let names = ['Stewart Dent', 'Igor Aphul', 'Anna Lyst', 'Phobe Nomiminal', 'Phil Harmonic'];

// .forEach() - do something with each element
names.forEach((name, position) => {
    // I'm not actually interested in returning anything
    console.log(`${position}) I found ${name}.`);
});

// .find() and .findLast() - find the first that matches some condition
let result = names.find(aName => aName.startsWith('Ph'));
// A predicate is a function     \___ boolean ________/
// that returns a boolean value
console.log(`\nI found ${result}.`);

result = names.findLast(aName => aName.startsWith('Ph'));
console.log(`\nThis time I found ${result}`);

// .map() - transform data to produce a new array
result = names.map(x => {
    let parts = x.split(' ');
    let lastIndex = parts.length - 1;
    return { firstName: parts[0], lastName: parts[lastIndex]};
});
console.table(result);

// .filter() - produce an array of items that match some condition
result = names.filter(x => x.toLowerCase().includes('ph'));
console.log("\nHere are names that include 'ph'");
console.table(result);
