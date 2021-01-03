import React, { Component } from "react";
import { LOGIN_API } from "../../config";
import styled from "styled-components";

class EmailSignIn extends Component {
  state = {
    emailCheck: "",
    pwCheck: "",
  };

  goToAccount = (e) => {
    e.preventDefault();
    const { emailCheck, pwCheck } = this.state;
    fetch(`${LOGIN_API}/user/sign-in`, {
      method: "POST",
      body: JSON.stringify({
        email: emailCheck,
        password: pwCheck,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
          this.props.history.push("/");
        } else if (result.access_token) {
          localStorage.setItem("token", result.access_token);
        } else {
          alert("로그인 실패!");
        }
      });
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(localStorage.token);
    console.log();
    return (
      <LoginModule>
        <form action="" className="loginForm">
          <Title>로그인</Title>
          <LoginInfo>
            <label className="loginEmailLabel">이메일</label>
            <input
              type="email"
              name="emailCheck"
              className="loginEmailInput"
              onChange={this.handleInput}
            />
          </LoginInfo>
          <LoginInfo>
            <label className="loginPwLabel">비밀번호</label>
            <input
              type="password"
              name="pwCheck"
              className="loginPwInput"
              onChange={this.handleInput}
            />
          </LoginInfo>
          {(this.state.emailCheck.length && this.state.pwCheck.length) > 0 ? (
            <LoginButton
              onClick={(e) => {
                this.goToAccount(e);
              }}
            >
              로그인
            </LoginButton>
          ) : (
            <LoginButton disabled>로그인</LoginButton>
          )}
        </form>
      </LoginModule>
    );
  }
}

export default EmailSignIn;

const LoginModule = styled.section`
  width: 430px;
  margin: 100px auto;
  padding: 48px;
  border: 1px solid ${({ theme }) => theme.Color.grey[300]};
  border-radius: 2px;
  text-align: left;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 500;
  color: ${({ theme }) => theme.Color.grey[800]};
`;

const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.Color.grey[800]};
    letter-spacing: -0.5px;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: 1px solid ${({ theme }) => theme.Color.grey[300]};
    border-radius: 2px;
    transition: all 0.3s ease-out;
    outline: none;

    &:hover {
      border-color: ${({ theme }) => theme.Color.black};
      transition: all 0.3s ease-out;
    }

    &::placeholder {
      color: ${({ theme }) => theme.Color.grey[400]};
    }
  }
`;

const LoginButton = styled.button`
  margin: 20px 0;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 2px;
  font-weight: 700;
  color: white;
  background-color: ${({ theme }) => theme.Color.blue[400]};
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.Color.blue[50]};
    cursor: not-allowed;
  }
`;
