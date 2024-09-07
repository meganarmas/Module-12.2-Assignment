import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    exercises: [],
}

export const exercisesSlice = createSlice({
    name:  'exercises',
    initialState,
    reducers: {
     addExercise: (state, action) => {
        state.exercises.push(action.payload);
     },
     deleteExercise: (state, action) => {
      state.exercises = state.exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
     },
    },

});

export const { addExercise, deleteExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;