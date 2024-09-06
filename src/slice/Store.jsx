import { configureStore } from "@reduxjs/toolkit";
import ExerciseSlice from "./ExerciseSlice";

export const store = configureStore({
    reducer: {
        exercises: ExerciseSlice,
    },
});