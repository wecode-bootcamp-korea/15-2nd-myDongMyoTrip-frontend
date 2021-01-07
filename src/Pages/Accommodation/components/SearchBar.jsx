import React, { useEffect, useState } from "react"
import { DateRange } from "react-date-range"
import { addDays } from "date-fns"
// import locales from "react-date-range/dist/locale"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

function SearchBar() {
  const [isCalanderOpen, setIsCalanderOpen] = useState(false)
  const [isPersonBoxOpen, setIsPersonBoxOpen] = useState(false)
  const [adultNum, setAdultNum] = useState(1)
  const [kidsNum, setKidsNum] = useState(0)

  // 함수 합쳐보자
  // const [number, setNumber] = useState([
  //   { id: 1, name: "성인", count: 1 },
  //   { id: 2, name: "어린이", count: 0 },
  // ])
  // const handleInrement = (num) => {
  // const numbers = [...number]
  // const index = numbers.indexOf(num)
  // number[index].count + 1
  // setNumber(number)
  // }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ])

  const handleAdultInrement = () => {
    setAdultNum(adultNum + 1)
  }

  const handleAdultDecrement = () => {
    setAdultNum(adultNum < 2 ? 1 : adultNum - 1 && adultNum - 1)
  }

  const handleKidInrement = () => {
    setKidsNum(kidsNum + 1)
  }

  const handleKidDecrement = () => {
    setKidsNum(kidsNum < 1 ? 0 : kidsNum - 1 && kidsNum - 1)
  }

  const handleCalanderBtn = () => {
    setIsCalanderOpen(!isCalanderOpen)
  }

  const handlePersonBtn = () => {
    setIsPersonBoxOpen(!isPersonBoxOpen)
  }

  const newStart = state[0].startDate
  const newEnd = state[0].endDate
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  const startKorDay = week[newStart.getDay()]
  const endKorDay = week[newEnd.getDay()]

  const dateRange = `${
    newStart.getMonth() + 1
  }월  ${newStart.getDate()}일 (${startKorDay}) - ${
    newEnd.getMonth() + 1
  }월 ${newEnd.getDate()}일 (${endKorDay})`

  return (
    <SearchBarContainder name="searchBarBox">
      <div className="searchBarInnerBox">
        <BigButton name="calander" onClick={handleCalanderBtn}>
          <div>
            <i class="fas fa-calendar" />
            {dateRange}
          </div>
          <i className="fas fa-caret-down" />
        </BigButton>
        <Div display={isCalanderOpen} name="calanderBox">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={2}
            direction="horizontal"
            // locales="korean"
          />
        </Div>
        <BigButton onClick={handlePersonBtn}>
          <div>
            <i className="fas fa-user-alt" />
            <span>
              성인 {adultNum}명 / 어린이 {kidsNum}명{" "}
            </span>
          </div>
          <i className="fas fa-caret-down" />
        </BigButton>
        <Div display={isPersonBoxOpen} name="personBox">
          <div className="personBoxTitle">인원선택</div>
          <div className="personInnerBox">
            성인
            <div className="personCircleBox">
              <CircleBtn onClick={handleAdultDecrement}>-</CircleBtn>
              {adultNum}
              <CircleBtn onClick={handleAdultInrement}>+</CircleBtn>
            </div>
          </div>
          <div className="personInnerBox">
            어린이
            <div className="personCircleBox">
              <CircleBtn onClick={handleKidDecrement}>-</CircleBtn>
              {kidsNum}
              <CircleBtn onClick={handleKidInrement}>+</CircleBtn>
            </div>
          </div>
          <Button onClick={handlePersonBtn}>적용하기</Button>
        </Div>
      </div>
    </SearchBarContainder>
  )
}

export default SearchBar

const SearchBarContainder = styled.div`
  display: block;
  margin: 0 auto;
  height: 72px;
  padding: 12px;

  .searchBarInnerBox {
    position: relative;
    display: flex;
    justify-content: space-evenly;

    .fa-calendar-alt {
      margin-right: 10px;
    }
  }
`
const BigButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.name === "calander" ? "" : "center")};
  width: ${(props) => (props.name === "calander" ? "500px" : "250px")};
  height: 50px;
  margin-right: ${(props) => (props.name === "calander" ? "20px" : "")};
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  color: #495056;
  border-radius: 5px;
  background-color: #f5f6f7;
  cursor: pointer;

  .fa-calendar {
    margin-right: 10px;
    color: #495056;
  }

  .fa-user-alt {
    margin-right: 10px;
  }
`
const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 90px;
  padding: 10px 5px;
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
  margin: 0 5px;
  background-color: white;
  border: 1px solid lightblue;
  border-radius: 50%;
`
const Div = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 50px;
  right: ${(props) => (props.name === "personBox" ? "-60px" : "468px;")};
  width: 320px;
  height: 270px;
  padding: ${(props) => (props.name === "personBox" ? "20px" : "0")};
  background-color: ${(props) =>
    props.name === "personBox" ? "white" : "none"};
  border: 1px solid whitesmoke;
  z-index: 1;

  .personBoxTitle {
    font-size: 19px;
    font-weight: bold;
  }

  .personInnerBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;

    .personCircleBox {
      display: flex;
      align-items: center;
    }
  }
`
