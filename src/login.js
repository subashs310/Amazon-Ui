import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import '../src/login.css'
import Amazonimg from '../src/assets/amazon_logo_dark.png';

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const loginProcess = () => {
        if (user === "thor" && pass === "1234") {
            navigate("/home"); 
        } else {
            window.alert("Incorrect username or password");
        }
    };

    return (
        <div>
            <a href="/"><img className="logo" src={Amazonimg} width="100px" alt="Amazon Logo" /></a>
            <div className="login-container">
                <h1 className="login-title">Sign in</h1>
                <h5 className="input-label">Email or mobile phone number</h5>
                <input
                    type="text"
                    placeholder="Email or mobile phone number"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <h5 className="input-label">Password</h5>
                <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button onClick={loginProcess}>Continue</button>
                <p className="login-condition">
                    By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span>
                </p>
                <p className="login-help">&#9656;<span>Need help</span></p>
                <hr />
                <h4>Buying for work?</h4>
                <p className="login-business"><span>Shop on Amazon Business</span></p>
            </div>
            <div className="login-section-text">
                <hr /><p>New to Amazon?</p><hr />
            </div>
            <button className="login-signup-btn">Create your Amazon account</button>
            <footer>
                <div className="footer-links">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Help</a>
                </div>
                <p className="footer-copyright">
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </p>
            </footer>
        </div>
    );
};

export default Login;
