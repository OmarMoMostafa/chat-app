import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPasswordInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="sign-form app">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={nameInput}
              onChange={nameChangeHandler}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPasswordInput}
              onChange={confirmPasswordChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <div className="text-center mt-3">
            <Link to="/sign-in">Already have an account? Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
