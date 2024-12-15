import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch to Routes
import FormValidation from './FormValidation';
import Results from './Results';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
