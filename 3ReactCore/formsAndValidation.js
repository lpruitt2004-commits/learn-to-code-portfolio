
// Practice exercises for forms and validation
// Welcome! This file will help you practice building forms and adding validation in React.

// Example: Controlled input
// import React, { useState } from 'react';
// function NameForm() {
//   const [name, setName] = useState('');
//   return (
//     <form>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ai: What is a controlled component in React?

// TODO: Build a form with an input and a submit button. Show an error if the input is empty.

// Example: Basic validation
// function EmailForm() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!email.includes('@')) {
//       setError('Invalid email!');
//     } else {
//       setError('');
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={email} onChange={e => setEmail(e.target.value)} />
//       <button type="submit">Submit</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// }
// ai: How do I show validation errors in a React form?

// TODO: Add validation for a password field (e.g., minimum length).
