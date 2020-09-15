import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  align-items: center;
  margin-right: 32px;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const RightMenuContainer = styled.div`
  flex: 1;
`;

const Menu = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.typography.primary};
  padding: 0 20px;
`;

const LeftMenuContainer = styled.div``;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo>Movie.log</Logo>
        </Link>
      </LogoContainer>
      <RightMenuContainer>
        <Menu to="/search">Search</Menu>
        <Menu to="/profile">Profile</Menu>
      </RightMenuContainer>
      <LeftMenuContainer>
        <Menu to="/login">Login</Menu>
      </LeftMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
