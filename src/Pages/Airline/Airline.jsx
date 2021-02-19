import React from "react";
import { withRouter } from "react-router-dom";
import SearchArea from "../Airline/MainSearch/SearchArea";
import RecentSearch from "../Airline/RecentSearch/RecentSearch";
import SlideCard from "../Airline/SlideCard/SlideCard";
import styled from "styled-components";

class Airline extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BodyWrapper>
        <SearchArea />
        <RecentSearch />
        <SlideCard />
      </BodyWrapper>
    );
  }
}

export default withRouter(Airline);

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
