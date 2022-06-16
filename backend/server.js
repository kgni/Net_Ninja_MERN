require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// ROUTES
app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to the app' });
});

// Listen for requests

app.listen(PORT || 8000, () => {
	console.log(`Listening on port ${PORT}`);
});
