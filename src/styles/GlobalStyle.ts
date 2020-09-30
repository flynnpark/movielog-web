import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { globalContainer } from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.typography.primary};
    font-size: 14px;
    font-family: apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5715;
  }

  main {
    padding-top: 40px;
    ${globalContainer}
  }
`;

export default GlobalStyle;
