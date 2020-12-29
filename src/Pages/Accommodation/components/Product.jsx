import React, { Component } from "react"
import styled from "styled-components"

class Product extends Component {
  render() {
    return (
      <ProductContainer>
        <div className="filterContainer">
          <Span>검색된 한인민박 {this.props.productsArr.length}개</Span>
          <div className="filters">
            <li>인기순</li>
            <li>높은 평점순</li>
            <li>낮은 가격순</li>
            <li>높은 가격순</li>
          </div>
        </div>
        {this.props.productsArr.map((product) => (
          <AccommodationContents>
            <img
              className="accommodationImg"
              alt="Accommodation Img"
              src={product.src}
            />
            <ProductContents>
              <div className="productsContentsNameBox">
                <span className="accommodationName">{product.name}</span>
                <span className="accommodationDesc">{product.description}</span>
              </div>
              <div className="productsContentsInfoBox">
                <Span>{product.rate}</Span>
                <Span>{product.price}</Span>
              </div>
            </ProductContents>
          </AccommodationContents>
        ))}
      </ProductContainer>
    )
  }
}

export default Product

const ProductContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 960px;
  width: 770px;

  .filterContainer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;

    .filters {
      display: flex;
      font-size: 13px;

      li {
        margin: 5px;
        font-size: 13px;
      }
    }
  }
`

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const AccommodationContents = styled.div`
  display: flex;
  margin-bottom: 16px;
  border: 1px solid lightgray;

  &:hover {
      box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.48);
    }

  .accommodationImg {
    width: 250px;
    height: inherit;
  }
  }
`

const ProductContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 520px;
  padding: 24px;

  .productsContentsNameBox {
    display: flex;
    flex-direction: column;
    .accommodationName {
      font-size: 20px;
      font-weight: bold;
    }

    .accommodationDesc {
      margin-top: 4px;
      font-size: 12px;
    }
  }
  .productsContentsInfoBox {
    display: flex;
    justify-content: space-between;
    .accommodationRate {
      font-size: 14px;
    }

    .accommodationPrice {
      font-size: 20px;
      font-weight: bold;
    }
  }
`
