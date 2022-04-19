import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import banner4 from "../../../images/banner/banner4.jpg";
const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 " src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to The GYM</h3>
          <p>Keep going</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Explore fun</h3>
          <p>Do more fun</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Admit Now</h3>
          <p>Admit now. fill up the form</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Join Now</h3>
          <p>Join now and Enjoy it.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
