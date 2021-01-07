import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

import Accommodation from "./Accommodation"
import LeftSideBar from "./LeftSideBar"
import SearchBar from "../components/SearchBar"

import { useHistory } from "react-router-dom"
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

function AccommodationList() {
  const [date, setDate] = useState("")
  const [productArr, setProductArr] = useState([])

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

  return (
    <>
      <SearchBarBox>
        <SearchBarInnerBox>
          <SearchBarName>제주도</SearchBarName>
          <SearchBar />
          {setDate}
        </SearchBarInnerBox>
      </SearchBarBox>
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
