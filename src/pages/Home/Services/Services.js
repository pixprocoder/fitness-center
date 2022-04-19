import React from "react";
import "./Services.css";
import useService from "../../../hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useService([]);
  return (
    <div>
      <div className="my-3">
        <h1 className="text-center text-danger">Welcome to The GYM </h1>
        <h6 className="text-center  text-primary">
          Take care of your body. It's the only place you have to live.
        </h6>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
