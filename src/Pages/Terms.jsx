import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Terms/terms.css';

const Terms = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAgreeClick = () => {
    // Navigate back to the register page
    navigate('/register'); // Replace '/register' with the actual path of your register page
  };

  return (
    <div className="terms-and-conditions">
      <div className="terms-box">
        <h1>Terms and Conditions</h1>
        <p>Welcome to [Your Company Name]. By using our website and registering for an account, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
        <h2>Use of the Website</h2>
        <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice...</p>
      </div>
      <div className="button-container">
        <button onClick={handleAgreeClick}>I Agree</button>
      </div>
    </div>
  );
};

export default Terms;
