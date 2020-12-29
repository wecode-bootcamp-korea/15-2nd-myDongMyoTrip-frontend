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
      <div>
        <SearchBarContainder>
          <div className="searchBarBox">
            <div className="searchBarName">
              <h1>제주도</h1>
            </div>
            <div className="calanderBtn" onClick={this.handleCalanderBtn}>
              <div>
                <i className="far fa-calendar-alt" />
                {dateRange}
              </div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02IDRMMTAgOC4wMDIgNi4wMDUgMTIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDggOCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
            </div>
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
            <div className="personBtn" onClick={this.handlePersonBtn}>
              <div>
                <i className="fas fa-user-alt" />
                성인 1명
              </div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik02IDRMMTAgOC4wMDIgNi4wMDUgMTIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDggOCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
            </div>
            <div
              className={this.state.isPersonBoxOpen ? "personBoxBlock" : "none"}
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
        </SearchBarContainder>
      </div>
    )
  }
}

export default SearchBar

const SearchBarContainder = styled.div`
  display: block;
  margin: auto 0;
  margin-bottom: 50px;
  width: 1060px;
  height: 72px;
  padding: 12px;

  .searchBarBox {
    display: flex;
    justify-content: space-evenly;

    .searchBarName {
      width: 200px;
      height: 48px;
      margin-right: 80px;
      padding: 12px;
      font-size: 28px;
      font-weight: bold;
    }

    .calanderBtn {
      display: flex;
      justify-content: space-between
      width: 530px;
      height: 48px;
      margin-right: 20px;
      padding: 12px;
      font-size: 20px;
      border-radius: 5px;
      background-color: #f5f6f7;
      cursor: pointer;

      .fa-calendar-alt {
        margin-right: 10px;
      }
    }

    .block {
      display: block;
      position: absolute;
      top: 190px;
      left: 960px;
      width: 300px;
      height: 300px;
      background-color: white;
      z-index: 1;
    }

    .none {
      display: none;
    }

    .personBtn {
      display: flex;
      justify-content: space-between
      width: 230px;
      height: 48px;
      padding: 12px;
      border-radius: 5px;
      background-color: #f5f6f7;
      font-size: 20px;
      cursor: pointer;

      .fa-user-alt {
        margin-right: 10px;
      }
    }

    .personBox {
      position: relative;
      width: 300px;
      height: 180px;
      background-color: white;
    }

    .personBoxBlock {
      display: block;
      position: absolute;
      width: 400px;
      height: 280px;
      top: 190px;
      right: 610px;
      padding: 20px;
      color: gray;
      background-color: white;
      border: 1px solid whitesmoke;
      box-shadow: 2px 5px 5px 0px rgba(0, 0, 0, 0.11);
      z-index: 1;

      .personBoxTitle {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
      }

      .personInnerBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        font-size: 20px;

        .personCircleBox {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 18px;
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
