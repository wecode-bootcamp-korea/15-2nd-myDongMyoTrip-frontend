import React from "react";
import { withRouter } from "react-router-dom";
import SearchType from "../Components/Search/SearchType";
import MainSearch from "../MainSearch/MainSearch";
import SearchButton from "../Components/Btn/AirlineButton";
import styled from "styled-components";

function SearchArea({ history }) {
  return (
    <SearchAreaWrapper>
      <SearchType />
      <SearchBar>
        <MainSearch />
        <SearchButton onClickBtn={() => history.push("/airlineList")} />
      </SearchBar>
      <img
        className="mainNavPic"
        src="images/haiinkim/airMainNav.jpg"
        alt="mainNavImg"
      />
    </SearchAreaWrapper>
  );
}

export default withRouter(SearchArea);

const SearchAreaWrapper = styled.div`
  width: 1064px;
  height: 129px;
  margin: 48px 0;

  .mainNavPic {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 350px;
    opacity: 0.7;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
