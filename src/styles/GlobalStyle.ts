import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.typography.primary};
  }

  main {
    padding: 0 50px;
    padding-top: 40px;
  }
`;

export default GlobalStyle;
