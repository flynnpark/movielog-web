import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
`;

const Header: React.FC = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;
