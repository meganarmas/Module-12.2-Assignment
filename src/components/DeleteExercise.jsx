import { useDispatch } from "react-redux";
import { deleteExercise } from "../Slices/ExerciseSlice";
import { Button } from "react-bootstrap";

const DeleteExercise = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteExercise(id));
    };

    return (
        <Button onclick={handleDelete}>Delete Workout</Button>
    )


}


export default DeleteExercise;