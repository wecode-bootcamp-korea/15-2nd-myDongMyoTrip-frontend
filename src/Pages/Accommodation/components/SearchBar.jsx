import React, { Component } from "react"
import { DateRange } from "react-date-range"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      isCalanderOpen: false,
      isPersonBoxOpen: false,
      adultNum: 1,
      kidsNum: 0,
    }
  }

  onRangeChange = (ranges) => {
    this.setState({
      startDate: ranges["selection"].startDate,
      endDate: ranges["selection"].endDate,
      key: ranges["selection"].key,
    })
  }

  handleCalanderBtn = () => {
    this.setState({
      isCalanderOpen: !this.state.isCalanderOpen,
    })
  }

  handlePersonBtn = () => {
    this.setState({
      isPersonBoxOpen: !this.state.isPersonBoxOpen,
    })
  }
  render() {
    const { startDate, endDate } = this.state
    const week = ["일", "월", "화", "수", "목", "금", "토"]
    const startKorDay = week[startDate.getDay()]
    const endKorDay = week[endDate.getDay()]

    const dateRange = `${
      startDate.getMonth() + 1
    }월  ${startDate.getDate()}일 (${startKorDay}) - ${
      endDate.getMonth() + 1
    }월 ${endDate.getDate()}일 (${endKorDay})`

    return (
      <SearchBarContainder>
        <div className="searchBarBox">
          <div className="searchBarInnerBox">
            <div className="searchBarName">
              <h1>제주도</h1>
            </div>
            <div className="calanderBtn" onClick={this.handleCalanderBtn}>
              <div>
                <i className="far fa-calendar-alt" />
                {dateRange}
              </div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02IDRMMTAgOC4wMDIgNi4wMDUgMTIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDggOCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
              <div className={this.state.isCalanderOpen ? "block" : "none"}>
                <DateRange
                  editableDateInputs={true}
                  onChange={this.onRangeChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[this.state]}
                  months={2}
                  direction="column"
                />
              </div>
            </div>
            <div className="personBtn" onClick={this.handlePersonBtn}>
              <div>
                <i className="fas fa-user-alt" />
                <span>성인 1명</span>
              </div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02IDRMMTAgOC4wMDIgNi4wMDUgMTIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDggOCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
              <div
                className={
                  this.state.isPersonBoxOpen
                    ? "personBoxBlock"
                    : "personBoxNone"
                }
              >
                <div className="personBoxTitle">인원선택</div>
                <div className="personInnerBox">
                  성인
                  <div className="personCircleBox">
                    <CircleBtn>-</CircleBtn>
                    {this.state.adultNum}
                    <CircleBtn>+</CircleBtn>
                  </div>
                </div>
                <div className="personInnerBox">
                  어린이
                  <div className="personCircleBox">
                    <CircleBtn>-</CircleBtn>
                    {this.state.kidsNum}
                    <CircleBtn>+</CircleBtn>
                  </div>
                </div>
                <Button>적용하기</Button>
              </div>
            </div>
          </div>
        </div>
      </SearchBarContainder>
    )
  }
}

export default SearchBar

const SearchBarContainder = styled.div`
  border: 1px solid lightgray;
  margin-bottom: 50px;
  box-shadow: 1px 5px 22px 0px rgba(0, 0, 0, 0.11);

  .searchBarBox {
    display: block;
    margin: 0 auto;
    width: 1060px;
    height: 72px;
    padding: 12px;

    .searchBarInnerBox {
      display: flex;
      justify-content: space-evenly;

      .searchBarName {
        width: 200px;
        height: 60px;
        margin-right: 80px;
        padding: 12px;
        font-size: 28px;
        font-weight: bold;
      }

      .calanderBtn {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 530px;
        height: 50px;
        margin-right: 20px;
        padding: 14px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        background-color: #f5f6f7;
        cursor: pointer;

        .fa-calendar-alt {
          margin-right: 10px;
        }

        .block {
          display: block;
          position: absolute;
          top: 50px;
          width: 300px;
          height: 300px;
          background-color: white;
          z-index: 1;
        }

        .none {
          display: none;
        }
      }
    }

    .personBtn {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 230px;
      height: 50px;
      padding: 12px;
      border-radius: 5px;
      background-color: #f5f6f7;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;

      .fa-user-alt {
        margin-right: 10px;
      }

      .personBoxBlock {
        display: block;
        position: absolute;
        width: 320px;
        height: 270px;
        top: 50px;
        padding: 20px;
        color: gray;
        background-color: white;
        border: 1px solid whitesmoke;
        box-shadow: 2px 5px 5px 0px rgba(0, 0, 0, 0.11);
        z-index: 1;

        .personBoxTitle {
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: bold;
        }

        .personInnerBox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          font-size: 16px;
          font-weight: bold;

          .personCircleBox {
            display: flex;
            align-items: center;
          }
        }
      }
      .personBoxNone {
        display: none;
      }
    }
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 90px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #2b96ed;
`

const CircleBtn = styled.button`
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-left: 0.5em;
  margin-right: 0.5em;
  background-color: white;
  border: 1px solid lightblue;
  border-radius: 50%;
`
