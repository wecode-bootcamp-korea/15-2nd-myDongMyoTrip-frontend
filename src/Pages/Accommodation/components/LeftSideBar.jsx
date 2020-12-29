import React, { Component } from "react"
import styled from "styled-components"

class LeftSideBar extends Component {
  render() {
    return (
      <LeftSideBarContainer>
        <div className="themeTitle">테마</div>
        {this.props.themeArr.map((theme) => (
          <div className="leftSideBarTheme">
            <span># {theme.name}</span>
          </div>
        ))}
        <div className="leftSideFilterName">
          <span className="filterTitle">필터</span>
          <span className="filterReset">초기화</span>
        </div>
        <div className="leftSideBarFilterContainer">
          <span className="filterInnerTitle">공용시설</span>
          {this.props.sideFilterArr.map((sideFilter) => (
            <div className="leftSideBarFilter">
              <input className="leftSideCheckbox" type="checkbox" />
              {sideFilter.name}
            </div>
          ))}
        </div>
      </LeftSideBarContainer>
    )
  }
}

export default LeftSideBar

const LeftSideBarContainer = styled.div`
  .themeTitle {
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .leftSideBarTheme {
    width: 250px;
    height: 40px;
    margin: 10px;
    padding: 12px;
    border: 1px solid lightgray;
    border-radius: 20px;
    font-size: 14px;

    span {
      font-size: 15px;
      color: gray;
    }
  }

  .leftSideFilterName {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-top: 30px;

    .filterTitle {
      font-size: 20px;
      font-weight: bold;
    }

    .filterReset {
      color: lightgray;
      font-weight: bold;
    }
  }

  .leftSideBarFilterContainer {
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;

    .filterInnerTitle {
      font-size: 18px;
      font-weight: bold;
    }

    .leftSideBarFilter {
      display: flex;
      align-items: center;
      font-size: 15px;
      padding-top: 15px;

      .leftSideCheckbox {
        width: 18px;
        height: 18px;
        zoom: 1.5;
        border: 1px solid gray;
      }
    }
  }
`
const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
`
