import React, { useState } from 'react';
import '../styles/Register/register.css'; 


const Register= () => {
  const [formData, setFormData] = useState({
    type: 'personal',
    email: '',
    name: '',
    password: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="personal"
              checked={formData.type === 'personal'}
              onChange={handleChange}
            />
            Personal
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="company"
              checked={formData.type === 'company'}
              onChange={handleChange}
            />
            Company
          </label>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <p>
          By clicking Register, you agree on our <a href="/terms">terms and conditions</a>.
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
