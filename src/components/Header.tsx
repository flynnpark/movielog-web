import React from 'react';
import { Link } from 'react-router-dom';
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

const NavLink = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary : theme.typography.primary};
`;

const NavButton = styled(Link)<{ isPrimary?: boolean }>`
  text-decoration: none;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.palette.primary : theme.typography.primary};
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>Logo</LogoContainer>
        <NavUl>
          <NavLi>
            <NavLink to={'/'} isActive={true}>
              피드
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to={'/'}>둘러보기</NavLink>
          </NavLi>
          <NavSearchLi>검색</NavSearchLi>
          <NavLi>
            <NavButton to={'/'}>로그인</NavButton>
          </NavLi>
          <NavLi>
            <NavButton to={'/'} isPrimary={true}>
              회원가입
            </NavButton>
          </NavLi>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
