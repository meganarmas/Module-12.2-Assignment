import { configureStore } from "@reduxjs/toolkit";
import ExerciseSlice from "./Slices/ExerciseSlice";

export const store = configureStore({
    reducer: {
        exercises: ExerciseSlice,
    },
});