import React, { Component } from "react"
import { DateRange } from "react-date-range"
import styled from "styled-components"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      isCalanderOpen: false,
      isPersonBoxOpen: false,
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
          <div className="searchBarName">
            <h1>제주도</h1>
          </div>
          <div className="calanderBtn" onClick={this.handleCalanderBtn}>
            <i className="far fa-calendar-alt" />
            {dateRange}
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
            <i className="fas fa-user-alt" />
            성인 1명
          </div>
          <div
            className={this.state.isPersonBoxOpen ? "personBoxBlock" : "none"}
          >
            <span>인원선택</span>
            <li>성인</li>
            <Button></Button>
            <li>어린이</li>
            <Button></Button>
            <Button>적용하기</Button>
          </div>
        </div>
      </SearchBarContainder>
    )
  }
}

export default SearchBar

const SearchBarContainder = styled.div`
  display: block;
  margin: auto 0;
  width: 1060px;
  height: 72px;
  padding: 12px;

  .searchBarBox {
    display: flex;
    justify-content: space-evenly;

    .searchBarName {
      width: 200px;
      height: 48px;
      padding: 16px;
      font-size: 28px;
      font-weight: bold;
    }

    .calanderBtn {
      width: 530px;
      height: 48px;
      padding: 18px;
      font-size: 20px;
      border-radius: 5px;
      background-color: #f5f6f7;
      font-weight: bold;
      cursor: pointer;

      .fa-calendar-alt {
        margin-right: 10px;
      }
    }

    .block {
      display: block;
      position: absolute;
      top: 60px;
      left: 950px;
      width: 300px;
      height: 300px;
      background-color: white;
      z-index: 1;
    }

    .none {
      display: none;
    }

    .personBtn {
      width: 230px;
      height: 48px;
      padding: 18px;
      border-radius: 5px;
      background-color: #f5f6f7;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;

      .fa-user-alt {
        margin-right: 10px;
      }
    }

    .personBox {
      position: relative;
      width: 300px;
      height: 200px;
      background-color: white;
    }

    .personBoxBlock {
      display: block;
      position: absolute;
      width: 300px;
      height: 200px;
      right: 600px;
      padding: 20px;
      background-color: white;
      z-index: 1;

      span {
        margin: 10px;
        font-size: 20px;
        font-weight: bold;
        list-style: none;
      }
      li {
        margin: 10px;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
        list-style: none;
      }
    }
  }
`

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 20px;
  padding: 12px;
  border-radius: 5px;
  color: white;
  background-color: #2b96ed;
`
