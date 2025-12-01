
// Practice exercises for error handling and debugging
// Welcome! This file will help you practice handling errors in JavaScript.

// Example: try/catch
try {
	// ai: What happens if I try to parse invalid JSON?
	JSON.parse('invalid json');
} catch (error) {
	console.log('Caught an error:', error.message);
}

// TODO: Write a function that throws an error if a number is negative.
// Use try/catch to handle the error and print a friendly message.

// Example: Custom error
function divide(a, b) {
	if (b === 0) {
		throw new Error('Cannot divide by zero!');
	}
	return a / b;
}

try {
	console.log(divide(10, 0));
} catch (e) {
	console.log('Custom error caught:', e.message);
}

// ai: How do I create my own error types in JavaScript?
