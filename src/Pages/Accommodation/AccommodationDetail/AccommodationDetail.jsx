import React, { useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"
import SearchBar from "../components/SearchBar"
import MainImage from "./MainImage"
import RoomList from "./RoomList"
import Review from "./Review"
import Modal from "./Modal"

import * as config from "../../../config"

import {
  pointArr,
  noticeArr,
  infoArr,
  moreInfoArr,
  cancelArr,
} from "./detailPageData"

function AccommodationDetail(props) {
  const [detailProductArr, setDetailProductArr] = useState({})
  const [isChooseRoomBtnClicked, setIsChooseRoomBtnClicked] = useState(false)
  const [isAvailableBtnClicked, setIsAvailableBtnClicked] = useState(false)
  const [isReadMoreBtnClicked, setIsReadMoreBtnClicked] = useState(false)
  const [getName, setGetName] = useState([])
  const [getPrice, setGetPrice] = useState([])

  useEffect(() => {
    getDetailProducts()
  })

  const getDetailProducts = () => {
    fetch(`${config.ACCOMMODATION_DETAIL_API}/${props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => setDetailProductArr(response.accommodation_detail))
  }

  const handleChooseRoom = () => {
    setIsChooseRoomBtnClicked(!isChooseRoomBtnClicked)
  }

  const handleAvailableBtn = () => {
    setIsAvailableBtnClicked(!isAvailableBtnClicked)
  }

  const handleisMoreBtn = () => {
    setIsReadMoreBtnClicked(!isReadMoreBtnClicked)
  }

  const getListName = (name) => {
    setGetName(name)
  }

  const getListPrice = (price) => {
    setGetPrice(price)
  }
  console.log(getPrice)
  const {
    name,
    description,
    free_service,
    shared_facility,
    roomtype,
    image_url,
  } = detailProductArr

  //detailProductArr.name값이 트루이면(===빈객체이면) <div>를 return하도록,
  if (!detailProductArr.name) return <div>loading...</div>
  return (
    <>
      <MainImage detailProductArr={image_url} />
      <AccommodationDetailWrapper>
        <InfoBox>
          <>
            <AccommodationNameBox>
              <h1>{name}</h1>
              <a
                href="https://www.google.com/maps/place/33%C2%B026'45.9%22N+126%C2%B017'42.5%22E"
                target="_blank"
                rel="noreferrer"
              >
                <MapBtn>
                  <i className="far fa-map" />
                  <span>위치보기</span>
                </MapBtn>
              </a>
            </AccommodationNameBox>
            <AccommodationDescBox>
              <span>{description}</span>
            </AccommodationDescBox>
            <RateBox>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              {/* <span>{detailProductArr.review.star_rating}</span>
              <span>({detailProductArr.revie.number_of_reviews})</span> */}
              <i className="fas fa-caret-down" />
            </RateBox>
            <FreeMealTag>무료조식</FreeMealTag>
            <NoticeBox>
              <NoticeTitleBox>
                <i className="fas fa-info-circle" />
                <h2>필독사항</h2>
              </NoticeTitleBox>
              <p>
                본 숙소는 공동생활을 하는 게스트하우스로 펜션이나 호텔의 시설을
                원하시는 분들은 정중히 예약을 사양합니다. 화장실, 주방 등을
                쉐어하며 2층침대로 구성되어있는 숙소로 서로를 배려하며 예의를
                지켜주시길 당부드립니다. 잠버릇이 심하거나 새벽에 알람을 듣고 꼭
                깨야하시는 분들, 술버릇이 심하신 분들은 퇴실조치 될 수 있으므로
                주의 부탁드립니다.
              </p>
            </NoticeBox>
          </>
          <DetailChooseBox name="searchBarBox">
            <h2>객실선택</h2>
            <SearchBar />
          </DetailChooseBox>
          <AvailableRoomBtnBox>
            <AvailableRoomBtninnerBox>
              <span>예약가능객실만</span>
              <div onClick={handleAvailableBtn}>
                <div
                  className={
                    isAvailableBtnClicked
                      ? "onRoomAvailableBtn"
                      : "roomAvailableBtn"
                  }
                >
                  <div className="circleBtn"></div>
                </div>
              </div>
            </AvailableRoomBtninnerBox>
          </AvailableRoomBtnBox>
          {roomtype &&
            roomtype.map((room, idx) => (
              <RoomList
                key={idx}
                id={room.id}
                productArr={room}
                ChooseRoom={handleChooseRoom}
                getValue={getListName}
                getPrice={getListPrice}
                // clickBtn={handleChooseRoom}
              />
            ))}
          <PointBox>
            <h3>이 숙소 매력 포인트 </h3>
            {pointArr.map((point) => (
              <span className="point">
                <i class="fas fa-check" />
                {point.content}
              </span>
            ))}
          </PointBox>
          <CheckInOutBox>
            <div>
              <SubTitle>체크인</SubTitle>
              <SubTitle name="time">03:00PM</SubTitle>
            </div>
            <d className="line" />
            <div>
              <SubTitle>체크아웃</SubTitle>
              <SubTitle name="time">11:00PM</SubTitle>
            </div>
          </CheckInOutBox>
          <MealNoticeBox>
            <SubTitle>식사제공</SubTitle>
            <li>조식 : 시리얼, 토스트 셀프 제공</li>
            <li>석식 (없음)</li>
          </MealNoticeBox>
          <Table>
            <SubTitle>공용시설</SubTitle>
            <tbody>
              {shared_facility &&
                shared_facility.map((facility) => (
                  <tr>
                    <td>
                      <img alt={facility.name} src={facility.image_url} />
                      <span>{facility.name}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Table>
            <SubTitle>무료 서비스</SubTitle>
            <tbody>
              {free_service &&
                free_service.map((service) => (
                  <tr>
                    <td>
                      <img alt={service.name} src={service.image_url} />
                      <span>{service.name}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <RulesBox>
            <SubTitle>이용규칙</SubTitle>
            {noticeArr.map((notice) => (
              <Li>{notice.content}</Li>
            ))}
          </RulesBox>
          <IntroduceBox>
            <SubTitle>숙소안내</SubTitle>
            {infoArr.map((info) => (
              <>
                <p>{info.content}</p>
                <br />
              </>
            ))}
            <div className={isReadMoreBtnClicked ? "block" : "none"}>
              {moreInfoArr.map((moreInfo) => (
                <>
                  <p>
                    [{moreInfo.subName}]<Li>{moreInfo.content}</Li>
                  </p>
                  <br />
                </>
              ))}
            </div>
            <IntroduceHideBox name={isReadMoreBtnClicked ? "none" : "block"}>
              <IntroduceHideButton
                name={isReadMoreBtnClicked ? "none" : "block"}
                onClick={handleisMoreBtn}
              >
                숙소 소개 더보기
                <i className="fas fa-caret-down" />
              </IntroduceHideButton>
            </IntroduceHideBox>
          </IntroduceBox>

          <ReviewBox>
            <SubTitle>후기</SubTitle>

            <Review detailProductArr={detailProductArr} />
          </ReviewBox>
          <CancelInfoBox>
            <p>
              <SubTitle>취소 환불 규정</SubTitle>
              {cancelArr.map((cancel) => (
                <Li cancel>{cancel.content}</Li>
              ))}
            </p>
          </CancelInfoBox>
        </InfoBox>
        <Modal
          getName={getName}
          getPrice={getPrice}
          btnId={btnId}
          roomBtnIdArr={roomBtnIdArr}
          roomtype={roomtype}
          detailProductArr={detailProductArr}
          ChooseRoom={isChooseRoomBtnClicked}
        />
      </AccommodationDetailWrapper>
    </>
  )
}

export default AccommodationDetail

const shareProperties = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid whitesmoke;
`

const AccommodationDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1060px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .fa-map {
    margin-right: 5px;
    color: #3297ed;
  }
`

const InfoBox = styled.div`
  width: 700px;

  margin-top: 80px;
`

const AccommodationNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 8px;
  font-size: 15px;
  line-height: 130%;
`

const MapBtn = styled.button`
  all: unset;
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${theme.Color.grey[300]};
  font-weight: bold;
  cursor: pointer;

  span {
    font-size: ${theme.fontSize.small};
  }
`

const AccommodationDescBox = styled.div`
  display: block;
  padding: 5px 8px;
  color: ${theme.Color.grey[200]};
  line-height: 130%;
`
const RateBox = styled.div`
  display: block;
  padding: 5px 8px;
  line-height: 130%;

  .fa-star,
  .fa-star-half-alt {
    color: ${theme.Color.blue[400]};
  }

  span {
    margin-left: 3px;
    font-size: ${theme.fontSize.small};
  }
`

const FreeMealTag = styled.div`
  width: 55px;
  height: 23px;
  margin: 5px 0 10px 10px;
  padding: 5px;
  font-size: ${theme.fontSize.xs};
  font-weight: 500;
  background-color: ${theme.Color.grey[200]};
`

const NoticeBox = styled.div`
  padding: 16px;
  font-size: 15px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  line-height: 130%;

  .fa-info-circle {
    color: #464a50;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: #464a50;
  }

  p {
    color: #868a8e;
    font-size: 15px;
    font-weight: 300;
  }
`

const NoticeTitleBox = styled.div`
  display: flex;
  align-items: baseline;
`

const DetailChooseBox = styled.div`
  margin-bottom: 48px;

  h2 {
    margin-top: 48px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }
`

const AvailableRoomBtninnerBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`

const AvailableRoomBtnBox = styled.div`
  padding: ${(props) => (props.border === "solid" ? "16px" : "5px 8px")};
  font-size: 15px;

  .onRoomAvailableBtn {
    position: relative;
    width: 45px;
    height: 25px;
    margin-left: 5px;
    border-radius: 50px;
    background-color: ${theme.Color.blue[200]};
    cursor: pointer;

    .circleBtn {
      position: absolute;
      left: 22px;
      top: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
    }
  }

  .roomAvailableBtn {
    position: relative;
    width: 45px;
    height: 25px;
    margin-left: 5px;
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: lightgrey;
    cursor: pointer;

    .circleBtn {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      /* z-index: 10; */
    }
  }

  div {
    display: flex;
  }

  .fa-star,
  .fa-star-half-alt {
    font-size: ${theme.fontSize.small};
    color: ${theme.Color.blue[400]};
  }

  .fa-caret-down {
    margin-left: 5px;
  }
`

const PointBox = styled(shareProperties)`
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #53585d;
  }

  .point {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    color: rgb(73, 80, 86);
  }
`
const CheckInOutBox = styled(shareProperties)`
  display: flex;
  align-items: center;

  .line {
    left: 50%;
    width: 1px;
    height: 54px;
    margin-right: 150px;
    margin-left: 150px;
    transform: rotate(12deg);
    background: rgb(222, 226, 230);
  }
`

const SubTitle = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${(props) => (props.name === "time" ? "24px" : "16px")};
  font-weight: ${(props) => (props.name === "time" ? "300" : "bold")};
  color: rgb(73, 80, 86);
`

const MealNoticeBox = styled(shareProperties)``

const RulesBox = styled(shareProperties)``

const IntroduceBox = styled(shareProperties)`
  position: relative;

  .block {
    display: block;
  }

  .none {
    display: none;
  }
`

const Table = styled(shareProperties)`
  tbody {
    display: flex;
    align-items: center;
    flex-flow: wrap;
    width: 700px;

    tr {
      margin-bottom: 20px;

      td {
        display: flex;
        align-items: center;
        width: 173px;
        height: 48px;
        font-size: 15px;
        color: #6b7176;

        img {
          width: 40px;
          height: 40px;
          margin-right: 5px;
        }
        .fas {
          margin-right: 5px;
        }
      }
    }
  }
`
const Li = styled.li`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 400;
  list-style: ${(props) => (props.name === "cancel" ? "none" : "")};
`

const IntroduceHideBox = styled.div`
  display: ${(props) => (props.name === "none" ? "none" : "")};
  position: absolute;
  bottom: 30px;
  width: 700px;
  height: 130px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
`

const IntroduceHideButton = styled.button`
  display: ${(props) => (props.name === "none" ? "none" : "")};
  all: unset;
  position: absolute;
  bottom: 0px;
  left: 40%;
  width: 20%;
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${theme.Color.grey[300]};
  background-color: white;
  font-weight: bold;
  cursor: pointer;
`

const ReviewBox = styled(shareProperties)``

const CancelInfoBox = styled(shareProperties)`
  border-bottom: 1px solid whitesmoke;
`

// const DetailBox = styled.div`
//   display: ${(props) => (props.name === "checkInOut" ? "flex" : "")};
//   align-items: ${(props) => (props.name === "checkInOut" ? "center" : "")};
//   padding-top: 40px;
//   padding-bottom: 40px;
//   border-top: 1px solid whitesmoke;
//   border-bottom: ${(props) =>
//     props.name === "cancelBox" ? "1px solid whitesmoke" : ""};

//   .fa-check {
//     margin-right: 5px;
//   }
// `
