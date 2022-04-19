import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/">THE GYM</Link>
        </div>
        <div className="nav-item">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-login">
          <Link to="/register">Register</Link>
          {user ? (
            <span className="logout-btn" onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <Link className="login" to="/Login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
