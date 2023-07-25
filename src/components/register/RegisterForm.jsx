import React, { useState } from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form method="POST" className="form-register">
        <h1 className="heading">Register</h1>
        <p className="sub-text">
          Already have account?{" "}
          <Link to="/login" className="sub-link">
            Login
          </Link>
        </p>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input-text"
          />
          <input
            type="text"
            name="username"
            placeholder="Your username"
            className="input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="input-text"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="input-text"
          />
          <br />
          <div className="terms">
            <input
              type="checkbox"
              name="check-box"
              className="input-checkbox"
              id="checkbox"
            />
            <label for="checkbox" className="sub-link">
              Accept terms and services
            </label>
          </div>
          <button>Register</button>
        </div>
        <span className="error">Error</span>
      </form>
    </div>
  );
};

export default RegisterForm;
