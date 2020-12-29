import React, { Component } from "react"
import "../components/Product.scss"

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="filterContainer">
          <div className="filterTotal">
            <span>검색된 한인민박 {this.props.productsArr.length}개</span>
          </div>
          <div className="filters">
            <li>인기순</li>
            <li>높은 평점순</li>
            <li>낮은 가격순</li>
            <li>높은 가격순</li>
          </div>
        </div>
        {this.props.productsArr.map((product) => (
          <div className="accommodationContents">
            <img
              className="accommodationImg"
              alt="Accommodation Img"
              src={product.src}
            />
            <div className="productsContents">
              <div className="productsContentsNameBox">
                <span className="accommodationName">{product.name}</span>
                <span className="accommodationDesc">{product.description}</span>
              </div>
              <div className="productsContentsInfoBox">
                <span className="accommodationRate">{product.rate}</span>
                <span className="accommodationPrice">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Product
