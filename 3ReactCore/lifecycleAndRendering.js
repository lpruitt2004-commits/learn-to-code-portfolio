
// Practice exercises for lifecycle, rendering, lists, keys
// Welcome! This file will help you practice React component lifecycle and rendering techniques.

// Example: Component lifecycle (with useEffect)
// import React, { useEffect } from 'react';
// function Logger() {
//   useEffect(() => {
//     console.log('Component mounted!');
//     return () => console.log('Component unmounted!');
//   }, []);
//   return <div>Check the console for lifecycle logs.</div>;
// }
// ai: What is the component lifecycle in React?

// TODO: Log a message when a component mounts and unmounts.

// Example: Rendering a list
// const items = ['Apple', 'Banana', 'Cherry'];
// function ItemList() {
//   return (
//     <ul>
//       {items.map((item, idx) => <li key={idx}>{item}</li>)}
//     </ul>
//   );
// }
// ai: Why do I need to use a key prop when rendering lists?

// TODO: Render a list of objects with unique keys and display their properties.
