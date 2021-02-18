import React from "react";
import styled from "styled-components";

const SearchButton = ({ whiteVer, onClickBtn }) => {
  return (
    <>
      <SearchBtn whiteVer={whiteVer} onClick={onClickBtn}>
        검색
      </SearchBtn>
    </>
  );
};

export default SearchButton;

const SearchBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid
    ${(props) =>
      props.whiteVer
        ? ({ theme }) => theme.Color.white
        : ({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: ${(props) =>
    props.whiteVer
      ? ({ theme }) => theme.Color.blue[400]
      : ({ theme }) => theme.Color.white};
  background-color: ${(props) =>
    props.whiteVer
      ? ({ theme }) => theme.Color.white
      : ({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
