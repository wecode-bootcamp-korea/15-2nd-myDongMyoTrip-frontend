import React, { useState } from "react"
import styled from "styled-components"
import theme from "../../../Styles/theme.js"

import { withRouter } from "react-router-dom"

function Accommodation(props) {
  const [isFilterClicked, setIsFilterClicked] = useState(false)

  const handleFilters = () => {
    setIsFilterClicked(!isFilterClicked)
  }
  const { productArr } = props

  const goToDetail = (e) => {
    props.history.push(`/accommodation_detail/${e.target.id}`)
  }

  return (
    <AccommodationWrapper>
      <FilterBox>
        <span>검색된 한인민박 {productArr.length}개</span>
        <Filters
          state={isFilterClicked ? "isFilterClicked" : ""}
          onClick={handleFilters}
        >
          <li>▪ 인기순</li>
          <li>▪ 높은 평점순</li>
          <li>▪ 낮은 가격순</li>
          <li>▪ 높은 가격순</li>
        </Filters>
      </FilterBox>
      {productArr.map((product) => (
        <AccommodationListBox>
          <AccommodationImg src={product.image_url} />
          <AccommodationInfoBox onClick={goToDetail} id={product.id}>
            <AccommodationHeader>
              <AccommodationName>{product.name}</AccommodationName>
              <AccommodationDesc>{product.description}</AccommodationDesc>
            </AccommodationHeader>
            <AccommodationBottom>
              <RatePriceBox>
                <i className="fas fa-star" />
                <Rate>{product.star_rating}</Rate>
                <ReivewTotal>({product.number_of_reviews})</ReivewTotal>
              </RatePriceBox>
              <RatePriceBox>
                <LowerPrice>1박최저</LowerPrice>
                <Price>{Number(product.price).toLocaleString()}</Price>
                <PriceText>원</PriceText>
              </RatePriceBox>
            </AccommodationBottom>
          </AccommodationInfoBox>
        </AccommodationListBox>
      ))}
    </AccommodationWrapper>
  )
}

export default withRouter(Accommodation)

const AccommodationWrapper = styled.section`
  display: block;
  width: 770px;
`
const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  span {
    font-size: ${theme.fontSize.medium};
    font-weight: bold;
  }
`

const Filters = styled.div`
  display: flex;
  font-weight: ${(props) => (props.state === "isFilterClicked" ? "bold" : "")};

  li {
    margin-right: 10px;
    font-size: ${theme.fontSize.small};
    list-style: none;
    cursor: pointer;
  }
`

const AccommodationListBox = styled.div`
  display: flex;
  margin-bottom: 16px;
  border: 1px solid lightgray;

  &:hover {
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.48);
  }
`
const AccommodationImg = styled.img.attrs({
  alt: "Accommodation Image",
})`
  width: 258px;
  height: 187px;
`

const AccommodationInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 520px;
  padding: 24px;
`

const AccommodationHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const AccommodationName = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: bold;
`

const AccommodationDesc = styled.h2`
  margin-top: 4px;
  font-size: ${theme.fontSize.xs};
`

const RatePriceBox = styled.div`
  display: flex;
  align-items: baseline;
`

const AccommodationBottom = styled(RatePriceBox)`
  justify-content: space-between;

  .fa-star {
    margin-right: 5px;
    font-size: ${theme.fontSize.small};
    color: ${theme.Color.blue[300]};
  }
`

const Rate = styled.span`
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
`

const ReivewTotal = styled.span`
  font-size: ${theme.fontSize.small};
`

const LowerPrice = styled(ReivewTotal)`
  color: ${theme.Color.grey[400]};
`

const Price = styled.span`
  font-size: ${theme.fontSize.xxxl};
  font-weight: bold;
`
const PriceText = styled.span`
  font-size: ${theme.fontSize.xl};
`
