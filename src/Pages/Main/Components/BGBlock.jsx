import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class BGBlock extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };
    return (
      <BGWrapper>
        <Slider {...settings}>
          <img alt="bg_img1" src="https://i.imgur.com/ZrQhYZE.jpg" />

          <img alt="bg_img2" src="https://i.imgur.com/4LaFRYM.jpg?1" />
          <img
            alt="bg_img3"
            src="https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_1280.jpg"
          />
        </Slider>
      </BGWrapper>
    );
  }
}

export default BGBlock;

const BGWrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 900px;
  filter: brightness(90%);
  z-index: -1;

  img {
    object-fit: cover;
    max-width: 100%;
    height: 680px;
  }
`;
