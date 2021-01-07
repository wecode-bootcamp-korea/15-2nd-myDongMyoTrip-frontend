import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ArrTable from "./ArrTable";
import styled from "styled-components";

const CityModal = ({ showModal, depPlace, handleDepValue }) => {
  return (
    <>
      <ModalLayer />
      <CitySearchModal>
        <div className="modalTitle">
          <h4>도시 선택</h4>
          <button onClick={() => showModal("city")}>
            <i class="fas fa-times" />
          </button>
        </div>
        <ModalBox>
          <div className="searchArea">
            <input type="text" placeholder="도시명을 입력하세요"></input>
            <button>검색</button>
          </div>
          <h5>주요도시 바로 선택</h5>
          <CityArea>
            <ArrTable depPlace={depPlace} handleDepValue={handleDepValue} />
          </CityArea>
        </ModalBox>
      </CitySearchModal>
    </>
  );
};

export default withRouter(CityModal);

const ModalLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 89;
  background: rgba(0, 0, 0, 0.4);
`;

const CitySearchModal = styled.div`
  width: 745px;
  height: 930px;
  border-radius: 3px;
  position: absolute;
  top: 300px;
  left: 410px;
  z-index: 90;
  background-color: white;

  .modalTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 745px;
    height: 52px;
    padding: 28px 32px 0 32px;

    h4 {
      font-size: 19px;
    }

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
  }
`;

const ModalBox = styled.div`
  width: 745px;
  height: 805;
  padding: 28px 32px 32px 32px;

  .searchArea {
    display: flex;
    align-items: center;

    input {
      width: 551px;
      height: 40px;
      padding-left: 14px;
      border: 1px solid ${({ theme }) => theme.Color.grey[300]};

      :focus {
        width: 551px;
        height: 38px;
        outline: 1px solid ${({ theme }) => theme.Color.blue[500]};
      }

      ::placeholder {
        color: ${({ theme }) => theme.Color.grey[400]};
      }
    }

    button {
      width: 100px;
      height: 40px;
      border: none;
      color: ${({ theme }) => theme.Color.white};
      background-color: ${({ theme }) => theme.Color.blue[500]};

      :focus {
        outline: none;
        cursor: pointer;
      }
    }
  }

  h5 {
    width: 681px;
    height: 20px;
    margin: 20px 0 10px 0;
  }
`;

const CityArea = styled.div`
  width: 681px;
  height: 697px;
  background-color: white;
`;
