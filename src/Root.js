import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: .625em; /* fallback IE8+ */
    font-size: calc(1em * .625); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
  }
  body {
    margin-top:0;
    padding-top:0;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased!important;
    font-size: 1.4em; /* base font-size is equivalent "14px" */
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Root = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

export default Root;
