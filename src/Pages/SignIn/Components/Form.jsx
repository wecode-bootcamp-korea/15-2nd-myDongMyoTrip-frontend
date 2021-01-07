import React from "react";
import styled from "styled-components";
import Button from "../../../Components/Button/Button";

export default function Form({ login, socialLogin, signInProps }) {
  return (
    <FormWrapper>
      <h3>{signInProps.text}</h3>
      <p>여행의 모든 것, 마이동묘트립</p>
      <ButtonWrapper>
        {signInProps.buttonData.map((el, index) => {
          return (
            <Button
              key={index}
              name={el.name}
              text={el.text}
              imgSrc={el.icon}
              socialLogin={socialLogin}
              login={login}
            />
          );
        })}
      </ButtonWrapper>
      <GotoSignUp>
        {signInProps.additional}
        <span>{signInProps.goTo}</span>
      </GotoSignUp>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 100%;
  text-align: center;

  h3 {
    margin: 30px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
    letter-spacing: -0.5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const GotoSignUp = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  span {
    margin-left: 10px;
  }
`;
