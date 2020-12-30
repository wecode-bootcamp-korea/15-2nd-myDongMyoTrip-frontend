import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

import { previnfoArr } from "./detailPageData"

function Review({ detailProductArr }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleReviewBtn = () => {
    setIsClicked(!isClicked)
  }

  useEffect(() => {
    console.log(detailProductArr.review[0])
  }, [])

  return (
    <>
      <ReviewPrevBox>
        <PrevLeftBox>
          <PrevLeftInnerBox>
            <Rate>
              {detailProductArr.review &&
                detailProductArr.review[0].star_rating.slice(0, 3)}
            </Rate>
            <div>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </PrevLeftInnerBox>
          <RateWapper>
            <RateDetailInnerBox>
              <RateDetailInnerBox>
                <div>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </RateDetailInnerBox>
              <RateBar>
                <InnerRateBar />
              </RateBar>
            </RateDetailInnerBox>
            <RateDetailInnerBox>
              <div>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <RateBar>
                <InnerRateBar />
              </RateBar>
            </RateDetailInnerBox>
            <RateDetailInnerBox>
              <div>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <RateBar>
                <InnerRateBar />
              </RateBar>
            </RateDetailInnerBox>
            <RateDetailInnerBox>
              <div>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <RateBar>
                <InnerRateBar />
              </RateBar>
            </RateDetailInnerBox>
            <RateDetailInnerBox>
              <RateDetailInnerBox>
                <i className="fas fa-star" />
              </RateDetailInnerBox>
              <RateBar>
                <InnerRateBar />
              </RateBar>
            </RateDetailInnerBox>
          </RateWapper>
        </PrevLeftBox>
        <PrevRightBox>
          {previnfoArr.map((prev) => (
            <div>
              <RateNameBox>
                <PrevName>{prev.name}</PrevName>
                <PrevName>{prev.rate}</PrevName>
              </RateNameBox>
              <RateBar>
                <InnerRateBar></InnerRateBar>
              </RateBar>
            </div>
          ))}
        </PrevRightBox>
      </ReviewPrevBox>
      <ReviewFilter>
        <li>최신순</li>
        <li>높은 평점순</li>
        <li>낮은 평점순</li>
      </ReviewFilter>
      {detailProductArr.review[0].user_reviews &&
        detailProductArr.review[0].user_reviews.map((review) => (
          <ReviewDiv>
            <>
              <>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <Id>{review.user_name}</Id>
              </>
              <UserInfo>20대/친구와함께여행/{review.created_at}</UserInfo>
            </>
            <ReviewInnerBox>
              <p>{review.context}</p>
              <Img alt="review image" src={review.image_url} />
            </ReviewInnerBox>
          </ReviewDiv>
        ))}
      <PageNation onClick={handleReviewBtn}>
        <img
          alt="icon"
          src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrow_left_sm_gray_300.svg"
        />
        <Button name="first">1</Button>
        <Button>2</Button>
        <img
          alt="icon"
          src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrowright_sm_blue_500.svg"
        />
      </PageNation>
    </>
  )
}

export default Review

const ReviewDiv = styled.div`
  width: 700px;
  margin-top: 20px;
  padding: 20px;
  border-bottom: 1px solid whitesmoke;

  p {
    margin-right: 20px;
    line-height: 160%;
  }

  .fa-star,
  .fa-star-half-alt {
    font-size: ${theme.fontSize.small};
    color: ${theme.Color.blue[400]};
  }
`

const ReviewInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
`

// const Reviewbox = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
const PrevLeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 72px;
  border-right: 1px solid lightgray;
`
const PrevLeftInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;

    .fa-star,
    .fa-star-half-alt {
      /* display: flex; */
      color: ${theme.Color.blue[400]};
    }
  }
`

const RateWapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-left: 20px;
`

const Rate = styled.span`
  font-size: 40px;
  font-weight: bold;
`

const ReviewPrevBox = styled.div`
  display: flex;
  width: 700px;
  height: 142px;
  margin-top: 20px;
  padding: 32px 34px;
  border-bottom: 1px solid whitesmoke;
  background-color: #f8f9fa;
`

const RateDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  cursor: pointer;
`

const RateDetailInnerBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* margin-left: 10px; */
  cursor: pointer;

  .fa-star,
  .fa-star-half-alt {
    color: ${theme.Color.grey[500]};
    font-size: 9px;
  }
`
const RateBar = styled.div`
  position: relative;
  width: 100px;
  height: 4px;
  margin-left: 5px;
  border-radius: 4px;
  background-color: rgb(222, 226, 230);
`

const InnerRateBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 90%;
  height: 4px;
  border-radius: 4px;
  background-color: rgb(81, 171, 243);
`

const PrevRightBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 23px;
  width: 340px;
  height: 72px;
  padding: 0px 28px;
`

const RateNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PrevName = styled.span`
  margin-bottom: 10px;
  font-size: 13px;
`
const ReviewFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 700px;
  margin-top: 20px;
  padding: 20px;
  border-bottom: 1px solid whitesmoke;

  li {
    margin-right: 10px;
    font-size: 13px;
  }
`

const Id = styled.span`
  margin-bottom: 10px;
  font-weight: bold;
`

const UserInfo = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${theme.Color.grey[300]};
  font-size: 13px;
`

const Img = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 5px;
`
const Button = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  text-align: center;
  background-color: ${(props) =>
    props.name === "first" ? "#51abf3" : "white"};
  color: ${(props) => (props.name === "first" ? "white" : "#51abf3")};
  cursor: pointer;

  &:hover {
    width: 34px;
    height: 34px;

    border: 3px solid #51abf3;
  }
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
