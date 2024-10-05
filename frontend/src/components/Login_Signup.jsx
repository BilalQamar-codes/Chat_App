import React from "react";
import './Login_Signup.css'

function LoginSignup(params) {
    return(
        <div className="boundry">
            <h1 className="headtext">ChatApp</h1>
            <div>
                <h1 className="">
                    Login/SignUp
                </h1>
                <div className="">
                    <h3>Welcome to Chat Application </h3>
                    <div className="emailsection">
                        <h3>Email</h3>
                        <input type="email" className="email"  />
                    </div>
                    <div className="passwordsection">
                        <h3>Password</h3>
                        <input type="password" className="email"  />
                    </div>
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <p>if you don't have an account click signup.</p>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;