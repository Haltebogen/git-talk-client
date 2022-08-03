import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  ),
];