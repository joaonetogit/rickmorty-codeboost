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

  body{
    background-color: #040011;
  }

  html{
    font-size: 62.5%;
  }

  img{
    display: block;
    max-width:100%;
  }
`;

export default GlobalStyle;
