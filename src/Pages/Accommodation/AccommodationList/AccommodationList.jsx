import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

import Accommodation from "./Accommodation"
import LeftSideBar from "./LeftSideBar"
import SearchBar from "../components/SearchBar"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

import * as config from "../../../config"

import {
  dormitories,
  general_rooms,
  free_services,
  shared_facilities,
  room_amenities,
  themeArr,
} from "./AccommodationListData"

const LIMIT = 15
function AccommodationList() {
  const [date, setDate] = useState("")
  const [productArr, setProductArr] = useState([])
  const [isPageBtnClicked, setIsPageBtnClicked] = useState([])
  // const [pageArr, setPageArr] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch(config.ACCOMMODATION_LIST_API)
      .then((response) => response.json())
      .then((response) => setProductArr(response.accommodation_list))
  }

  const handleFilterTheme = (e) => {
    fetch(`${config.ACCOMMODATION_LIST_API}?theme=${e.target.id}`)
      .then((response) => response.json())
      .then((response) => setProductArr(response.accommodation_list))
  }
  const handleFilter = (e) => {
    if (e.target.defaultValue === "dormitory") {
      fetch(`${config.ACCOMMODATION_LIST_API}?dormitories=${e.target.id}`)
        .then((response) => response.json())
        .then((response) => setProductArr(response.accommodation_list))
    }
    if (e.target.defaultValue === "room") {
      fetch(`${config.ACCOMMODATION_LIST_API}?general_rooms=${e.target.id}`)
        .then((response) => response.json())
        .then((response) => setProductArr(response.accommodation_list))
    }
    if (e.target.defaultValue === "service") {
      fetch(`${config.ACCOMMODATION_LIST_API}?free_services=${e.target.id}`)
        .then((response) => response.json())
        .then((response) => setProductArr(response.accommodation_list))
    }
    if (e.target.defaultValue === "facility") {
      fetch(`${config.ACCOMMODATION_LIST_API}?shared_facilities=${e.target.id}`)
        .then((response) => response.json())
        .then((response) => setProductArr(response.accommodation_list))
    }
    if (e.target.defaultValue === "amenity") {
      fetch(`${config.ACCOMMODATION_LIST_API}?room_amenities=${e.target.id}`)
        .then((response) => response.json())
        .then((response) => setProductArr(response.accommodation_list))
    }
  }

  const handlePagination = (e) => {
    setIsPageBtnClicked(!isPageBtnClicked)

    // let newPageArr = [...pageArr]
    // newPageArr = newPageArr.map((item) => {
    //   if (+offset === item.id) {
    //     item.selected = !item.selected
    //     return item
    //   } else {
    //     item.selected = false
    //     return item
    //   }
    // })
    // setPageArr(updatedPageArr)

    const offset = e?.target.dataset.idx
    fetch(`${config.ACCOMMODATION_LIST_API}?limit=15&offset=${offset * LIMIT}`)
      .then((response) => response.json())
      .then((response) => setProductArr(response.accommodation_list))
  }

  // console.log(isPageBtnClicked)

  return (
    <>
      <SearchBarBox>
        <SearchBarInnerBox>
          <SearchBarName>제주도</SearchBarName>
          <SearchBar />
          {setDate}
        </SearchBarInnerBox>
      </SearchBarBox>
      <>
        <AccommodationListBox>
          <LeftSideBar
            dormitories={dormitories}
            general_rooms={general_rooms}
            free_services={free_services}
            shared_facilities={shared_facilities}
            room_amenities={room_amenities}
            themeArr={themeArr}
            handleFilterTheme={handleFilterTheme}
            handleFilter={handleFilter}
          />
          <Accommodation productArr={productArr} />
        </AccommodationListBox>
        <PageNation onClick={handlePagination}>
          <img
            alt="icon"
            src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrow_left_sm_gray_300.svg"
          />
          <Button
            name={isPageBtnClicked ? "blue" : ""}
            data-idx="0"
            name="first"
          >
            1
          </Button>
          <Button name={isPageBtnClicked ? "blue" : ""} data-idx="1">
            2
          </Button>
          <Button name={isPageBtnClicked ? "blue" : ""} data-idx="2">
            3
          </Button>
          <Button name={isPageBtnClicked ? "blue" : ""} data-idx="3">
            4
          </Button>
          <img
            alt="icon"
            src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrowright_sm_blue_500.svg"
          />
        </PageNation>
      </>
    </>
  )
}

export default AccommodationList

const SearchBarBox = styled.div`
  height: 72px;
  border: 1px solid ${theme.Color.grey[100]};
  margin-bottom: 50px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.11);
`

const SearchBarInnerBox = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
`

const SearchBarName = styled.h1`
  width: 200px;
  height: 60px;
  margin-right: 80px;
  padding: 12px;
  font-size: 28px;
  font-weight: bold;
`

const AccommodationListBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
`

const PageNation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  img {
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Button = styled.button`
  all: unset;
  width: 56px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #3e9fef;
  background-color: white;
  /* color: ${(props) => (props.name === "blue" ? "3e9fef" : "white")}; */
  /* background-color: ${(props) =>
    props.name === "blue" ? "white" : "#3e9fef"}; */
`
