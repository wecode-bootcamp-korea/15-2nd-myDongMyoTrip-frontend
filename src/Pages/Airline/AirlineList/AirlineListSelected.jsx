import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import MainSearch from "../MainSearch/MainSearch";
import SearchListCards from "./SearchListCards";
import SideFilter from "../AirlineList/AirlineList";
import styled from "styled-components";

function airlineListSelected() {
  return (
    <Wrapper>
      <Layer>
        <SearchBar>
          <MainSearch />
          <Link to="/AirlineList">
            <SearchBtn whiteVersion>검색</SearchBtn>
          </Link>
        </SearchBar>
      </Layer>
      <Background>
        <Mainbody>
          <SelectedCard>
            <SideTitle>
              <Box>가는편</Box>
              <ArrDep>
                <div>김포</div>
                <div>--</div>
                <div>제주</div>
              </ArrDep>
              <DepTime>
                <div>01월06일(수)</div>
              </DepTime>
            </SideTitle>
            <SearchListCards />
          </SelectedCard>
          <LoadingView>
            <form>
              <SideFilter />
            </form>
            <TicketList>
              <SearchListTitle>
                <div>
                  <span>검색결과 총 141개</span>
                </div>
                <select>
                  <option value="가격낮은순">가격 낮은 순</option>
                  <option>출발 시간 빠른 순</option>
                  <option>출발 시간 늦은 순</option>
                </select>
              </SearchListTitle>
              <CardLayer>
                <SearchListCards />
                <Link to="/AirlineListSelected">
                  <SelectedBtn>선택</SelectedBtn>
                </Link>
              </CardLayer>
            </TicketList>
          </LoadingView>
        </Mainbody>
      </Background>
    </Wrapper>
  );
}

export default withRouter(airlineListSelected);

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

const SearchBar = styled.div`
  width: 1064px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid
    ${(props) =>
      props.whiteVersion ? "white" : `${({ theme }) => theme.Color.blue[400]}`};
  border-radius: 3px;
  color: ${({ theme }) => theme.Color.blue[400]};
  background-color: ${(props) =>
    props.whiteVersion ? "white" : `${({ theme }) => theme.Color.blue[400]}`};
  cursor: pointer;
`;

const Background = styled.div`
  width: 100vw;
  height: 6000px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.Color.grey[100]};
`;

const Mainbody = styled.div`
  width: 100vw;
  height: 6000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectedCard = styled.div`
  width: 1064px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  padding: 16px 24px;
  background-color: white;
`;

const SideTitle = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 23px;
  border: 1.5px solid ${({ theme }) => theme.Color.blue[500]};
  border-radius: 2px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.Color.blue[500]};
`;

const ArrDep = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

const DepTime = styled.div`
  div {
    font-size: 12px;
  }
`;

const LoadingView = styled.div`
  width: 1064px;
  height: 6000px;
  display: flex;
  align-items: flex-start;

  form {
    margin-right: 40px;
    margin-top: 0;
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
