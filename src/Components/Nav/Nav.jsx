import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
class Nav extends Component {
  render() {
    return (
      <NavBar>
        <CenterWrapper width="1060px" className="global">
          <Wrapper>
            <Logo>
              <Link to="/">
                <img alt="main_logo" src="./images/main_logo.svg" />
              </Link>
            </Logo>
            <SearchBar>
              <i class="fas fa-search"></i>
              <input
                type="search"
                placeholder="도시나 상품을 검색해보세요"
              ></input>
            </SearchBar>
          </Wrapper>
          <List className="global">
            <li>위시리스트</li>
            <li>예약내역</li>
            <li>메시지</li>
            <li>알림</li>
            <li>
              <Profile
                className="profileThumbnail"
                alt="profile_thumbnail"
                src="./images/nav_default_thumbnail.png"
              />
            </li>
          </List>
        </CenterWrapper>
        <CenterWrapper width="1060px" className="local">
          <List className="local">
            <li>항공권</li>
            <li>숙소</li>
            <li>렌터카·교통</li>
            <li>투어·티켓</li>
          </List>
        </CenterWrapper>
      </NavBar>
    );
  }
}

export default Nav;

/*--styled-components--*/

const NavBar = styled.nav`
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.Color.grey[200]};
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
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 16px 0 48px;
    background-color: ${({ theme }) => theme.Color.grey[100]};
    border: 0;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.Color.grey[500]};
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
  }

  &.local {
    color: ${({ theme }) => theme.Color.grey[800]};
    font-weight: 500;
    margin-bottom: 10px;

    li {
      margin: 0 20px;
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
