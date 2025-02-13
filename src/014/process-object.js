// Run this with node --watch process-object.js "Stew Dent" 27 word-by-word space delimited
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log('... remaining args ...');

let commandArgs = process.argv.splice(2);
console.table(commandArgs);
