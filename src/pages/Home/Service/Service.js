import React from "react";
import img1 from "../../../images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg";

const Service = ({ service }) => {
  const { name, balance } = service;
  return (
    <div className="service-container">
      <img className="img-fluid" src={img1} alt="" />
      <h1>service{name}</h1>
      <h1>service{balance}</h1>
    </div>
  );
};

export default Service;
