
// Practice exercises for prototypes, inheritance, and classes
// Welcome! This file will help you practice using prototypes and classes in JavaScript.

// Example: Prototype
function Animal(name) {
	this.name = name;
}
Animal.prototype.speak = function() {
	return this.name + ' makes a noise.';
};
let dog = new Animal('Rex');
console.log(dog.speak()); // ai: What is a prototype in JavaScript?

// TODO: Add a new method to Animal's prototype and use it.

// Example: Class syntax
class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	describe() {
		return `${this.title} by ${this.author}`;
	}
}
let myBook = new Book('1984', 'George Orwell');
console.log(myBook.describe());

// TODO: Create a subclass of Book called ComicBook with an extra property.

// ai: What is the difference between a class and a prototype?
