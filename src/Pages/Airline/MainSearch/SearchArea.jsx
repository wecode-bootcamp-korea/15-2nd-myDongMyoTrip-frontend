import React from "react";
import { Link, withRouter } from "react-router-dom";
import MainSearch from "../MainSearch/MainSearch";
import { SearchButton } from "../Components/AirlineButton";
import styled from "styled-components";

function SearchArea() {
  return (
    <SearchType>
      <ul>
        <li>
          <Link>왕복</Link>
        </li>
        <li>
          <Link>편도</Link>
        </li>
        <li>
          <Link>다구간</Link>
        </li>
      </ul>
      <SearchBar>
        <MainSearch />
        <Link to="/airlineList">
          <SearchButton />
        </Link>
      </SearchBar>
      <img
        className="mainNavPic"
        src="images/haiinkim/airMainNav.jpg"
        alt="mainNavImg"
      />
    </SearchType>
  );
}

export default withRouter(SearchArea);

const SearchType = styled.div`
  width: 1064px;
  height: 129px;
  margin: 48px 0;

  ul {
    display: flex;
    justify-content: flex-start;

    li {
      width: 64px;
      height: 30px;
      text-align: center;
      font-weight: 300;

      a {
        color: ${({ theme }) => theme.Color.white};
      }
    }
    li:first-child {
      border-bottom: 3px solid ${({ theme }) => theme.Color.white};
      font-weight: 500;
    }
  }

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
  width: 1064px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
