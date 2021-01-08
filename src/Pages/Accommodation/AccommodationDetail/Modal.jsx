import React, { useEffect, useState } from "react"

import Form from "./Form"

function Modal({ detailProductArr, ChooseRoom }) {
  return (
    <div>
      {ChooseRoom ? (
        <Form detailProductArr={detailProductArr} format={CHOOSEPROPS} />
      ) : (
        <Form detailProductArr={detailProductArr} format={RESERVEPROPS} />
      )}
    </div>
  )
}

export default Modal

const CHOOSEPROPS = {
  type: "choose",
  name: "복층커플룸(오션뷰)",
  person: "기준 2명",
  total: "총 금액",
  night: "1박",
  price: "69,000",
  text: "명이 이 상품을 위시리스트에 담았습니다.",
  data: [
    {
      type: "button",
      color: "blue",
      text: "객실선택",
    },
    {
      type: "button",
      color: "white",
      text: "위시리스트 담기",
    },
  ],
}

const RESERVEPROPS = {
  type: "reservation",
  text: "",
  data: [
    {
      type: "button",
      color: "blue",
      text: "예약하기",
    },
  ],
}