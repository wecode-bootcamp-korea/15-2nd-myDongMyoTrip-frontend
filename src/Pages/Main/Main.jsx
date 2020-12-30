import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderForm from "./Components/SliderForm";
import BGBlock from "./Components/BGBlock";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <section className="MainHeader">
          <Wrapper>
            <Title>떠나세요</Title>
            <Title>지금 이곳에서</Title>
            <h4>아이슬랜드 7박 백야여행</h4>
            <p>3분 56초만에 예약 가능</p>
            <GhostButton color="white">
              이 여행 보러가기 <i className="fas fa-chevron-right" />
            </GhostButton>
          </Wrapper>
          <BGBlock>
            <img alt="bg_img" src="https://i.imgur.com/ZrQhYZE.jpg" />
          </BGBlock>
        </section>

        <SliderWrapper>
          <SliderForm />
        </SliderWrapper>
      </div>
    );
  }
}

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 200px 200px;
  width: 50%;

  h4 {
    margin: 30px 0 5px 5px;
    color: white;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  p {
    margin: 0 0 5px 5px;
    color: white;
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Title = styled.h1`
  display: inline;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSize.titleSize};
  font-weight: 300;
  text-shadow: black 1px 0 30px;
  color: white;
  letter-spacing: -0.3rem;
`;

const GhostButton = styled.button`
  margin-top: 80px;
  padding: 10px 10px;
  width: 200px;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
  color: ${(props) => props.color};
  transition: all 0.2s ease-out;

  i {
    margin-left: 10px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SliderWrapper = styled.section`
  width: 1060px;
  margin: 150px auto 150px;
`;
