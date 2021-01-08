import React, { useEffect, useState } from "react"
import styled from "styled-components"

function FormLayout(props) {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll)
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  const handleOnScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop)
    setScrollTop(scrollTop)
  }

  return (
    <Wrapper>
      <RightSideBox name={scrollTop > 440 ? "fixed" : ""}>
        <InnerBox>{props.children}</InnerBox>
        <HostInfoBox>
          <HostInfoInnerBox>
            <img alt="host image" src={props.detailProductArr.host.image_url} />
            <HostName>{props.detailProductArr.host.name}</HostName>
          </HostInfoInnerBox>
          <div>
            <i className="far fa-envelope" />
            <AskToHost>문의하기</AskToHost>
          </div>
        </HostInfoBox>
        <img
          className="coupon"
          alt="10% Discount Coupon"
          src="https://d2ur7st6jjikze.cloudfront.net/cms/1492_original_1605576382.png?1605576382"
        />
      </RightSideBox>
    </Wrapper>
  )
}

export default FormLayout

const Wrapper = styled.div`
  .coupon {
    width: 320px;
    height: 74px;
    margin-top: 15px;
  }
`

const RightSideBox = styled.div`
  position: ${(props) => (props.name === "fixed" ? "fixed" : "")};
  top: ${(props) => (props.name === "fixed" ? "35px" : "")};
  right: ${(props) => (props.name === "fixed" ? "180px" : "")};
  width: 320px;
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

  .fa-envelope {
    color: #3397ed;
    margin-right: 5px;
  }
`

const AskToHost = styled.span`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #3397ed;
  cursor: pointer;
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

const HostName = styled.span`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`
