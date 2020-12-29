import React, { Component } from "react"
import "../components/LeftSideBar.scss"

class LeftSideBar extends Component {
  render() {
    return (
      <div className="leftSideBar">
        {this.props.themeArr.map((theme) => (
          <div className="leftSideBarTheme">
            <span> # {theme.name}</span>
          </div>
        ))}
        <div className="leftSideFilterName">
          <span>필터</span>
          <span>초기화</span>
        </div>
        <div className="leftSideBarFilterContainer">
          <span>공용시설</span>
          {this.props.sideFilterArr.map((sideFilter) => (
            <div className="leftSideBarFilter">
              <input className="leftSideCheckbox" type="checkbox" />
              {sideFilter.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default LeftSideBar
