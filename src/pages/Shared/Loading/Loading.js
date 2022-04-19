import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  const myStyle = {
    width: "500px",
    height: "500px",
    position: "absolute",
    left: "50%",
    top: "50%",
  };
  return (
    <div style={myStyle}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
