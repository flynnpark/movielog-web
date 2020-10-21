import React from 'react';
import Link from 'next/link';
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
            <Link href={'/'} passHref={true}>
              <NavLogo>무비로그</NavLogo>
            </Link>
          </NavLogoLi>
          <NavLi>
            <NavLink href={'/feed'}>피드</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href={'/explore'}>둘러보기</NavLink>
          </NavLi>
          <NavSearchLi>
            <SearchBar />
          </NavSearchLi>
          <NavButtonLi>
            <NavButton href={'/login'}>로그인</NavButton>
          </NavButtonLi>
          <NavButtonLi>
            <NavButton href={'/sign-up'} isPrimary={true}>
              회원가입
            </NavButton>
          </NavButtonLi>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

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
  ${globalContainer}
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const NavLi = styled.li`
  padding: 0 20px;
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

const NavLogo = styled.a`
  color: ${({ theme }) => theme.typography.primary};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;

export default Header;
