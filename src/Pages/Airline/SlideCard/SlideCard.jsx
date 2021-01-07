import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import "../SlideCard/_slick-theme.scss";
import DomesticTicket from "../DomesticTicket/DomesticTicket";
import styled from "styled-components";

class SlideCard extends React.Component {
  constructor() {
    super();
    this.state = {
      domesticTicket: [],
    };
  }

  componentDidMount() {
    fetch("/data/DomesticTicket.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          domesticTicket: res.domestic,
        });
      });
  }

  render() {
    const { domesticTicket } = this.state;

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
            {domesticTicket.map((ticket, index) => {
              return <DomesticTicket key={index} ticket={ticket} />;
            })}
          </Slider>
        </Wrapper>
        <Wrapper>
          <h3>국외 특가 항공권</h3>
          <Slider {...settings}>
            {domesticTicket.map((ticket, index) => {
              return <DomesticTicket key={index} ticket={ticket} />;
            })}
          </Slider>
        </Wrapper>
      </Wrap>
    );
  }
}

export default withRouter(SlideCard);

const Wrap = styled.div`
  width: 1060px;
  height: 100%;
  margin-bottom: 20px;

  /* .slick-prev::before {
    color: rgba(0, 0, 0, 0.4);
    /* display: none; */
  /* }
  .slick-next:before {
    color: rgba(0, 0, 0, 0.4);
  } */
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
