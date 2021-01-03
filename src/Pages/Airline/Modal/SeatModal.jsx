import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const SeatModal = ({
  showModal,
  countA,
  countB,
  countC,
  DecreaseA,
  DecreaseB,
  DecreaseC,
  IncreaseA,
  IncreaseB,
  IncreaseC,
}) => {
  // state = {
  //   habits: [
  //     { id: 1, name: "Reading", count: 0 },
  //     { id: 2, name: "Running", count: 0 },
  //     { id: 3, name: "Coding", count: 0 },
  //   ],
  // };

  // handleDecrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   const count = habits[index].count - 1; //왜 선언문에는 count-- 는 안먹힐까?
  //   habits[index].count = count < 0 ? 0 : count;
  //   this.setState({
  //     habits,
  //   });
  // };

  return (
    <>
      <ModalLayer />
      <SeatModalWrapper>
        <Header>
          <h1>인원 & 좌석등급</h1>
          <button onClick={showModal}>
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
              <i class="far fa-minus-square" onClick={DecreaseA} />
              <span>{countA}</span>
              <i class="far fa-plus-square" onClick={IncreaseA} />
            </Num>
          </List>
          <List>
            <Title>
              <div>소아</div>
              <div>만 12세 미만</div>
            </Title>
            <Num>
              <i class="far fa-minus-square" onClick={DecreaseB} />
              <span>{countB}</span>
              <i class="far fa-plus-square" onClick={IncreaseB} />
            </Num>
          </List>
          <List>
            <Title>
              <div>유아</div>
              <div>24개월 미만</div>
            </Title>
            <Num>
              <i class="far fa-minus-square" onClick={DecreaseC} />
              <span>{countC}</span>
              <i class="far fa-plus-square" onClick={IncreaseC} />
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
