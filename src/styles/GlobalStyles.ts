import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
 ${normalize}

  html, body, div, p {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a { cursor: pointer; text-decoration: none; }
`;
export default GlobalStyles;
