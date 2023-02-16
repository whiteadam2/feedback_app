import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }
`;

export default GlobalStyles;
