import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../Home/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <>
      <div className="w-50 mx-auto">
        <h1 className="text-center my-2 text-primary">Please Login</h1>
        <SocialLogin />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
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
