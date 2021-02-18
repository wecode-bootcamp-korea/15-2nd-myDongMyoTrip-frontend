import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SearchType() {
  return (
    <SearchTypeWrapper>
      <Type underLine>왕복</Type>
      <Type>편도</Type>
      <Type>다구간</Type>
    </SearchTypeWrapper>
  );
}

export default withRouter(SearchType);

const SearchTypeWrapper = styled.div`
  display: flex;
`;

const Type = styled.div`
  width: 64px;
  height: 30px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.Color.white};
  border-bottom: 3px solid
    ${(props) => (props.underLine ? ({ theme }) => theme.Color.white : "none")};
`;
