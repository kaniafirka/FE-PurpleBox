// src/components/Results.js
import React from 'react';
import { useSelector } from 'react-redux'; // To access Redux state

const Results = () => {
    const formData = useSelector((state) => state.formData); // Access form data from Redux store

  return (
    <div className="result-container">
      <div className="result-box">
        <h2>Form Data Submitted</h2>
        <div className="result-item">
          <span className="label">Name:</span>
          <span className="value">{formData.name}</span>
        </div>
        <div className="result-item">
          <span className="label">Email:</span>
          <span className="value">{formData.email}</span>
        </div>
        <div className="result-item">
          <span className="label">Phone:</span>
          <span className="value">{formData.phone}</span>
        </div>
        <div className="result-item">
          <span className="label">Age:</span>
          <span className="value">{formData.age}</span>
        </div>
        <div className="result-item">
          <span className="label">Password:</span>
          <span className="value">{formData.password}</span>
        </div>
        <div className="result-item">
          <span className="label">Confirm Password:</span>
          <span className="value">{formData.confirmPassword}</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
