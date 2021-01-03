import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MainSearch from "../MainSearch/MainSearch";
import SearchListCards from "./SearchListCards";
import styled from "styled-components";

function airlineList() {
  // const [arrDestinations, setArrDestinations] = useState([]);
  // const [cityList, setCityList] = useState([]);

  // useEffect(() => {
  //   getArrDestinations();
  //   sortedAirportList();
  // }, [cityList]);

  // const getArrDestinations = () => {
  //   fetch("/data/ArrivalTable.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setArrDestinations(res.regions);
  //     });
  // };

  return (
    <Wrapper>
      <Layer>
        <MainSearch />
      </Layer>
      <Background>
        <LoadingView>
          <form>
            <Filter>
              <div>
                <h2>항공사</h2>
              </div>
              <ul>
                <li>
                  <input type="checkbox" id="대한항공" />
                  <label htmlFor="대한항공">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    대한항공
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="아시아나항공" />
                  <label htmlFor="아시아나항공">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    아시아나항공
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="진에어" />
                  <label htmlFor="진에어">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    진에어
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="에어부산" />
                  <label htmlFor="에어부산">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    에어부산
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="티웨이항공" />
                  <label htmlFor="티웨이항공">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    티웨이항공
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="제주항공" />
                  <label htmlFor="제주항공">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    제주항공
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="에어서울" />
                  <label htmlFor="에어서울">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    에어서울
                  </label>
                </li>
              </ul>
            </Filter>
            <Filter>
              <div>
                <h2>출발시간</h2>
              </div>
              <ul>
                <li>
                  <input type="checkbox" id="새벽 00:00~06:00" />
                  <label htmlFor="새벽 00:00~06:00">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    새벽 00:00~06:00
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="오전 06:00~12:00" />
                  <label htmlFor="오전 06:00~12:00">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    오전 06:00~12:00
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="오후12:00~18:00" />
                  <label htmlFor="오후12:00~18:00">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    오후12:00~18:00
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="야간18:00~24:00" />
                  <label htmlFor="야간18:00~24:00">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    야간18:00~24:00
                  </label>
                </li>
              </ul>
            </Filter>
            <Filter>
              <div>
                <h2>좌석종류</h2>
              </div>
              <ul>
                <li>
                  <input type="checkbox" id="비즈니스석" />
                  <label htmlFor="비즈니스석">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    비즈니스석
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="특가석" />
                  <label htmlFor="특가석">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    특가석
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="할인석" />
                  <label htmlFor="할인석">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    할인석
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="일반석" />
                  <label htmlFor="일반석">
                    <span>
                      <i class="fas fa-check-square" />
                    </span>
                    일반석
                  </label>
                </li>
              </ul>
            </Filter>
          </form>
          <TicketList>
            <SearchListTitle>
              <div>
                <span>검색결과 총 141개</span>
              </div>
              <select>
                <option value="가격낮은순">가격 낮은 순</option>
                <option>출발 시간 빠른 순</option>
                <option>출발 시간 늦은 순</option>
              </select>
            </SearchListTitle>
            <SearchListCards />
          </TicketList>
        </LoadingView>
      </Background>
    </Wrapper>
  );
}

export default withRouter(airlineList);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90px;
  background-color: ${({ theme }) => theme.Color.blue[400]};
`;

const Background = styled.div`
  width: 100vw;
  height: 6000px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.Color.grey[100]};
`;

const LoadingView = styled.div`
  width: 1064px;
  height: 6000px;
  display: flex;
  justify-content: center;
  padding: 24px 0 48px 0;

  form {
    margin-right: 40px;
  }
`;

const Filter = styled.div`
  width: 240px;
  padding: 8px;
  margin-bottom: 15px;
  border-top: 1px solid ${({ theme }) => theme.Color.grey[300]};

  div {
    width: 240px;
    height: 34px;
    display: flex;
    align-items: center;
  }

  ul {
    width: 240px;

    li {
      width: 240px;
      height: 20px;
      margin-top: 14px;

      input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"] + label {
          color: rgba(0, 0, 0, 0.8);
          font-size: 15px;
        }

        input[type="checkbox"] + label span {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 0.5px solid ${({ theme }) => theme.Color.blue[300]};
          border-radius: 2px;
          vertical-align: middle;
          margin: -2px 10px 0 0;
          background: white;
          cursor: pointer;

          i {
            position: relative;
            top: -2px;
            left: 0px;
            font-size: 10px;
            color: ${({ theme }) => theme.Color.white};
          }
        }

        input[type="checkbox"]:checked + label span {
          width: 18px;
          height: 18px;
         

          i {
            position: relative;
            top: -2px;
            left: -1px;
            font-size: 20px;
            color: ${({ theme }) => theme.Color.blue[400]};
          }
        }
      }
    }
  }
`;

const CheckBox = styled.span`
  width: 20px;
  height: 20px;
  border: 0.5px solid ${({ theme }) => theme.Color.blue[300]};
  border-radius: 2px;
  color: white;
  background-color: ${({ theme }) => theme.Color.blue[300]};
`;

const TicketList = styled.div`
  width: 784px;
  height: 100vh;
`;
const SearchListTitle = styled.div`
  width: 784px;
  height: 40px;
  display: flex;
  justify-content: space-between;

  select {
    width: 190px;
    height: 40px;
  }
`;
