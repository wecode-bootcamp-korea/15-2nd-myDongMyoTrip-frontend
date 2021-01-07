import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

function LeftSideBar({
  handleFilterTheme,
  handleFilter,
  themeArr,
  dormitories,
  general_rooms,
  free_services,
  shared_facilities,
  room_amenities,
}) {
  return (
    <LeftSideBarWrapper>
      <ThemeTitle>테마</ThemeTitle>
      {themeArr.map((theme) => (
        <ThemeBox onClick={handleFilterTheme}>
          <ThemeName id={theme.id}># {theme.type}</ThemeName>
        </ThemeBox>
      ))}
      <FilterNameBox>
        <FilterTitle>필터</FilterTitle>
        <FilterReset>초기화</FilterReset>
      </FilterNameBox>
      <FilterBox>
        <FilterInnerBox>
          <FilterInnerTitle>도미토리</FilterInnerTitle>
          {dormitories.map((dormitory) => (
            <Filters>
              <LeftSideCheckbox
                value="dormitory"
                id={dormitory.id}
                onClick={handleFilter}
              />
              {dormitory.type}
            </Filters>
          ))}
        </FilterInnerBox>
        <FilterInnerBox>
          <FilterInnerTitle>일반실</FilterInnerTitle>
          {general_rooms.map((room) => (
            <Filters>
              <LeftSideCheckbox
                value="room"
                id={room.id}
                onClick={handleFilter}
              />
              {room.type}
            </Filters>
          ))}
        </FilterInnerBox>
        <FilterInnerBox>
          <FilterInnerTitle>무료 서비스</FilterInnerTitle>
          {free_services.map((service) => (
            <Filters>
              <LeftSideCheckbox
                value="service"
                id={service.id}
                onClick={handleFilter}
              />
              {service.type}
            </Filters>
          ))}
        </FilterInnerBox>
        <FilterInnerBox>
          <FilterInnerTitle>공용 시설</FilterInnerTitle>
          {shared_facilities.map((facility) => (
            <Filters>
              <LeftSideCheckbox
                value="facility"
                id={facility.id}
                onClick={handleFilter}
              />
              {facility.type}
            </Filters>
          ))}
        </FilterInnerBox>
        <FilterInnerBox>
          <FilterInnerTitle>객실 내 편의 시설</FilterInnerTitle>
          {room_amenities.map((amenity) => (
            <Filters>
              <LeftSideCheckbox
                value="amenity"
                id={amenity.id}
                onClick={handleFilter}
              />
              {amenity.type}
            </Filters>
          ))}
        </FilterInnerBox>
      </FilterBox>
    </LeftSideBarWrapper>
  )
}

export default LeftSideBar

const LeftSideBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
`

const ThemeTitle = styled.h1`
  margin: 0 0 20px 20px;
  font-size: 20px;
  font-weight: bold;
`

const ThemeBox = styled.div`
  width: 250px;
  height: 40px;
  margin: 5px;
  padding: 12px;
  border: 1px solid lightgray;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`

const ThemeName = styled.span`
  font-size: ${theme.fontSize.small};
  color: ${theme.Color.grey[500]};
`
const FilterNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
  padding: 10px;
`

const FilterTitle = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: bold;
`

const FilterReset = styled.span`
  font-size: ${theme.fontSize.small};
  color: ${theme.Color.grey[400]};
  font-weight: bold;
`

const FilterBox = styled.div`
  padding: 20px;
  border: 1px solid ${theme.Color.grey[300]};
  border-radius: 5px;
`

const FilterInnerBox = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 1px solid ${theme.Color.grey[100]};

  div:last-child {
    border: none;
  }
`

const Filters = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  font-size: ${theme.fontSize.small};
  color: ${theme.Color.grey[600]};
`

const FilterInnerTitle = styled.span`
  font-size: ${theme.fontSize.medium};
  font-weight: 500;
`

const LeftSideCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
  margin: 5px;
  zoom: 1.1;
`
