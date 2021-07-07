import React, { useState } from "react";
import "./style.css";
import LoginImg from '../../../src/assets/images/login-img.png'
import { useHistory } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();


  return (
    <main className="login-section">
      <div className="flex justify-between">
        <div className="login-left-side">
          <img src={LoginImg} width="100%" alt="" />
        </div>
        <div className="login-form">
          <h3>Get Started</h3>
          <h4>Do not have an account? <span className="signUp-link">Sign Up</span></h4>
          <form action="">
            <label htmlFor="email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete={false}
              />
            </label>
            <label htmlFor="email">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete={false}
              />
            </label>
            <button className="login-btn" onClick={() => history.push("/")}>
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
