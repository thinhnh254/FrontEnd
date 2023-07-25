import {
  faApple,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form method="POST" className="form-login">
        <h1 className="heading">Login</h1>
        <p className="sub-text">Hello, Login to continue !</p>
        <p className="sub-text">
          Or{" "}
          <Link to="/register" className="sub-link">
            Register new account
          </Link>
        </p>
        <div className="form-group">
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
          <br />
          <button>Login</button>
        </div>
        <span className="error">Error</span>
        <p className="forgotPwd">
          <a href="#">Forgot Password</a>
        </p>
        <div className="or">
          <span className="abs-text">Or</span>
          <hr />
        </div>
        <br />
        <div className="icon">
          {/* Facebook Icon */}
          <FontAwesomeIcon icon={faFacebook} className="fb" />

          {/* Apple Icon */}
          <FontAwesomeIcon icon={faApple} className="apple" />

          {/* Twitter Icon */}
          <FontAwesomeIcon icon={faTwitter} className="tw" />

          {/* Google Icon */}
          <FontAwesomeIcon icon={faGoogle} className="gg" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
