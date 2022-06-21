import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bgcolor: string;

      text01: string;
      text02: string;
      text03: string;
      text04: string;
      text05: string;
      text06: string;
      text07: string;

      hoverbtn: string;
      clickbtn: string;

      msgcount: string;
    };
  }
}
