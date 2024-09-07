import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../Slices/ExerciseSlice";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const AddExercise = () => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExercise({ id: Date.now(), name, duration, calories }));
        setName('');
        setDuration('');
        setCalories('');
    }


    return(
        <Container>
            <Row>
                <Col md={2}>
                    <Form.Group>
                        <input
                        type="text"
                        placeholder="Enter exercise name"
                        value={name}
                        onChange={(e) => setName(e.target. value)} />
                        </Form.Group>

                        <Form.Group>
                        <input
                        type="number"
                        placeholder="Enter duration of exercise"
                        value={duration}
                        onChange={(e) => setDuration(e.target. value)} />
                        </Form.Group>

                        <Form.Group>
                        <input
                        type="number"
                        placeholder="Enter calories burned"
                        value={calories}
                        onChange={(e) => setCalories(e.target. value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Add Exercise</Button>
                    
                </Col>
            </Row>
        </Container>
    )
};

export default AddExercise;