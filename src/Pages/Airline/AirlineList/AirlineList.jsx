import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Flight_ULR_GMP_CJC } from "../../../config";
import SearchListCards from "./SearchListCards";
import MainSearch from "../MainSearch/MainSearch";
import SearchButton from "../Components/Btn/AirlineButton";
import SideFilter from "../AirlineList/SideFilter";
import LoadingPage from "../LoadingPage/LoadingPage";
import styled from "styled-components";

function AirlineList({ history }) {
  const [searchListCards, getsearchListCards] = useState([]);
  const [optionValue, setOptionValue] = useState("가격 낮은 순");
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    getList();
    setTimeout(() => setLoadingStatus(false), 3000);
  }, []);

  const getList = () => {
    axios
      .get(Flight_ULR_GMP_CJC)
      .then((res) => getsearchListCards(res.data.flight_list));
  };

  async function orderingDepartureTime(e) {
    let optionValue = e.target.value;
    setOptionValue(optionValue);
    if (optionValue === "출발 시간 빠른 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=1&departure_airport=3&arrival_airport=1&departure_date=2021-01-25&arrival_date=2021-01-25"
      );
      getsearchListCards(res.data.flight_list);
    } else if (optionValue === "출발 시간 늦은 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=2&departure_airport=3&arrival_airport=1&departure_date=2021-01-25&arrival_date=2021-01-25"
      );
      getsearchListCards(res.data.flight_list);
    } else if (optionValue === "가격 낮은 순") {
      const res = await axios.get(
        "http://192.168.0.62:8000/flight?order=0&departure_airport=3&arrival_airport=1&departure_date=2021-01-25&arrival_date=2021-01-25"
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
      <AirlineListWrapper>
        <BlueBG>
          <SearchBar>
            <MainSearch />
            <SearchButton
              whiteVer
              onClickBtn={() => history.push("/airlineList")}
            />
          </SearchBar>
        </BlueBG>
        <Background>
          <LoadingView>
            <form>
              <SideFilter searchListCardsA={searchListCards} />
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
              <SearchListCards searchListCardsA={searchListCards} />
            </TicketList>
          </LoadingView>
        </Background>
      </AirlineListWrapper>
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
const AirlineListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlueBG = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.Color.blue[400]};
`;

const SearchBar = styled.div`
  width: 1064px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
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
