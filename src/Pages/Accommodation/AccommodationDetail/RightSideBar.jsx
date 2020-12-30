import React, { useEffect, useState } from "react"
import styled from "styled-components"

function RightSideBar({ productArr, ChooseRoom }) {
  const [scrollTop, setScrollTop] = useState(0)
  const [likeBtn, setLikeBtn] = useState(false)
  let [likePerson, setLikePerson] = useState(20)

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll)
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  const handleOnScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop)
    setScrollTop(scrollTop)
  }

  const handleLikeBtn = () => {
    setLikeBtn(!likeBtn)
    setLikePerson(21)
    if (likeBtn) {
      setLikePerson(20)
    }
  }

  console.log(handleOnScroll)

  const { name, image_url } = productArr

  return (
    <RightSideBarWrapper>
      <RightSideBox
      // display={ChooseRoom ? "none" : ""}
      // name={scrollTop > 440 ? "fixed" : ""}
      // onScroll={handleOnScroll}
      >
        <InnerBox>
          <Button blue clicked={ChooseRoom ? "ChooseRoom" : ""}>
            객실선택
          </Button>
          <Button onClick={handleLikeBtn}>
            <i className={likeBtn ? "fas fa-heart full" : "far fa-heart"} />
            위시리스트 담기
          </Button>
          <WishText size="small">
            {likePerson}명이 이 상품을 위시리스트에 담았습니다.
          </WishText>
        </InnerBox>
        <HostInfoBox>
          <HostInfoInnerBox>
            <img alt="host image" src={image_url} />
            <HostName host="host">{name}</HostName>
          </HostInfoInnerBox>
          <span>문의하기</span>
        </HostInfoBox>
        <img
          className="coupon"
          alt="coupon"
          src="https://d2ur7st6jjikze.cloudfront.net/cms/1492_original_1605576382.png?1605576382"
        />
      </RightSideBox>
      {/* <SecondRightSideBox
        display={ChooseRoom ? "block" : ""}
        name={scrollTop > 440 ? "fixed" : ""}
        onScroll={handleOnScroll}
      >
        <SecondInnerBox>
          <InnerUpBox>
            <Roomtype>6인 여성 도미토리</Roomtype>
            <Font>기준1명</Font>
          </InnerUpBox>
          <InnerDwonBox>
            <Font>총 금액</Font>
            <div>
              <SecondSpan>1박</SecondSpan>
              <SecondSpan name="price">24,000원</SecondSpan>
            </div>
          </InnerDwonBox>
          <Button blue>예약하기</Button>
        </SecondInnerBox>
        <HostInfoBox>
          <HostInfoInnerBox>
            <img alt="host image" src={image_url} />
            <HostName>{name}</HostName>
          </HostInfoInnerBox>
          <span>문의하기</span>
        </HostInfoBox>
        <img
          className="coupon"
          alt="coupon"
          src="https://d2ur7st6jjikze.cloudfront.net/cms/1492_original_1605576382.png?1605576382"
        />
      </SecondRightSideBox> */}
    </RightSideBarWrapper>
  )
}

export default RightSideBar

const RightSideBarWrapper = styled.div`
  width: 320px;
`
const RightSideBox = styled.div`
  /* display: ${(props) => (props.display === "none" ? "none" : "")}; */
  position: ${(props) => (props.name === "fixed" ? "fixed" : "fixed")};
  top: ${(props) => (props.name === "fixed" ? "500px" : "500px")};
  width: 320px;

  .coupon {
    width: 320px;
    height: 74px;
    margin-top: 30px;
  }
`

const SecondSpan = styled.span`
  margin-right: 5px;
  color: ${(props) => (props.name === "price" ? "#3297ED" : "lightgray")};
  font-size: ${(props) => (props.name === "price" ? "24px" : "14px")};
  font-weight: ${(props) => (props.name === "price" ? "bold" : "")};
`

const InnerBox = styled.div`
  width: 320px;
  margin-top: 25px;
  padding: 24px;
  background-color: white;
  border: 1px solid lightgray;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
`

const SecondInnerBox = styled(InnerBox)`
  width: 320px;
  margin-top: 25px;
  padding: 24px;
  background-color: white;
  border: 1px solid lightgray;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
`
const InnerUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  border-bottom: 1px solid whitesmoke;
`
const Roomtype = styled.span`
  margin-bottom: 15px;
  font-size: 17px;
  font-weight: bold;
`

const Font = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
`

const Button = styled.button`
  width: 272px;
  height: 48px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => (props.blue ? "white" : "gray")};
  background-color: ${(props) => (props.blue ? "#3297ED" : "white")};
  border: 1px solid whitesmoke;
  border-radius: 5px;
  cursor: pointer;

  .far,
  .fa-heart {
    margin-right: 5px;
    color: gray;
  }

  .full {
    color: red;
  }
`

const WishText = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  color: lightgrey;
`

const HostName = styled.span`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`
const HostInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 72px;
  padding: 24px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0 0 5px 5px;

  span {
    font-size: 15px;
    text-align: center;
    font-weight: bold;
  }
`
const HostInfoInnerBox = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

const InnerDwonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`
