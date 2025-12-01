
// Practice exercises for Fetch API, AJAX, HTTP basics
// Welcome! This file will help you practice making HTTP requests in JavaScript.

// Example: Fetching data from an API
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(data => {
		console.log('Fetched data:', data);
	})
	.catch(error => {
		console.log('Fetch error:', error);
	});
// ai: What is the difference between fetch and XMLHttpRequest?

// TODO: Use fetch to get a list of posts from the same API and print the titles.

// Example: Async/await with fetch
async function getTodo() {
	try {
		let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
		let data = await response.json();
		console.log('Async/await fetched:', data);
	} catch (e) {
		console.log('Error with async/await fetch:', e);
	}
}
getTodo();

// TODO: Write an async function to fetch and display user data from the API.
