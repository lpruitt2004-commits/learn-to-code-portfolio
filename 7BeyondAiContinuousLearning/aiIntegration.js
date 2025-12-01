
// AI Integration Project Starter
// This example shows how to call the OpenAI API from JavaScript (Node.js or browser with fetch)

// ai: explain what this function does
async function getOpenAICompletion(prompt) {
	// ai: explain what fetch is doing here
	const response = await fetch('https://api.openai.com/v1/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your API key
		},
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: prompt,
			max_tokens: 50
		})
	});
	const data = await response.json();
	// ai: suggest how to display this in a React component
	return data.choices[0].text;
}

// Example usage:
// getOpenAICompletion('Tell me a joke').then(console.log);

// AI Prompt Suggestions:
// - "How do I use the OpenAI API in React?"
// - "Show an example of integrating Hugging Face models."
// - "How can I display AI-generated text in my app?"
