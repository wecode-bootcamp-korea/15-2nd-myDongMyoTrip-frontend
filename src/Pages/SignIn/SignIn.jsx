import React from "react";
import { useHistory } from "react-router";
import { KAKAO_API } from "../../config";
import styled from "styled-components";
import Form from "./Components/Form";
import { signInProps } from "./signInProps";
import { signUpProps } from "./signUpProps";

const { Kakao } = window;

export default function SignIn() {
  const history = useHistory();

  /*-- 카카오 소셜로그인 function --*/
  const socialLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log("kakao", authObj);
        fetch(`${KAKAO_API}`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("access_token", res.access_token);
            if (res.access_token) {
              alert("로그인 성공!");
              window.location.href = "/";
            }
          });
      },
      fail: function (err) {
        alert("로그인 실패!");
        console.log("err", err);
        window.location.href = "/";
      },
    });
  };
  /*-- 카카오 소셜로그인 function End--*/

  /*-- 이메일 로그인페이지로 이동 function --*/
  const login = () => {
    history.push({ pathname: "/email-signin" });
  };

  /*-- 이메일 회원가입 페이지로 이동 function --*/
  const signup = () => {
    history.push({ pathname: "/email-signup" });
  };

  return (
    <LoginModule>
      <FormImg alt="welcome_hand" src="./images/welcomeHand.png" />
      <Form
        signInProps={
          window.location.pathname.includes("/signin")
            ? signInProps
            : signUpProps
        }
        socialLogin={socialLogin}
        login={window.location.pathname.includes("/signin") ? login : signup}
      />
    </LoginModule>
  );
}

const LoginModule = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  margin: 100px auto;
  padding: 48px;
  border: 1px solid ${({ theme }) => theme.Color.grey[300]};
  border-radius: 2px;
  text-align: left;
`;

const FormImg = styled.img`
  margin: 0 auto;
  width: 56px;
  height: 56px;
`;
