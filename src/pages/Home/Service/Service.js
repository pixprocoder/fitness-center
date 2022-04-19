import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, balance, img, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="loading" />
      <h3 className="text-center">{name}</h3>
      <h6 className="text-center">{description}</h6>
      <p className="text-center">{balance}</p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="detail-btn"
      >
        Details
      </button>
    </div>
  );
};

export default Service;
