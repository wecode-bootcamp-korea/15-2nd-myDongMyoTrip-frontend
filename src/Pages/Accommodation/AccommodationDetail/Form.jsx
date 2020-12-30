import React, { useEffect, useState } from "react"
import styled from "styled-components"

import FormLayout from "./FormLayout"

function Form({ format, detailProductArr }) {
  const [likeBtn, setLikeBtn] = useState(false)
  let [likePerson, setLikePerson] = useState(20)

  const handleLikeBtn = () => {
    setLikeBtn(!likeBtn)
    setLikePerson(21)
    if (likeBtn) {
      setLikePerson(20)
    }
  }

  return (
    <FormLayout detailProductArr={detailProductArr}>
      {format && format.type === "reservation" && (
        <>
          <>
            <Roomtype>복층커플룸</Roomtype>
            <InnerUpBox>
              <Font>기준2명</Font>
              <>
                <Font>116,000원</Font>
              </>
            </InnerUpBox>
          </>
          <InnerDwonBox>
            <Font>총 금액</Font>
            <div>
              <Font>1박</Font>
              <SecondSpan>116,000원</SecondSpan>
            </div>
          </InnerDwonBox>
          {/* {detailProductArr &&
            detailProductArr.roomtype.map((room) => <span>{room.price}</span>)} */}
        </>
      )}
      {format &&
        format.data.map((a) => (
          <Button type={a.color} onClick={handleLikeBtn}>
            {a.color === "white" ? (
              <i className={likeBtn ? "fas fa-heart full" : "far fa-heart"} />
            ) : (
              ""
            )}
            <span>{a.text}</span>
          </Button>
        ))}

      <p>{format.text}</p>
    </FormLayout>
  )
}

export default Form

const Button = styled.button`
  width: 272px;
  height: 48px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => (props.type === "blue" ? "white" : "gray")};
  background-color: ${(props) => (props.type === "blue" ? "#3297ED" : "white")};
  border: 1px solid whitesmoke;
  border-radius: 5px;
  cursor: pointer;
`

const InnerUpBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px solid whitesmoke;
`

const Roomtype = styled.span`
  font-size: 17px;
  font-weight: bold;
`

const Font = styled.span`
  margin: 15px 0 10px 0;
  font-size: 14px;
`

const InnerDwonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`

const SecondSpan = styled.span`
  margin-right: 5px;
  color: #3297ed;
  font-size: 24px;
  font-weight: bold;
`
