// main.js
// Entry point for Prep Foundations module

console.log('Welcome to Prep & Foundations!');

// Simple Calculator Demo
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operator').value;
  let result = '';
  if (!isNaN(num1) && !isNaN(num2)) {
    switch(op) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 !== 0 ? num1 / num2 : 'Error: Divide by zero'; break;
      default: result = 'Invalid operator';
    }
  } else {
    result = 'Enter valid numbers';
  }
  document.getElementById('calcResult').textContent = `Result: ${result}`;
}

// You can add more interactive demos below
