
// Practice exercises for performance optimization
// Welcome! This file will help you practice optimizing React app performance.

// Example: React.memo
// import React, { memo } from 'react';
// const MyComponent = memo(function MyComponent(props) {
//   return <div>{props.value}</div>;
// });
// ai: When should I use React.memo?

// TODO: Use React.memo to prevent unnecessary re-renders in a list component.

// Example: useCallback and useMemo
// import React, { useCallback, useMemo } from 'react';
// const memoizedCallback = useCallback(() => { /* ... */ }, [/* deps */]);
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// ai: What is the difference between useCallback and useMemo?

// TODO: Optimize a component that renders a large list using useMemo.

// Example: Lazy loading
// import React, { lazy, Suspense } from 'react';
// const LazyComponent = lazy(() => import('./LazyComponent'));
// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </Suspense>
//   );
// }
// ai: How do I split code in React for better performance?

// TODO: Implement lazy loading for a component in your app.
