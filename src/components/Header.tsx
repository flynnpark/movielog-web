import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 64px;
  line-height: 64px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  display: block;
  flex-direction: row;
`;

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  margin-right: 32px;
  font-size: 14px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const NavLi = styled.li`
  padding: 0 20px;
`;

const NavSearchLi = styled(NavLi)`
  flex: 1;
`;

const NavMenu = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.typography.primary};

  &.active {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

const NavButton = styled(NavLink)<{ $isPrimary?: boolean }>`
  height: 32px;
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.palette.primary : theme.typography.primary};
  padding: 4px 15px;
  border: 1px solid;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  line-height: 22px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>Logo</LogoContainer>
        <NavUl>
          <NavLi>
            <NavMenu to={'/feed'}>피드</NavMenu>
          </NavLi>
          <NavLi>
            <NavMenu to={'/explore'}>둘러보기</NavMenu>
          </NavLi>
          <NavSearchLi>검색</NavSearchLi>
          <NavLi>
            <NavButton to={'/login'}>로그인</NavButton>
          </NavLi>
          <NavLi>
            <NavButton to={'/sign-up'} $isPrimary={true}>
              회원가입
            </NavButton>
          </NavLi>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
