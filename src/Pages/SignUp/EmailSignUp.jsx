import React, { Component } from "react";
import { SIGNUP_API } from "../../config";
import Form from "./Components/Form";
import CheckList from "./Components/CheckList";
import styled from "styled-components";

class EmailSignUp extends Component {
  state = {
    name: "",
    isNameValid: false,
    email: "",
    isEmailValid: false,
    prePw: "",
    isPwValid: false,
    password: "",
    isPwCorrect: false,
    rePw: "",
    agree: [false, false, false, false],
    isEssentialsAgreed: false,
    isLocationAgreed: false,
    isPromotionAgreed: false,
  };

  /*-- 회원가입 input function --*/
  handleInputValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  handleValid = () => {
    const { name } = this.state;
    this.setState({
      isNameValid: !!name.length,
    });
  };
  getEmailValue = (e) => {
    const value = e.target.value;
    const regExp = /^[-A-Za-z0-9_]+[-A-Za-az0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
    this.setState({ isEmailValid: regExp.test(value) ? true : false });
  };

  getPwValue = (e) => {
    const value = e.target.value;
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    this.setState({ isPwValid: regExp.test(value) ? true : false });
  };

  isPwCorrect = () => {
    const { password, rePw } = this.state;
    const checkSamePw = password === rePw;
    this.setState({ isPwCorrect: checkSamePw ? true : false });
  };
  /*-- 회원가입 input function End--*/

  /*-- 동의하기 checkbox function --*/
  clickTerms = (props) => {
    const { agree } = this.state;
    agree[props] = !agree[props];
    this.setState({ agree: agree }, () => {
      this.isEssentialsAgreed();
      this.isLocationAgreed();
      this.isPromotionAgreed();
    });
  };

  isEssentialsAgreed = () => {
    const { agree } = this.state;
    agree[0] && agree[1]
      ? this.setState({ isEssentialsAgreed: true })
      : this.setState({ isEssentialsAgreed: false });
  };

  isLocationAgreed = () => {
    const { agree } = this.state;
    agree[2]
      ? this.setState({ isLocationAgreed: true })
      : this.setState({ isLocationAgreed: false });
  };

  isPromotionAgreed = () => {
    const { agree } = this.state;
    agree[3]
      ? this.setState({ isPromotionAgreed: true })
      : this.setState({ isPromotionAgreed: false });
  };

  agreeAll = () => {
    const { agree } = this.state;
    const confirm = agree.every((el) => el);
    if (confirm) {
      this.setState({ agree: agree.fill(false) }, () => {
        this.isEssentialsAgreed();
        this.isLocationAgreed();
        this.isPromotionAgreed();
      });
    } else {
      this.setState({ agree: agree.fill(true) }, () => {
        this.isEssentialsAgreed();
        this.isLocationAgreed();
        this.isPromotionAgreed();
      });
    }
  };
  /*-- 동의하기 checkbox function End --*/

  /*-- 회원가입 button click function --*/
  handleSignupClick = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      isLocationAgreed,
      isPromotionAgreed,
    } = this.state;

    fetch(`${SIGNUP_API}/user/sign-up`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        is_location_agreed: isLocationAgreed,
        is_promotion_agreed: isPromotionAgreed,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === "SUCCESS") {
          alert("회원가입을 축하드립니다!");
          this.props.history.push("/login");
        }
      });
  };
  /*-- 회원가입 button click function End--*/

  render() {
    const { agree } = this.state;
    const { clickTerms } = this;
    const agreeAll = agree[0] && agree[1] && agree[2] && agree[3];
    const allValid =
      this.state.isNameValid &&
      this.state.isEmailValid &&
      this.state.isEssentialsAgreed &&
      this.state.isPwCorrect;
    const checkboxProps = {
      type: "signUp",
      text: "전체 약관 동의",
      list: [
        {
          id: 0,
          checked: agree[0],
          onClick: "clickTerms",
          text: "회원 가입 및 운영약관 동의 (필수)",
        },
        {
          id: 1,
          checked: agree[1],
          onClick: "clickTerms",
          text: "개인정보 수집 및 이용 (필수)",
        },
        {
          id: 2,
          checked: agree[2],
          onClick: "clickTerms",
          text: "위치정보 이용약관 (선택)",
        },
        {
          id: 3,
          checked: agree[3],
          onClick: "clickTerms",
          text: "특가 항공권 및 할인 혜택 안내 동의 (선택)",
        },
      ],
    };
    const signUpProps = {
      type: "signUp",
      text: "회원가입",
      data: [
        {
          id: "name",
          type: "name",
          text: "이름",
          onChange: this.handleInputValue,
          onKeyUp: this.handleValid,
          placeholder: "이름을 입력해주세요",
        },
        {
          id: "email",
          type: "email",
          text: "이메일",
          onChange: this.handleInputValue,
          onKeyUp: this.getEmailValue,
          placeholder: "이메일을 입력해주세요",
        },
        {
          id: "password",
          type: "password",
          text: "비밀번호",
          onChange: this.handleInputValue,
          onKeyUp: this.getPwValue,
          placeholder: "영문,숫자를 조합하여 8자 이상",
        },
        {
          id: "rePw",
          type: "password",
          text: "비밀번호 확인",
          onChange: this.handleInputValue,
          onKeyUp: this.isPwCorrect,
          placeholder: "비밀번호를 다시 입력해주세요",
        },
      ],
    };

    return (
      <SignUpModule>
        <form className="signUpForm">
          <Title>회원가입</Title>
          <Form format={signUpProps} />
          <CheckboxWrapper>
            <label>
              <Checkbox
                type="checkbox"
                checked={agreeAll}
                onClick={this.agreeAll}
              />
              {checkboxProps.text}
            </label>
            <ul>
              {checkboxProps.list.map((input) => (
                <CheckList format={input} targetId={clickTerms} />
              ))}
            </ul>
          </CheckboxWrapper>
          {allValid ? (
            <SignupButton onClick={this.handleSignupClick}>
              {signUpProps.text}
            </SignupButton>
          ) : (
            <SignupButton disabled>{signUpProps.text}</SignupButton>
          )}
        </form>
      </SignUpModule>
    );
  }
}

export default EmailSignUp;

/*-- styled-components --*/
const SignUpModule = styled.section`
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

const SignupButton = styled.button`
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

const CheckboxWrapper = styled.div`
  margin-top: 30px;
  ul {
    padding: 20px 16px;
    border: 1px solid ${({ theme }) => theme.Color.grey[300]};
    border-radius: 2px;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 14px;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 8px 0 0;
  border: 1px solid ${({ theme }) => theme.Color.grey[200]};
  border-radius: 50%;
`;
