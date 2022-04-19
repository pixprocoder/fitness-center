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
        <div>
          <Link to="/">THE GYM</Link>
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/Login">Login</Link>
          )}
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
