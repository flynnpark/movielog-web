import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
`;

const LogoContainer = styled.div``;

const MenuContainer = styled.div``;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Movie.log</LogoContainer>
      <MenuContainer>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
