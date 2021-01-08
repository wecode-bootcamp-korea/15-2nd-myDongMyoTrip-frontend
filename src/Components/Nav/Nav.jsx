import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  logoutUser = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  render() {
    const { transparent } = this.props;
    return (
      <NavBar transparent={transparent}>
        <CenterWrapper width="1060px" className="global">
          <Wrapper>
            <Logo>
              <NavLink
                to="/"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <img alt="main_logo" src="./images/main_logo.svg" />
              </NavLink>
            </Logo>
            <SearchBar transparent={transparent}>
              <i className="fas fa-search" />
              <input type="search" placeholder="도시나 상품을 검색해보세요" />
            </SearchBar>
          </Wrapper>
          <List className="global" transparent={transparent}>
            {!localStorage.getItem("access_token") ? (
              <li
                onClick={() => {
                  window.location.href = "/signin";
                }}
              >
                로그인
              </li>
            ) : null}
            {!localStorage.getItem("access_token") ? (
              <GhostButton
                transparent={transparent}
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                회원가입
              </GhostButton>
            ) : (
              <GhostButton transparent={transparent} onClick={this.logoutUser}>
                로그아웃
              </GhostButton>
            )}
          </List>
        </CenterWrapper>
        <CenterWrapper width="1060px" className="local">
          <List className="local" transparent={transparent}>
            <NavLink
              to="/Airline1"
              onClick={() => {
                window.location.href = "/Airline1";
              }}
            >
              <li>항공권</li>
            </NavLink>
            <NavLink
              to="/accommodation_main"
              onClick={() => {
                window.location.href = "/accommodation_main";
              }}
            >
              <li>숙소</li>
            </NavLink>
            <li>렌터카·교통</li>
            <li>투어·티켓</li>
          </List>
        </CenterWrapper>
      </NavBar>
    );
  }
}

export default withRouter(Nav);

/*--styled-components--*/

const NavBar = styled.nav`
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.Color.grey[200]};
  z-index: 3;
  ${(props) =>
    props.transparent &&
    css`
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `}
`;

const CenterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width};
  margin: 0 auto;

  &.global {
    height: 72px;
    justify-content: space-between;
  }
  &.local {
    height: 52px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;

const Logo = styled.div`
  width: 170px;
`;

const SearchBar = styled.div`
  position: relative;
  width: 340px;
  height: 50px;
  margin-left: 24px;

  i {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.Color.grey[500]};
    ${(props) =>
      props.transparent &&
      css`
        color: white;
      `}
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 16px 0 48px;
    background-color: ${({ theme }) => theme.Color.grey[100]};
    ${(props) =>
      props.transparent &&
      css`
        background-color: rgba(255, 255, 255, 0.2);
      `}
    border: 0;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.Color.grey[500]};
      ${(props) =>
        props.transparent &&
        css`
          color: white;
        `}
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.global {
    color: ${({ theme }) => theme.Color.grey[600]};
    a {
      ${(props) =>
        props.transparent &&
        css`
          color: white;
        `}
    }
    li {
      ${(props) =>
        props.transparent &&
        css`
          color: white;
        `}
    }
  }

  &.local {
    color: ${({ theme }) => theme.Color.grey[600]};
    ${(props) =>
      props.transparent &&
      css`
        color: white;
      `}
    font-weight: 500;
    margin-bottom: 10px;
    a {
      color: ${({ theme }) => theme.Color.grey[600]};
      ${(props) =>
        props.transparent &&
        css`
          color: white;
        `}
      li {
        margin: 0 10px;
      }
    }
  }

  li {
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.medium};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.Color.grey[300]};
`;

const GhostButton = styled.button`
  margin: 5px 0 0 10px;
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.Color.blue[400]};
  ${(props) =>
    props.transparent &&
    css`
      border: 2px solid rgba(255, 255, 255, 0.3);
    `}
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.Color.blue[400]};
  ${(props) =>
    props.transparent &&
    css`
      color: white;
    `}
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
