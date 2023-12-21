import React from "react";
import "../../styles/Banner.css";
import Carousel from "react-bootstrap/Carousel";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];

const Banner = () => {
  const carouselItems = data.map((imag, i) => (
    <Carousel.Item key={i}>
      <img src={imag} alt="img" className="banner_img" />
    </Carousel.Item>
  ));

  return (
    <Carousel className="carasousel" indicators={false}>
      {carouselItems}
    </Carousel>
  );
};

export default Banner;
