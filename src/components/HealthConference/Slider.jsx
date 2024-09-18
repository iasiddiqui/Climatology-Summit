import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/pictures/Climate change.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/pictures/media partner 1.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/pictures/media partner 3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
