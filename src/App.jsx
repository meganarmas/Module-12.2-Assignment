import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ExerciseForm from './components/Exercise';
import { Provider } from 'react-redux';
import NavigationBar from './components/Navigation';
import { store } from './slice/Store';

function App() {
  return(
    <Provider store={store}>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise" element={<ExerciseForm />} />
      </Routes>
    </Provider>
  );
}

export default App;
