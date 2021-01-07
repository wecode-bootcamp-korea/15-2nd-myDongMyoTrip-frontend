import React from "react";
import styled from "styled-components";

const GhostButton = ({ text }) => {
  return (
    <ButtonContainer>
      <div className="text">{text}</div>
    </ButtonContainer>
  );
};

export default GhostButton;

const ButtonContainer = styled.button`
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.Color.white};
  border-radius: 4px;
  border: 1px solid ${(props) => props.color};
  font-weight: 500;
  color: ${(props) => props.color};
`;
