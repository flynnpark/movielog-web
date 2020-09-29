import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

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

    @media (min-width: 600px) {
      margin: 0 20px;
    }

    @media (min-width: 760px) {
      margin: 0 3.5%;
    }

    @media (min-width: 1100px) {
      margin: 0 60px;
    }
  }
`;

export default GlobalStyle;
