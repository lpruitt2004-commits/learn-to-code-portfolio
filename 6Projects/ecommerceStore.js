
// E-commerce/Storefront Project Starter
// This project demonstrates a simple online store with products and a cart.

// Example: Product list and cart logic
// ai: explain what these arrays represent
const products = [
	{ id: 1, name: 'T-shirt', price: 20 },
	{ id: 2, name: 'Mug', price: 10 },
];
let cart = [];

// ai: show how to add a product to the cart
function addToCart(productId) {
	const product = products.find(p => p.id === productId);
	if (product) {
		cart.push(product);
	}
}

// ai: show how to view the cart
function viewCart() {
	return cart;
}

// Example usage:
addToCart(1);
addToCart(2);
console.log('Cart:', viewCart());

// AI Prompt Suggestions:
// - "How do I manage cart state in React?"
// - "Show an example of a checkout form."
// - "How can I display products dynamically from an API?"
