import React from "react";
// import "./Register.css"; // Import the CSS file for styling

const Register: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="h1">Register</h1>
        <form>
          {/* <label>
            <span>Name:</span>
          </label> */}
          <input type="text" placeholder="Name" className="input"/>
          {/* <label>
            <span>Email:</span>
          </label> */}
          <input type="email" placeholder="Email" className="input"/>
          {/* <label>
            <span>Password:</span>
          </label> */}
          <input type="password" placeholder="Password" className="input"/>
          {/* <label>
            <span>Confirm Password:</span>
          </label> */}
          <input type="password" placeholder="Confirm Password" className="input"/>
          <button className="button" type="submit">Register</button>
          <a className="a" href="/login">Login</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
