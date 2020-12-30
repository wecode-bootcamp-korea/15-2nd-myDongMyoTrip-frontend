import React from "react";
import styled from "styled-components";

export function SearchButton() {
  return (
    <>
      <SearchBtn whiteVer>검색</SearchBtn>
    </>
  );
}

const SearchBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: white;
  background-color: ${({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
