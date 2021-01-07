import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

function LoadingScreen() {
  return (
    <>
      <LoadingImg src="images/haiinkim/beach.jpg" alt="loadingImg" />
      <TextBox>
        <span>김포에서 제주까지</span>
        <span>왕복 항공권을 찾고 있습니다.</span>
        <TripBox>
          <SquareBox>
            <AirCode>GMP</AirCode>
            <div>김포</div>
            <AirDate>2021년 01월 30일</AirDate>
          </SquareBox>
          <span>-</span>
          <SquareBox>
            <AirCode>CJU</AirCode>
            <div>제주</div>
            <AirDate>2021년 01월 30일</AirDate>
          </SquareBox>
        </TripBox>
      </TextBox>
    </>
  );
}

export default withRouter(LoadingScreen);

const translate = keyframes`
  from {
    transform: translate(0,0);
  }
  to {
    transform: translate(0,-5%);
  }
`;

const LoadingImg = styled.img`
  width: 100vw;
  height: 120%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  animation: ${translate} 4s ease-in-out infinite;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

  span:first-child {
    font-size: 24px;
    color: white;
    margin-bottom: 10px;
  }

  span {
    color: white;
  }
`;

const TripBox = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.3px solid white;
  border-bottom: 1px solid white;
  margin-top: 30px;
`;

const SquareBox = styled.div`
  width: 130px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const AirCode = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const AirDate = styled.div`
  font-size: 12px;
`;
