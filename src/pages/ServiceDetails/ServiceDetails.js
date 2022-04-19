import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>{serviceId}</h1>
      <div className="text-center">
        {" "}
        <Link to="/checkout">
          <button className="d-block mx-auto w-50 login-btn ">Hire me</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
