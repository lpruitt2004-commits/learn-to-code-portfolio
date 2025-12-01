
// Practice exercises for Context API and useReducer
// Welcome! This file will help you practice using React's Context API and useReducer hook.

// Example: Context API
// import React, { createContext, useContext } from 'react';
// const ThemeContext = createContext('light');
// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return <button className={theme}>I am {theme} themed!</button>;
// }
// ai: What is the Context API used for in React?

// TODO: Create a context for user authentication and use it in a component.

// Example: useReducer
// import React, { useReducer } from 'react';
// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'increment': return { count: state.count + 1 };
//     case 'decrement': return { count: state.count - 1 };
//     default: return state;
//   }
// }
// function Counter() {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <span>{state.count}</span>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     </div>
//   );
// }
// ai: When should I use useReducer instead of useState?

// TODO: Use useReducer to manage the state of a todo list.
