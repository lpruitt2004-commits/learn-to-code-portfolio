# Cheat Sheet: Fullstack Quick Reference

## Connecting Frontend & Backend
- Fetch data: `fetch('/api/data').then(res => res.json())`
- CORS: Set headers in Express: `res.header('Access-Control-Allow-Origin', '*')`

## Deployment
- Build React: `npm run build`
- Serve static files in Express: `app.use(express.static('build'))`

## Auth
- JWT: `jsonwebtoken` package for Node.js
- OAuth: Use Passport.js or Auth0
