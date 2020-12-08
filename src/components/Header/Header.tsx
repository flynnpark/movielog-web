import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { globalContainer } from 'styles/mediaQuery';
import NavButton from './NavButton';
import NavLink from './NavLink';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavigationBar>
        <NavUl>
          <NavLogoLi>
            <NavLogo to={'/'}>무비로그</NavLogo>
          </NavLogoLi>
          <NavLi>
            <NavLink to={'/feed'}>피드</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to={'/explore'}>둘러보기</NavLink>
          </NavLi>
          <NavSearchLi>
            <SearchBar />
          </NavSearchLi>
          <NavButtonLi>
            <NavButton to={'/login'}>로그인</NavButton>
          </NavButtonLi>
          <NavButtonLi>
            <NavButton to={'/sign-up'} isPrimary={true}>
              회원가입
            </NavButton>
          </NavButtonLi>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  display: block;
  flex-direction: row;
  z-index: 999;
`;

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${globalContainer}
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const NavLi = styled.li`
  padding: 0 10px;
`;

const NavLogoLi = styled(NavLi)`
  padding: 0;
  align-items: center;
  margin-right: 32px;
  font-size: 14px;
`;

const NavSearchLi = styled(NavLi)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavButtonLi = styled(NavLi)`
  padding: 0 10px;
`;

const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.typography.primary};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;

export default Header;
