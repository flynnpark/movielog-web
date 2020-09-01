import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${(props) => props.theme.background.default};
    color: ${({ theme }) => theme.typography.primary};
    transition: all 0.50s linear;
  }

  main {
    padding: 0 50px;
    flex: auto;
    min-height: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
