import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FetchQuiz from "../src/components/FetchQuiz/index";
import Quiz from '../src/components/Quiz/index';


function App() {
  return (
    <>
    <Routes>
      <Route path='/quiz' element={<Quiz />} /> 
      <Route path='/' element={<FetchQuiz />} />
    </Routes>
    </>
  );
}

export default App;
