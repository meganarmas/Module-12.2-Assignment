import { useSelector } from "react-redux";
import DeleteExercise from "./DeleteExercise";

const ViewExercise = () => {
    const exercises = useSelector((state) => state.exercises.exercises);

    return (
        <div className="view">
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                    {exercise.name} - {exercise.duration} minutes - {exercise.calories}
                    <DeleteExercise id={exercise.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewExercise;