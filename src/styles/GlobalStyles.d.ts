import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color__primary: #E75151;
  }
`;
export default GlobalStyles;
