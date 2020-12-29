import React, { Component } from "react"
import styled from "styled-components"

class LeftSideBar extends Component {
  render() {
    return (
      <LeftSideBarContainer>
        {this.props.themeArr.map((theme) => (
          <div className="leftSideBarTheme">
            <Span># {theme.name}</Span>
          </div>
        ))}
        <div className="leftSideFilterName">
          <Span>필터</Span>
          <Span>초기화</Span>
        </div>
        <div className="leftSideBarFilterContainer">
          <Span>공용시설</Span>
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
  position: absolute;
  left: 650px;
  top: 140px;

  .leftSideBarTheme {
    width: 250px;
    height: 40px;
    margin: 10px;
    padding: 12px;
    border: 1px solid lightgray;
    border-radius: 20px;
    font-size: 14px;
  }

  // leftSideFilterName {
  //   display: flex;
  //   justify-content: space-between;
  //   margin-top: 20px;
  // }

  .leftSideBarFilterContainer {
    height: 500px;
    margin-top: 15px;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;

    .leftSideBarFilter {
      padding: 12px;
      font-size: 15px;

      .leftSideCheckbox {
        width: 18px;
        height: 18px;
      }
    }
  }
`
const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
`
