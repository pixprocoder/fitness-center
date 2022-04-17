import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <Link to="/Login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
