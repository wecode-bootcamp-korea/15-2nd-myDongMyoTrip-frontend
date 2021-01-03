import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SearchListCards() {
  return (
    <ul>
      <ListCard>
        <span>
          <Img src="images/haiinkim/koreanAir.png" alt="airlineImg" />
        </span>
        <AirlineName>대한항공</AirlineName>
        <Time>시간</Time>
        <Seat>할인석</Seat>
        <SeatNum>9석</SeatNum>
        <Total>7000원</Total>
        <SearchBtn>선택</SearchBtn>
      </ListCard>
    </ul>
  );
}

export default withRouter(SearchListCards);

const ListCard = styled.li`
  width: 784px;
  height: 80px;
  display: flex;
  align-items: center;
  border: 0.5px solid white;
  border-radius: 3px;
  padding: 20px 24px;
  margin-top: 10px;
  background-color: white;

  span {
    margin-right: 15px;
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const AirlineName = styled.span`
  width: 94px;
  height: 40px;
`;

const Time = styled.span`
  width: 202px;
  height: 40px;
  margin-right: 40px;
`;

const Seat = styled.span`
  width: 87px;
  height: 40px;
  margin-right: 16px;
`;

const SeatNum = styled.span`
  width: 20px;
  height: 40px;
  margin-right: 16px;
`;

const Total = styled.span`
  width: 110px;
  height: 40px;
  margin-right: 16px;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: ${({ theme }) => theme.Color.white};
  background-color: ${({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
