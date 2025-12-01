
// Blog with Authentication Project Starter
// This project demonstrates a simple blog with user authentication.

// Example: Simulated login check (replace with real auth in production)
// ai: explain what this function does
function login(username, password) {
	// ai: suggest how to securely store passwords
	if (username === 'admin' && password === 'password123') {
		return true; // User is authenticated
	}
	return false;
}

// Example usage:
const isLoggedIn = login('admin', 'password123');
if (isLoggedIn) {
	console.log('Welcome, admin! You can write a new blog post.');
} else {
	console.log('Login failed. Please try again.');
}

// AI Prompt Suggestions:
// - "How do I implement JWT authentication in a blog app?"
// - "How can I hash passwords in JavaScript?"
// - "Show an example of protected routes in React."
