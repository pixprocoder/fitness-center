import React from "react";
import "./Services.css";
import useService from "../../../hooks/useService";

import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useService([]);

  return (
    <div>
      <h1>Service here </h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
