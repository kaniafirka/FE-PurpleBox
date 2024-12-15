import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from './actions'; // Import Redux action
import './App.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for routing

const FormValidation = () => {
  const [formData, setFormDataState] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch(); // Redux dispatch hook
  const navigate = useNavigate(); // Use navigate for redirection

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only alphabets';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else {
      const age = parseInt(formData.age);
      if (isNaN(age) || age < 18 || age > 100) {
        newErrors.age = 'Age must be between 18 and 100';
      }
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Dispatch form data to Redux store
      dispatch(setFormData(formData));
      // Redirect to the results page
      navigate('/results');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="input-group">
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type={key.includes('password') ? 'password' : 'text'}
            name={key}
            value={value}
            onChange={handleChange}
            placeholder={`Enter your ${key}`}
          />
          {errors[key] && <span className="error-message">{errors[key]}</span>}
        </div>
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default FormValidation;
