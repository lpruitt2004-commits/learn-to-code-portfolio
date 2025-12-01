# Cheat Sheet: Backend Quick Reference

## Node.js
- Run script: `node app.js`
- Install package: `npm install express`
- Require module: `const express = require('express')`

## Express
- Create server: `const app = express();`
- Route: `app.get('/', (req, res) => res.send('Hi'))`
- Middleware: `app.use(express.json())`

## Database
- Connect MongoDB: `mongoose.connect('mongodb://localhost/db')`
- Connect PostgreSQL: `pg.connect()`

## Deployment
- Set env var: `export PORT=3000`
- Start server: `node app.js`
