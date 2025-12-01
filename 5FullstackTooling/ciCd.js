
// Practice exercises for CI/CD basics (GitHub Actions)
// Welcome! This file will help you practice setting up Continuous Integration and Continuous Deployment (CI/CD).

// Example: GitHub Actions workflow
// ai: What is CI/CD and why is it important?
// Create a file .github/workflows/node.js.yml in your repo:
// name: Node.js CI
// on: [push]
// jobs:
//   build:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v3
//       - name: Use Node.js
//         uses: actions/setup-node@v3
//         with:
//           node-version: '18'
//       - run: npm install
//       - run: npm test

// TODO: Set up a GitHub Actions workflow to run your tests on every push.

// Example: Deploying with CI/CD
// ai: How do I automatically deploy my app after tests pass?
// Add a deploy step to your workflow (see Vercel/Netlify docs for details).
