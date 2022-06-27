import React, { useState, useEffect } from 'react';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
	const [workouts, setWorkouts] = useState(null);
	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch('/api/workouts');
			const data = await response.json();

			if (response.ok) {
				setWorkouts(data);
			}
		};
		fetchWorkouts();
	}, []);
	return (
		<div className="home">
			<div className="workouts">
				{!workouts && <p>Loading...</p>}
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workout._id} workout={workout} />
					))}
			</div>
			<WorkoutForm setWorkouts={setWorkouts} />
		</div>
	);
};

export default Home;
