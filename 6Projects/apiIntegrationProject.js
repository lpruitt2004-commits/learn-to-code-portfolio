
// API Integration Project Starter
// This project demonstrates how to fetch and display data from an external API in a beginner-friendly way.

// Example: Fetching data from a public API (e.g., JSONPlaceholder)
// ai: explain what fetch does
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => {
		// ai: suggest how to display this data in the UI
		console.log('Fetched posts:', data);
		// You could render this data in your app's UI here
	})
	.catch(error => {
		// ai: explain error handling
		console.error('Error fetching posts:', error);
	});

// AI Prompt Suggestions:
// - "How do I fetch data from an API in React?"
// - "Show an example of error handling with fetch."
// - "How can I display API data in a table?"
