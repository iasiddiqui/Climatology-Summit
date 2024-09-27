import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 

function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: false,
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
          <img src="public\pictures\slider1.avif" alt="Slide 1" />
        </div>
        <div>
          <img src="public\pictures\slider 2.avif" alt="Slide 2" />
        </div>
        <div>
          <img src="public\pictures\slider3.avif" alt="Slide 3" />
        </div>
        <div>
          <img src="public\pictures\slider4.avif" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
