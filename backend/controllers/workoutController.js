const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts

async function getWorkouts(req, res) {
	const workouts = await Workout.find({}).sort({ createdAt: -1 });
	res.status(200).json(workouts);
}

// get a single workout

async function getWorkout(req, res) {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No workout found.' });
	}

	const workout = await Workout.findById(id);
	if (!workout) {
		return res.status(404).json({ error: 'No workout found.' });
	}
	res.status(200).json(workout);
}

// create new workout

async function createWorkout(req, res) {
	const { title, load, reps } = req.body;

	// add doc to db
	try {
		const workout = await Workout.create({
			title,
			load,
			reps,
		});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}

// delete a workout

// update a workout

module.exports = {
	getWorkout,
	getWorkouts,
	createWorkout,
};
