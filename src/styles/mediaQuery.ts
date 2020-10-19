import { css } from 'styled-components';

const globalContainer = css`
  max-width: 1320px;

  @media (min-width: 600px) {
    margin: 0 20px;
  }

  @media (min-width: 760px) {
    margin: 0 3.5%;
  }

  @media (min-width: 1100px) {
    margin: 0 60px;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

export { globalContainer };
