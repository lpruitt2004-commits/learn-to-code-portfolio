
// Practice exercises for async JS: callbacks, promises, async/await
// Welcome! This file will help you practice asynchronous JavaScript.

// Example: Callback
function fetchData(callback) {
	setTimeout(() => {
		callback('Data loaded!');
	}, 1000);
}
fetchData(function(result) {
	console.log(result); // ai: What is a callback function?
});

// TODO: Write a function that takes a callback and calls it after 2 seconds.

// Example: Promise
let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Promise resolved!'), 1000);
});
promise.then(result => console.log(result));

// TODO: Create a promise that rejects after 1 second and handle the error.

// Example: async/await
async function loadAsync() {
	let data = await promise;
	console.log('Async/await:', data);
}
loadAsync();
// ai: How does async/await make code easier to read?

// TODO: Write an async function that waits for 2 seconds and then logs a message.
