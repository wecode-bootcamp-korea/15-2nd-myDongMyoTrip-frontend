import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Flight_ULR } from "../../../config";
import SearchListCards from "./SearchListCards";
import SideFilter from "../AirlineList/SideFilter";
import LoadingPage from "../LoadingPage/LoadingPage";
import styled from "styled-components";

function AirlineList() {
  const [searchListCards, getsearchListCards] = useState([]);
  const [optionValue, setOptionValue] = useState("가격 낮은 순");
  const [loadingStatus, setLoadingStatus] = useState(true);

  const handleChange = (e) => {
    setOptionValue(e.target.value);
    orderingDepartureTime();
  };

  useEffect(() => {
    getList();
    setTimeout(() => setLoadingStatus(false), 3000);
  }, []);

  const getList = () => {
    axios
      .get(Flight_ULR)
      .then((res) => getsearchListCards(res.data.flight_list));
  };
  // `http://192.168.0.62:8000/flight?order=0&departure_airport=${3}&arrival_airport=${1}&departure_date=${
  //       2021 - 01 - 30
  //     }&arrival_date=${2021 - 01 - 30}`
  const orderingDepartureTime = () => {
    if (optionValue === "출발 시간 빠른 순") {
      axios
        .get(
          "http://192.168.0.62:8000/flight?order=2&departure_airport=3&arrival_airport=1&departure_date=2021-01-30&arrival_date=2021-01-30"
        )
        .then((res) => getsearchListCards(res.data.flight_list));
    } else if (optionValue === "출발 시간 늦은 순") {
      axios
        .get(
          "http://192.168.0.62:8000/flight?order=1&departure_airport=3&arrival_airport=1&departure_date=2021-01-30&arrival_date=2021-01-30"
        )
        .then((res) => getsearchListCards(res.data.flight_list));
    } else if (optionValue === "가격 낮은 순") {
      axios
        .get(
          "http://192.168.0.62:8000/flight?order=0&departure_airport=3&arrival_airport=1&departure_date=2021-01-30&arrival_date=2021-01-30"
        )
        .then((res) => getsearchListCards(res.data.flight_list));
    }
  };

  console.log(optionValue);
  console.log(searchListCards);
  return (
    <>
      {loadingStatus && (
        <LoadingWrap>
          <LoadingPage />
        </LoadingWrap>
      )}
      <Wrapper>
        <Layer>
          <Selectors>
            <CitySelector>
              <input type="text" placeholder="김포(GMP)" />
              <button>
                <i class="fas fa-arrows-alt-h" />
              </button>
              <input type="text" placeholder="제주(CJC)" />
            </CitySelector>
            <DateSelector>
              <input type="text" placeholder="2021.01.30" />
              <button>
                <i class="fas fa-arrows-alt-h" />
              </button>
              <input type="text" placeholder="2021.01.30" />
            </DateSelector>
            <SeatSelector>
              <SeatTitle>
                <div>
                  <i class="far fa-user" />
                  <span>승객 1명, 일반석</span>
                </div>
                <button>
                  <i class="fas fa-chevron-down" />
                </button>
              </SeatTitle>
            </SeatSelector>
          </Selectors>
        </Layer>
        <Background>
          <LoadingView>
            <form>
              <SideFilter />
            </form>
            <TicketList>
              <SearchListTitle>
                <div>
                  <span>검색결과 총 141개</span>
                </div>
                <select value={optionValue} onChange={handleChange}>
                  <option id="1" value="가격낮은순">
                    가격 낮은 순
                  </option>
                  <option id="2" value="출발 시간 빠른 순">
                    출발 시간 빠른 순
                  </option>
                  <option id="3" value="출발 시간 늦은 순">
                    출발 시간 늦은 순
                  </option>
                </select>
              </SearchListTitle>
              <SearchListCards searchListCardsA={searchListCards} />
            </TicketList>
          </LoadingView>
        </Background>
      </Wrapper>
    </>
  );
}

export default withRouter(AirlineList);

const LoadingWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90px;
  background-color: ${({ theme }) => theme.Color.blue[400]};
`;

const Selectors = styled.div`
  width: 1064px;
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const CitySelector = styled.div`
  width: 422px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};

  input {
    width: 190px;
    height: 46px;
    font-size: 16px;
    font-weight: 600;
    padding-left: 14px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[500]};

    :focus {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
      color: ${({ theme }) => theme.Color.grey[500]};
    }
  }
  button {
    width: 32px;
    height: 32px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: ${({ theme }) => theme.Color.grey[100]};
  }
`;

const DateSelector = styled.div`
  width: 360px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};

  input {
    width: 160px;
    height: 46px;
    font-size: 16px;
    font-weight: 600;
    padding-left: 14px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[500]};

    :focus {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
      color: ${({ theme }) => theme.Color.grey[500]};
    }
  }
  button {
    width: 32px;
    height: 32px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: ${({ theme }) => theme.Color.grey[100]};
  }
`;

const SeatSelector = styled.div`
  width: 270px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};
`;

const SeatTitle = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 19px;
    color: ${({ theme }) => theme.Color.blue[500]};
  }

  span {
    padding-left: 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.Color.grey[500]};
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.Color.white};

    i {
      font-size: 19px;
      color: ${({ theme }) => theme.Color.grey[700]};
    }
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 3000px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.Color.grey[100]};
`;

const LoadingView = styled.div`
  width: 1064px;
  height: 6000px;
  display: flex;
  justify-content: center;
  padding: 24px 0 48px 0;

  form {
    margin-right: 40px;
  }
`;

const TicketList = styled.div`
  width: 784px;
  height: 100vh;
`;

const SearchListTitle = styled.div`
  width: 784px;
  height: 40px;
  display: flex;
  justify-content: space-between;

  select {
    width: 190px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.Color.grey[300]};
    padding: 0 5px;
  }
`;

const CardLayer = styled.div`
  width: 786px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid white;
  border-radius: 3px;
  margin-top: 10px;
  padding: 0 16px;
  background-color: white;
`;

const SelectedBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: ${({ theme }) => theme.Color.white};
  background-color: ${({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
