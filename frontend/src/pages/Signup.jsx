// frontend/src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./SignUp.css"; // Update to the actual CSS file name

function SignUp() {
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', res.user);
      alert('Signed up successfully!');
      navigate('/chatlist', { state: { email: res.user.email, uid: res.user.uid } });
    } catch (error) {
      console.error('Sign Up Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = () => {
    navigate('/login'); // Navigate to the sign-in page
  };

  return (
    <div className="container"> {/* Change from "signup-container" to "container" */}
      <h1 className="headtext">ChatApp</h1>
      <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
      <p>
        Already have an account?{' '}
        <span onClick={handleSignIn} style={{ color: 'blue', cursor: 'pointer' }}>
          Sign In
        </span>
      </p>
    </div>
  );  
}

export default SignUp;
