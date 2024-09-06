import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { addExercise } from '../slice/ExerciseSlice';

const ExerciseForm = () =>  {
    const dispatch = useDispatch;
    const [exerciseName, setExerciseName] = useState('');

    const handleNewExercise = (e) => {
        e.preventDefault();
        dispatch(addExercise({ id, name: exerciseName }));
        setExerciseName('');
    };

    return(
        <Container>
            <Row>
                <Col md={2}>
                    <Form onSubmit={handleNewExercise}>
                        <h2>Exercise</h2>
                        <h3>Add Exercise</h3>
                        <input
                        type="text"
                        placeholder="Enter exercise"
                        value={exerciseName}
                        onChange={(e) => setExerciseName(e.target. value)} />
                        <Button variant="primary" type="submit">Add Exercise</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default ExerciseForm;