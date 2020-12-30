import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SeatModal = ({
  showModal,
  DecreasePassNum,
  IncreasePassNum,
  adult,
  child,
  infant,
}) => {
  return (
    <>
      <ModalLayer />
      <SeatModalWrapper>
        <Header>
          <h1>인원 & 좌석등급</h1>
          <button onClick={() => showModal("seat")}>
            <i class="fas fa-times" />
          </button>
        </Header>
        <Body>
          <List>
            <Title>
              <div>성인</div>
              <div>만 12세 이상</div>
            </Title>
            <Num>
              <i
                class="far fa-minus-square"
                onClick={() => DecreasePassNum("adultNum")}
              />
              <span>{adult}</span>
              <i
                class="far fa-plus-square"
                onClick={() => IncreasePassNum("adultNum")}
              />
            </Num>
          </List>
          <List>
            <Title>
              <div>소아</div>
              <div>만 12세 미만</div>
            </Title>
            <Num>
              <i
                class="far fa-minus-square"
                onClick={() => DecreasePassNum("childNum")}
              />
              <span>{child}</span>
              <i
                class="far fa-plus-square"
                onClick={() => IncreasePassNum("childNum")}
              />
            </Num>
          </List>
          <List>
            <Title>
              <div>유아</div>
              <div>24개월 미만</div>
            </Title>
            <Num>
              <i
                class="far fa-minus-square"
                onClick={() => DecreasePassNum("infantNum")}
              />
              <span>{infant}</span>
              <i
                class="far fa-plus-square"
                onClick={() => IncreasePassNum("infantNum")}
              />
            </Num>
          </List>
        </Body>
      </SeatModalWrapper>
    </>
  );
};

export default withRouter(SeatModal);

const ModalLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 89;
  background: rgba(0, 0, 0, 0.4);
`;

const SeatModalWrapper = styled.div`
  width: 344px;
  height: 260px;
  position: absolute;
  top: 280px;
  left: 900px;
  z-index: 89;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};
`;

const Header = styled.div`
  width: 344px;
  height: 64px;
  padding: 20px 24px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  button {
    border: none;
    font-size: 20px;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: white;
    cursor: pointer;

    :click {
      outline: none;
    }
  }
`;

const Body = styled.div`
  width: 344px;
  height: 257px;
  padding: 0 24px 24px 24px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  i {
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 60px;
  height: 34px;

  div:first-child {
    font-size: 16px;
    margin-bottom: 5px;
  }

  div:last-child {
    font-size: 11px;
    color: ${({ theme }) => theme.Color.grey[400]};
  }
`;

const Num = styled.div`
  width: 100px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i,
  span {
    font-size: 18px;
  }

  i {
    font-size: 26px;
    color: ${({ theme }) => theme.Color.blue[400]};
  }
`;
