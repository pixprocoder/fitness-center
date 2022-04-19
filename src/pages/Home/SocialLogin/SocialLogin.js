import React from "react";
import "./SocialLogin.css";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import Google from "../../../images/social/google.png";
import Facebook from "../../../images/social/facebook .png";
import Github from "../../../images/social/github.png";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p>
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  if (loading || loading1) {
    return <Loading />;
  }
  if (user || user1) {
    navigate("/Home");
  }
  return (
    <>
      <div className="social-btn w-50 mx-auto ">
        <span
          onClick={() => signInWithGoogle()}
          className="d-flex justify-content-evenly"
        >
          <img src={Google} alt="" />
          Continue with Google
        </span>
      </div>
      <div className="social-btn my-2  w-50 mx-auto">
        <span
          onClick={() => signInWithGithub()}
          className="d-flex justify-content-evenly"
        >
          <img src={Github} alt="" /> Continue with Github
        </span>
      </div>
      <div className="social-btn w-50 mx-auto">
        <span className="d-flex justify-content-evenly">
          <img src={Facebook} alt="" /> Continue with Facebook
        </span>
      </div>
      {errorElement}

      <div className="d-flex align-items-center my-2">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <div className="px-2">OR</div>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
    </>
  );
};

export default SocialLogin;
