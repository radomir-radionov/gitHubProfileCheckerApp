import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  };
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: ${typography.FONT_FAMILY_INTER};
    color: ${colors.BLACK};
  }
  body {
    overflow-x: hidden;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100vw;
  }
  ul, ol, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  ul, ol, li {
    list-style: none;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
  display: none;
  }

  @media screen and (max-width: 1024px) {
  html {
    font-size: 50%;
    } 
  }

  @media screen and (max-width: 568px) {
  html {
    font-size: 48%;
    }
  }
  `;

export default GlobalStyles;
