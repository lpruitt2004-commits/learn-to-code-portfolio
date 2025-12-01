
// Practice exercises for functional programming concepts
// Welcome! This file will help you practice functional programming in JavaScript.

// Example: Higher-order function
function doubleAndApply(arr, fn) {
	return arr.map(fn);
}
let numbers = [1, 2, 3];
let doubled = doubleAndApply(numbers, n => n * 2);
console.log('Doubled:', doubled); // ai: What is a higher-order function?

// TODO: Write a function that filters out odd numbers from an array.

// Example: Pure function
function add(a, b) {
	return a + b;
}
// ai: What makes a function "pure"?

// Example: Immutability
let original = [1, 2, 3];
let newArr = [...original, 4]; // does not change original
console.log('Original:', original, 'New:', newArr);

// TODO: Use map, filter, and reduce on an array of numbers.
