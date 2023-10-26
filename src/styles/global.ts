import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Archivo', sans-serif;
  }

  p, h1, h2 {
    padding: 0;
    margin: 0;
  }

  label {
    color: white;
  }
`;
export default GlobalStyle;
