import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.png';
// import loginSvg from './login.svg';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/news">News</Link>
        <Link to="/notices/sell">Find Pet</Link>
        <Link to="/friends">Our friends</Link>
      </div>
      <div className="auth-buttons">
        <button className="login-button">
          {/* <img alt="Login" /> */}
          Log In
        </button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Header;
