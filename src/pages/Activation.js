import React from "react";

function Activation() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="activation-form">
        <h2 className="text-center mb-4">Account Activation</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="activationKey">Activation Key</label>
            <input
              type="text"
              className="form-control"
              id="activationKey"
              placeholder="Enter your activation key"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Activate Account
          </button>
          {/* <div className="text-center mt-3">
            <a href="#">Resend activation key</a>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Activation;
