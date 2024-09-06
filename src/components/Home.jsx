import React from "react";
import { useSelector } from 'react-redux';

const Home = () => {
    const exerciseState = useSelector((state) =>  state.exercise);
    const exercises = Object.entries(exerciseState.exercise);

    return (
        <div>
            <h2>Exercise</h2>
           {exercises.length > 0 ? (
            exercises.map(([id, { name }]) => (
                <div key={id}>
                    <p>Exercise: {name}</p>
                </div>
            ))
           ) : (
            <p>No exercises have been added.</p>
           )}
        </div>
    );
};

export default Home;