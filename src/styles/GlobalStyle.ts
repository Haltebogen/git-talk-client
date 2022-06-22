import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
 ${normalize}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a { cursor: pointer; text-decoration: none; }
`;
export default GlobalStyles;
