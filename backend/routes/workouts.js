const express = require('express');
const router = express.Router();
const {
	getWorkout,
	getWorkouts,
	createWorkout,
} = require('../controllers/workoutController');

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);
// DELETE a workout
router.delete('/:id', (req, res) => {
	res.json({ msg: 'DELETE a workout' });
});
// UPDATE a workout
router.patch('/:id', (req, res) => {
	res.json({ msg: 'UPDATE a workout' });
});

module.exports = router;
