import React, { useState } from "react";
import './Login_Signup.css';
import User from "../API/userRequests";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState(false);
    const [loading, setLoading] = useState(false); // State to track loading status
    const initial_user = {
        username: '',
        email: '',
        password: '',
        phoneNumber: ''
    };
    const [user, setUser] = useState(initial_user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
    };

    function handleSignUp() {
        setSignUp(true);
    }
    
    function handleLogin() {
        setSignUp(false);
    }

    const SignUp = async () => {
        setLoading(true); // Set loading to true
        try {
            console.log("Sign Up initiated:", user); // Log the user data
            const res = await User.post('/register', user);
            console.log("Sign Up response:", res); // Log the response
            if (res.status === 200) {
                alert(`Error: ${res.message}`);
                setSignUp(!signUp);
            } else {
                alert(`Error: ${res.statusText}`); // Show error if status is not 200
            }
        } catch (error) {
            console.error("Sign Up error:", error); // Log the error to the console
            alert(`An error occurred: ${error.response.data.message}`);
        } finally {
            setLoading(false); // Set loading back to false
        }
    }

    const LogIn = async () => {
        setLoading(true); // Set loading to true
        try {
            console.log("Log In initiated:", user); // Log the user data
            const res = await User.post('/login', user);
            console.log("Log In response:", res); // Log the response
            if (res.status === 200) {
                navigate('/chatlist', { state: { user: res.data.user } }); // Correctly pass user data
            } else {
                alert(`Error: ${res.statusText}`); // Show error if status is not 200
            }
        } catch (error) {
            console.error("Log In error:", error); // Log the error to the console
            alert(`An error occurred: ${error.response.data.message}`);
        } finally {
            setLoading(false); // Set loading back to false
        }
    }
    
    

    return (
      <div className="boundary">
        <h1 className="headtext">ChatApp</h1>
        <div>
          <h1>Login/SignUp</h1>
          <div>
            <h3>Welcome to Chat Application</h3>
            <div className="email-section">
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                className="email"
                required
                onChange={handleChange}
              />
            </div>
            {signUp && (
              <>
                <div className="username">
                  <h3>Name</h3>
                  <input
                    type="text"
                    name="username"
                    className="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="phone-number">
                  <h3>Phone Number</h3>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="phone"
                    required
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="password-section">
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                className="password"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            {!signUp && (
              <>
                <p>If you don't have an account, click <span className="link" onClick={handleSignUp}>Sign Up</span>.</p>
              </>
            )}
            {signUp && (
              <>
                <p>Already have an account? Click <span className="link" onClick={handleLogin}>Log In</span>.</p>
              </>
            )}
          </div>
          <div>
            {!signUp && (
              <button onClick={LogIn} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            )}
          </div>
          <div>
            {signUp && (
              <button onClick={SignUp} disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
}

export default LoginSignup;
