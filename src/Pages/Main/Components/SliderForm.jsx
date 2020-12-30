import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import "./_slick-theme.scss";
import SliderBox from "./SilderBox";
import styled from "styled-components";

class SliderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      SliderBoxData: [],
    };
  }

  componentDidMount() {
    fetch("/data/MainTicketData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          SliderBoxData: res.domestic,
        });
      });
  }

  render() {
    const { SliderBoxData } = this.state;

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <Wrap>
        <Wrapper>
          <h3>국내 특가 항공권</h3>
          <Slider {...settings}>
            {SliderBoxData.map((el, index) => {
              return <SliderBox key={index} ticket={el} />;
            })}
          </Slider>
        </Wrapper>
      </Wrap>
    );
  }
}

export default withRouter(SliderForm);

const Wrap = styled.div`
  width: 1060px;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 1060px;
  height: 100%;
  margin-bottom: 56px;
  h3 {
    margin: 20px 0;
    font-size: 24px;
  }
`;
