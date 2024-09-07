import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddExercise from './components/Exercise';
import { Provider } from 'react-redux';
import NavigationBar from './components/Navigation';
import ViewExercise from './components/ViewExercise';
import DeleteExercise from './components/DeleteExercise';
import { store } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return(
    <Provider store={store}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-exercise" element={<AddExercise />} />
        <Route path="/view-exercise" element={<ViewExercise />} />
        <Route path="delete-exercise" element={<DeleteExercise />} />
      </Routes>
    </Provider>
  );
}

export default App;
