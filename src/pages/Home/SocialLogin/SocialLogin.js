import React from "react";
import "./SocialLogin.css";
import Google from "../../../images/social/google.png";
import Facebook from "../../../images/social/facebook .png";
import Github from "../../../images/social/github.png";

const SocialLogin = () => {
  return (
    <>
      <div className="social-btn w-50 mx-auto ">
        <span className="d-flex justify-content-evenly">
          <img src={Google} alt="" />
          Continue with Google
        </span>
      </div>
      <div className="social-btn my-2  w-50 mx-auto">
        <span className="d-flex justify-content-evenly">
          <img src={Github} alt="" /> Continue with Github
        </span>
      </div>
      <div className="social-btn w-50 mx-auto">
        <span className="d-flex justify-content-evenly">
          <img src={Facebook} alt="" /> Continue with Facebook
        </span>
      </div>

      <div className="d-flex align-items-center my-2">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <div className="px-2">OR</div>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
    </>
  );
};

export default SocialLogin;
