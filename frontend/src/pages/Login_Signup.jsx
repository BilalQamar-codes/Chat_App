import React, { useState } from "react";
import SignIn from './Login'; // Ensure your SignIn component is correctly imported
import SignUp from './Signup'; // Ensure your SignUp component is correctly imported
// import "./Login_Signup.css"; // Uncomment if you have a CSS file for styling

function LoginSignup() {
  const [signUpMode, setSignUpMode] = useState(false);

  const toggleSignIn = () => {
    setSignUpMode(prevMode => !prevMode); // Toggle the signup mode
  };

  return (
    <div className="boundary">
      {signUpMode ? (
        <SignUp toggleSignIn={toggleSignIn} />
      ) : (
        <SignIn toggleSignIn={toggleSignIn} />
      )}
    </div>
  );
}

export default LoginSignup;
