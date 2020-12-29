import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./Styles/globalStyles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
