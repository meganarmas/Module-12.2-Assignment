import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
    name: 'exercise',
    initialState: {
        exercises: {}
    },
    reducers: {
        addExercise: (state, action) => {
            const { id, name } = action.payload;
            state.exercises[id] = { name };
        },
    }
});

export const { addExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;