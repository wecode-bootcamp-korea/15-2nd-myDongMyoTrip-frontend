import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Flight_ULR_CJC_GMP } from "../../../config";
import SearchListB from "./SearchListB";
import SideFilter from "../AirlineList/SideFilter";
import LoadingPage from "../LoadingPage/LoadingPage";
import styled from "styled-components";

function AirlineList() {
  const [searchListCards, getsearchListCards] = useState([]);
  const [optionValue, setOptionValue] = useState("가격 낮은 순");
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    getList();
    setTimeout(() => setLoadingStatus(false), 3000);
  }, []);

  const getList = () => {
    axios
      .get(Flight_ULR_CJC_GMP)
      .then((res) => getsearchListCards(res.data.flight_list));
  };

  async function orderingDepartureTime(e) {
    let optionValue = e.target.value;
    setOptionValue(optionValue);
    if (optionValue === "출발 시간 빠른 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=1&departure_airport=1&arrival_airport=3&departure_date=2021-01-30&arrival_date=2021-01-30"
      );
      getsearchListCards(res.data.flight_list);
    } else if (optionValue === "출발 시간 늦은 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=2&departure_airport=1&arrival_airport=3&departure_date=2021-01-30&arrival_date=2021-01-30"
      );
      getsearchListCards(res.data.flight_list);
    } else if (optionValue === "가격 낮은 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=0&departure_airport=1&arrival_airport=3&departure_date=2021-01-30&arrival_date=2021-01-30"
      );
      getsearchListCards(res.data.flight_list);
    }
  }
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
        <SelectedCard>
          <SideTitle>
            <Box>가는편</Box>
            <ArrDep>
              <div>김포</div>
              <div>-</div>
              <div>제주</div>
            </ArrDep>
            <DepTime>
              <div>01월025일(월)</div>
            </DepTime>
            <ListCard>
              <Img src="images/haiinkim/haiinAir.png" alt="airlineImg" />
              <AirlineName>
                <div>해인항공</div>
                <div>TW731</div>
              </AirlineName>
              <Time>
                <TimeDetail>
                  <div>06:00</div>
                  <div>-</div>
                  <div>08:00</div>
                </TimeDetail>
                <TimeLocation>
                  <div>GMP</div>
                  <div>CJU</div>
                </TimeLocation>
              </Time>
              <Seat>
                <div>일반석</div>
              </Seat>
              <SeatNum>
                <div>9석</div>
              </SeatNum>
              <Total>
                <div>9900</div>
              </Total>
            </ListCard>
          </SideTitle>
        </SelectedCard>
        <Background>
          <LoadingView>
            <form>
              <SideFilter />
            </form>
            <TicketList>
              <SearchListTitle>
                <div>
                  <span>검색결과 총 {searchListCards.length}개</span>
                </div>
                <select value={optionValue} onChange={orderingDepartureTime}>
                  <option id="1" value="가격 낮은 순">
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
              <SearchListB searchListB={searchListCards} />
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

const ListCard = styled.li`
  width: 785px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  margin-left: 15px;

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

const SelectedCard = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Color.grey[100]};
  border-radius: 3px;
`;

const SideTitle = styled.div`
  width: 1064px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: white;
  margin-top: 30px;
`;

const Box = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.Color.blue[500]};
  border: 1px solid ${({ theme }) => theme.Color.blue[500]};
  border-radius: 3px;
  padding-left: 3px;
  padding-top: 1px;
  margin-right: 10px;
  color: white;
  font-size: 12px;
`;

const ArrDep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 15px;
`;

const DepTime = styled.div`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 600;
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
