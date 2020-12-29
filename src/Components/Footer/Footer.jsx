import React, { Component } from "react";
import styled from "styled-components";

const footerList = [1, 2, 3];
const footerValue = [
  ["소개", "파트너", "지원"],
  ["회사소개", "파트너 등록하기", "자주 묻는 질문"],
  ["채용", "Affiliate 프로그램", "최저가 보장제"],
  ["공고", "리얼가이드", ""],
  ["", "가이드 블로그", ""],
];
class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <CenterWrapper width="1060px">
          <Wrapper direction="column" width="50%">
            <h5>고객센터</h5>
            <h3>1670-8208</h3>
            <p>
              <span>월~금:</span> 09:00-18:00 (점심시간 12:00-13:00)
            </p>
            <p>
              <span>공휴일&주말:</span> 1:1 채팅 상담만 가능
            </p>
            <p>
              <span>항공권 환불,변경 접수:</span> 월~금 09:00-17:00
            </p>
            <GhostButton>1:1채팅상담</GhostButton>
          </Wrapper>
          <Wrapper direction="row" width="50%">
            {footerList.map((_, i) => {
              return (
                <ul className="footer list" key={i}>
                  {footerValue.map((item, index) => {
                    return (
                      <li className="footer item" key={index}>
                        {item[i]}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </Wrapper>
        </CenterWrapper>
        <CenterWrapper className="bottom" width="1060px">
          <Wrapper direction="row" width="50%">
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
            <div>취소 및 환불정책</div>
          </Wrapper>
        </CenterWrapper>
        <CenterWrapper width="1060px">
          <Wrapper direction="column" width="100%">
            <p>
              상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈
              | 사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호
              2019-서울서초-0260
            </p>
            <p>
              주소 서울특별시 서초구 강남대로 327, 대륭서초타워 18층(서초동) |
              이메일 help@myrealtrip.com | 마케팅/제휴 문의
              marketing@myrealtrip.com
            </p>
            <p className="lastChild">
              자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
              마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
              따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
            </p>
          </Wrapper>
        </CenterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;

/*--styled-components--*/

const FooterContainer = styled.footer`
  bottom: 0;
  background-color: ${({ theme }) => theme.Color.white};
  border-top: 1px solid ${({ theme }) => theme.Color.grey[200]};
`;

const CenterWrapper = styled.section`
  ${({ theme }) => theme.CenterWrapper};
  padding: 20px 0;

  &.bottom {
    border-top: 1px solid ${({ theme }) => theme.Color.grey[200]};
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: ${(props) => props.width};

  ul {
    width: ${100 / 3}%;

    li {
      margin: 8%;
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 500;
      color: ${({ theme }) => theme.Color.grey[500]};
    }
  }

  h5 {
    margin-top: 40px;
    font-weight: 500;
    color: ${({ theme }) => theme.Color.grey[600]};
  }
  h3 {
    margin: 20px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    color: ${({ theme }) => theme.Color.grey[800]};
  }
  p {
    margin-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 300;
    color: ${({ theme }) => theme.Color.grey[500]};
    &.lastChild {
      margin-bottom: 40px;
    }
  }
  span {
    margin-right: 6px;
    color: ${({ theme }) => theme.Color.grey[700]};
  }

  div {
    margin: 20px 30px 0 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 500;
    color: ${({ theme }) => theme.Color.grey[500]};
  }
`;

const GhostButton = styled.button`
  margin: 20px 0;
  padding: 10px 10px;
  width: 100px;
  background-color: ${({ theme }) => theme.Color.white};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.Color.grey[300]};
  font-weight: 500;
  color: ${({ theme }) => theme.Color.grey[700]};
`;
