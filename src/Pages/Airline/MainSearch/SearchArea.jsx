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
`;

const SearchBar = styled.div`
  width: 1064px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
