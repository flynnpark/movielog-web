import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  background: ${(props) => props.theme.background.paper};
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  align-items: center;
  margin-right: 32px;
`;

const Logo = styled.h1`
  font-size: 32px;
`;

const MenuContainer = styled.div``;

const Menu = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.typography.primary};
  padding: 0 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Movie.log</Logo>
      </LogoContainer>
      <MenuContainer>
        <Menu to="/search">Search</Menu>
        <Menu to="/profile">Profile</Menu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
