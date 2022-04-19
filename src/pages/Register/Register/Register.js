import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../Home/SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center my-2 text-primary">Please Register</h1>
      <SocialLogin />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder=" Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="d-block mx-auto w-50 login-btn">Register</button>
      </Form>
      <p>
        New to The gym?{" "}
        <span className="toggle-link" onClick={navigateLogin}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Register;
