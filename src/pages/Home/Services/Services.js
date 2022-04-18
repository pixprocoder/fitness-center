import React from "react";
import useService from "../../../hooks/useService";

const Services = () => {
  const [services, setServices] = useService([]);
  console.log(services);
  return (
    <div>
      <h1>Service here </h1>
    </div>
  );
};

export default Services;
