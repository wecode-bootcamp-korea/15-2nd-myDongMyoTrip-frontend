import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ArrTable = ({ handleDepValue, handleArrValue }) => {
  const [tableList, gettableList] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios.get("http://192.168.0.62:8000/flight/region-airport").then((res) => {
      gettableList(res.data.regions);
    });
  };

  return (
    <ArrTableWrapper>
      {tableList.map((location, index) => {
        return (
          <Wrap key={index}>
            <Location>{location.name}</Location>
            <City>
              {location.airports.map((city, i) => {
                return (
                  <div onClick={handleDepValue}>
                    {city.name}({city.code})
                  </div>
                );
              })}
            </City>
          </Wrap>
        );
      })}
    </ArrTableWrapper>
  );
};

export default withRouter(ArrTable);

const ArrTableWrapper = styled.div`
  width: 681px;
  height: 697px;
  display: flex;
  flex-direction: column;
  justify-self: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  width: 681px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.Color.grey[200]};
`;

const Location = styled.div`
  width: 84px;
  height: 20px;
  font-size: 14px;
  padding: 0 10px;
`;

const City = styled.div`
  width: 597px;
  display: flex;
  flex-flow: wrap;
  align-items: center;

  div {
    width: 149px;
    height: 49px;
    display: flex;
    padding: 16px 10px 10px 10px;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => theme.Color.grey[700]};
    cursor: pointer;
  }
`;
