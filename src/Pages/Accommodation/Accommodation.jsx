import React, { Component } from "react"
// import { link, withRouter } from "react-router-dom"
import Product from "./components/Product"
import LeftSideBar from "./components/LeftSideBar"
import SearchBar from "./components/SearchBar"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import styled from "styled-components"

class Accommodation extends Component {
  constructor() {
    super()
    this.state = {
      productArr: [],
      themeArr: [],
      sideFilterArr: [],
      date: "",
    }
  }

  componentDidMount = () => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          productArr: response.products,
        })
      })

    fetch("/data/accommodationTheme.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          themeArr: response.theme,
        })
        this.setState({
          sideFilterArr: response.theme,
        })
      })

    fetch("/data/accommodationSideFilter.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          sideFilterArr: response.sideFilter,
        })
      })
  }

  render() {
    return (
      <AccommodationContainer>
        <SearchBar />
        {this.state.date}
        <LeftSideBar
          themeArr={this.state.themeArr}
          sideFilterArr={this.state.sideFilterArr}
        />
        <Product productsArr={this.state.productArr} />
      </AccommodationContainer>
    )
  }
}

export default Accommodation

const AccommodationContainer = styled.div`
  display: block;
  width: 1060px;
  margin: 0 auto;
`
