import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Flight_ULR_CJC_GMP } from "../../../config";
import axios from "axios";
import styled from "styled-components";

function SearchListCards({ searchListB }) {
  return (
    <ListCards>
      {searchListB &&
        searchListB.map((res, index) => {
          return (
            <ListCard key={index}>
              <Img src={res.airline_logo_url} alt="airlineImg" />
              <AirlineName>
                <div>{res.airline_name}</div>
                <div>{res.number}</div>
              </AirlineName>
              <Time>
                <TimeDetail>
                  <div>{res.departure_time.substring(0, 5)}</div>
                  <div>-</div>
                  <div>{res.arrival_time.substring(0, 5)}</div>
                </TimeDetail>
                <TimeLocation>
                  <div>{res.departure_airport_code}</div>
                  <div>{res.arrival_airport_code}</div>
                </TimeLocation>
              </Time>
              <Seat>
                <div>{res.seat_class}</div>
              </Seat>
              <SeatNum>
                <div>{res.remain_seat}</div>
              </SeatNum>
              <Total>
                <div>{res.total_price}</div>
              </Total>
              <Link to="/airlineListSelected">
                <SelectButton>선택</SelectButton>
              </Link>
            </ListCard>
          );
        })}
    </ListCards>
  );
}

export default withRouter(SearchListCards);

const ListCards = styled.ul`
  width: 750px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const ListCard = styled.li`
  width: 785px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;

  :hover {
    box-shadow: 0px 0px 20px #bdbdbd;
  }

  span {
    margin-right: 15px;
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

const AirlineName = styled.div`
  width: 94px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div {
    font-size: 13px;
  }

  div:first-child {
    margin-bottom: 3px;
  }
`;

const Time = styled.span`
  width: 180px;
  height: 40px;
  margin-right: 40px;
`;

const TimeDetail = styled.span`
  display: flex;
  justify-content: space-between;
`;

const TimeLocation = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 6px;

  div {
    font-size: 14px;
    color: ${({ theme }) => theme.Color.grey[600]};
    margin-top: 3px;
  }
`;

const Seat = styled.span`
  width: 87px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  div {
    font-size: 14px;
    color: ${({ theme }) => theme.Color.grey[700]};
  }
`;

const SeatNum = styled.span`
  width: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  div {
    font-size: 14px;
    color: ${({ theme }) => theme.Color.grey[700]};
  }
`;

const Total = styled.span`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  div {
    font-size: 22px;
    font-weight: 500;
  }
`;

const SelectButton = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: white;
  background-color: ${({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
