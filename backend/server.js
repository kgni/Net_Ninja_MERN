require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const workoutRoutes = require('./routes/workouts');

// MIDDLEWARE

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// ROUTES
app.use('/api/workouts/', workoutRoutes);

// Listen for requests

app.listen(PORT || 8000, () => {
	console.log(`Listening on port ${PORT}`);
});
