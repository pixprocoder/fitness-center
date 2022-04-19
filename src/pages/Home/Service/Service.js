import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, balance, img, description } = service;
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="loading" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{balance}</p>
      <button className="detail-btn">Details</button>
    </div>
  );
};

export default Service;
