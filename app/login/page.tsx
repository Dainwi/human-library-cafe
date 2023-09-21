import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-content">
        <h1 className="h1">Login</h1>
        <form>
          {/* <label className="label">
            <span>Email:</span>
          </label> */}
          <input type="email" className="input" placeholder="Email" />

          {/* <label className="label">
            <span>Password:</span>
          </label> */}
          <input type="password" className="input" placeholder="Password" />
          <button type="submit" className="button">
            Login
          </button>
          <div className="button-container">
            <a href="/register" className="a">
              Register
            </a>
            <a href="/forgot-password" className="a">
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
