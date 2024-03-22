import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-family: 'Lato', sans-serif;
    color: #fff;
  }

  body {
    background-color: #040011;
    position: relative;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    scroll-behavior: smooth;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: cover;
    shape-margin: 0.75rem;
    font-style: italic;
  }
`;

export default GlobalStyle;
