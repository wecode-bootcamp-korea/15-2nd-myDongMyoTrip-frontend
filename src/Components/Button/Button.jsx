import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const { name, text, imgSrc, login, socialLogin } = props;
  const loginHandler = (name) => {
    if (name === "loginBtn") {
      login();
    }
    if (name === "kakaoBtn") {
      socialLogin();
    }
  };
  return (
    <ButtonContainer
      name={name}
      onClick={() => {
        loginHandler(name);
      }}
    >
      <div>
        <ButtonIc alt="socialIcons" src={imgSrc} />
        <p>{text}</p>
      </div>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 10px 10px;
  background-color: ${({ name }) =>
    name === "kakaoBtn" ? "#f7e418" : "#eeeeee"};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  color: ${(props) => props.color};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.Color.grey[800]};
  }
`;

const ButtonIc = styled.img`
  margin: 0 10px 0 0;
  width: 20px;
  height: 20px;
`;
