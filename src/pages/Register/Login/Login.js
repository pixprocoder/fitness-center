import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../Home/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="w-50 mx-auto">
        <h1 className="text-center my-2 text-primary">Please Login</h1>
        <SocialLogin />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button className="d-block mx-auto w-50 login-btn">Login</button>
        </Form>
        <p className="mt-2">
          New to The gym?{" "}
          <span className="toggle-link" onClick={navigateRegister}>
            Register now
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
