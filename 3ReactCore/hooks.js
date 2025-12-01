
// Practice exercises for hooks (useState, useEffect, custom)
// Welcome! This file will help you practice using React hooks.

// Example: useState
// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// }
// ai: What is a hook in React?

// TODO: Create a component that uses useState to toggle dark/light mode.

// Example: useEffect
// import React, { useEffect } from 'react';
// function Timer() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Tick');
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
//   return <div>Timer running! Check the console.</div>;
// }
// ai: When does useEffect run?

// TODO: Use useEffect to fetch data from an API when a component mounts.

// Example: Custom hook
// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);
//   const increment = () => setCount(count + 1);
//   return [count, increment];
// }
// ai: How do I write a custom hook in React?

// TODO: Write a custom hook that tracks window width.
