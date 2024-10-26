import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignUp.css"; // Update to the actual CSS file name

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', res.user);
      navigate('/chatlist', { state: { email: res.user.email, uid: res.user.uid } });
    } catch (error) {
      console.error('Login Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    navigate('/register'); 
  };

  return (
    <div className="container"> {/* Change from "signin-container" to "container" */}
      <h1 className="headtext">ChatApp</h1>
      <h3>Login</h3>
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
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p>
        Don't have an account? 
        <span onClick={handleSignUp} style={{ color: 'blue', cursor: 'pointer' }}>
          SignUp
        </span>
      </p>
    </div>
  );  
}

export default SignIn;
