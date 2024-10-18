import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/login');
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to ChatApp!</h1>
        <p>
          ChatApp is a modern, secure, and user-friendly chat application that allows you to stay connected with your friends, family, and colleagues anytime, anywhere.
        </p>
        <div className="cta-buttons">
          <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
          <button className="login-btn" onClick={handleLogInClick}>Log In</button>
        </div>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>💬 Real-time messaging</li>
          <li>🔒 End-to-end encryption</li>
          <li>📱 Mobile-friendly interface</li>
          <li>👥 Group chat support</li>
          <li>🎨 Customizable chat themes</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
