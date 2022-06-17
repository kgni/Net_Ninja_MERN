const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ workouts: '' });
});
router.get('/:id', (req, res) => {
	res.json({ workout: '' });
});
router.post('/', (req, res) => {
	res.json({ workout: '' });
});
router.delete('/:id', (req, res) => {
	res.json({ workout: '' });
});
router.patch('/:id', (req, res) => {
	res.json({ workout: '' });
});
	
module.exports = router;
