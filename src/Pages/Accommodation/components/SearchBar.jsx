import React, { Component } from "react"
import { DateRange } from "react-date-range"
// import { DateRangePicker } from "react-date-range"
// import { addDays } from "date-fns"
import "../components/SearchBar.scss"

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
    const dateRange = `${
      startDate.getMonth() + 1
    }월  ${startDate.getDate()}일 (${startDate.getDay()}) - ${
      endDate.getMonth() + 1
    }월 ${endDate.getDate()}일 (${endDate.getDay()})`

    return (
      <div className="searchBar">
        <div className="searchBarContainer">
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
            <li>어린이</li>
            <button>적용하기</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
