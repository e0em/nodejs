#!/usr/bin/nodejs 
console.log('Hi World');
console.log('The file name:');
console.log(__filename);
var args = process.argv.slice(2);
console.log('Hello ' + args.join(' ') + '!');
