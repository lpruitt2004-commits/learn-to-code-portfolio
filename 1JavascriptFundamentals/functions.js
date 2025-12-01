
// Practice exercises for functions, scope, and closures
// Welcome! This file will help you practice writing and using functions in JavaScript.

// Example: Declaring a function
function greet(name) {
	// ai: How do I return a value from a function?
	return 'Hello, ' + name + '!';
}
console.log(greet('Beginner'));

// TODO: Write a function that adds two numbers and returns the result.

// Example: Function scope
let globalVar = 'I am global!';
function showScope() {
	let localVar = 'I am local!';
	console.log(globalVar); // accessible
	console.log(localVar); // accessible
}
showScope();
// console.log(localVar); // ai: Why does this line cause an error?

// Example: Closures
function makeCounter() {
	let count = 0;
	return function() {
		count++;
		return count;
	};
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// ai: What is a closure and why is it useful?

// TODO: Create your own closure that remembers a value.
