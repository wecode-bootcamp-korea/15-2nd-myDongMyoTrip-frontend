import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"

function MainImage({ detailProductArr }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  console.log(detailProductArr)

  return (
    <Wrapper>
      <Slider {...settings}>
        {detailProductArr &&
          detailProductArr.map((img, idx) => <SliderImg key={idx} src={img} />)}
      </Slider>
    </Wrapper>
  )
}

export default MainImage

const Wrapper = styled.div`
  margin: 0 auto;
  width: 95%;

  .slick-prev:before {
    opacity: 1;
    color: black;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }

  img {
    width: 477px;
    height: 350px;
  }
`

const SliderImg = styled.img.attrs((props) => ({
  alt: "main image",
}))`
  width: 477px;
  height: 350px;
`
