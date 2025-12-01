# Fundamental JavaScript

JavaScript is the language of the web. It lets you add interactivity and logic to web pages.

## Variables and Data Types

Variables are used to store data values. In JavaScript, we have different data types like strings, numbers, and booleans.

```js
let name = "Alex"; // string
let age = 25; // number
let isStudent = true; // boolean
```

## Functions

Functions are blocks of code designed to perform a particular task. They are executed when "called" or "invoked".

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));
```

## Control Flow

Control flow statements allow you to dictate the order in which your code executes. This includes loops and conditionals.

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## Arrays and Objects

Arrays and objects are used to store collections of data. An array is a list-like object, and an object is a key-value pair collection.

```js
let fruits = ["apple", "banana", "cherry"];
let person = { name: "Sam", age: 30 };
```

## Practice

- Write a function that multiplies two numbers
- Create an array of your favorite colors and print each one

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
