
// Practice exercises for testing and error boundaries
// Welcome! This file will help you practice testing React components and using error boundaries.

// Example: Testing with React Testing Library
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import MyComponent from './MyComponent';
// test('renders a message', () => {
//   render(<MyComponent />);
//   expect(screen.getByText(/hello/i)).toBeInTheDocument();
// });
// ai: How do I write a test for a React component?

// TODO: Write a test for a button that increments a counter when clicked.

// Example: Error boundaries
// import React from 'react';
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//   componentDidCatch(error, info) {
//     // Log error
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }
// ai: When should I use an error boundary in React?

// TODO: Add an error boundary to your app and test it by throwing an error in a child component.
