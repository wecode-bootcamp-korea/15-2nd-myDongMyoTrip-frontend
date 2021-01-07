import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

function RoomList({ productArr, ChooseRoom }) {
  const {
    name,
    price,
    minimum,
    maximum,
    room_type_amenity,
    number_of_bed,
    minimum_reservation,
    image,
  } = productArr

  const purePrice = Number(price).toLocaleString()

  return (
    <Wrap>
      <SmallDiv>
        <img alt="Detail image" src={image} />
        <SmallDiv name="info">
          <h3>{name}</h3>
          <Span>
            기준{minimum}명, 최대{maximum}명
          </Span>
          <Span>침대 {number_of_bed}개</Span>
          <Span>최소 예약: {minimum_reservation}박이상</Span>
          <Span name="more">객실정보 더보기</Span>
        </SmallDiv>
      </SmallDiv>
      <SmallDiv name="rightInfo">
        <div>
          <Span>1박 최저</Span>
          <Price>{purePrice}</Price>
        </div>
        <Button onClick={ChooseRoom}>선택</Button>
      </SmallDiv>
    </Wrap>
  )
}

export default RoomList

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 137px;
  margin-bottom: 10px;
  padding: 14px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 11px 13px 8px -8px rgba(0,0,0,0.29);
 
  &:hover { 
  }

    img {
      width: 80px;
      height: 96px;
      margin-right: 10px;
      border-radius: 5px;
      object-fit: cover;
    }
  }
`
const SmallDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.name === "info" ? "column" : "")};
  align-items: ${(props) => (props.name !== "info" ? "center" : "")};
  cursor: pointer;

  h3 {
    font-size: 18px;
    font-weight: 500;
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
  text-align: center;
  color: #3e9fef;
  background-color: ${theme.Color.blue[50]};
`

const Span = styled.span`
  margin-top: ${(props) => (props.name === "more" ? "10px" : "3px")};
  font-size: ${(props) => (props.name === "more" ? "14px" : "12px")};
  font-weight: ${(props) => (props.name === "more" ? "500" : "")};
  color: ${(props) => (props.name === "more" ? "#5FADF1" : "#AEB3B8")};
  cursor: ${(props) => (props.name === "more" ? "pointer" : "")}; ;
`
const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`
