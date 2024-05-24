import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="sign-form app">
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={emailInput}
              onChange={emailChangeHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={passwordInput}
              onChange={passwordChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
          <div className="text-center mt-2">
            <Link to="/sign-up">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
