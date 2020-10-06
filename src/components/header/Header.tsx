import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { globalContainer } from 'styles/mediaQuery';
import NavButton from './NavButton';
import NavLink from './NavLink';

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

const NavButtonLi = styled(NavLi)`
  padding: 0 10px;
`;

const NavLogo = styled.a`
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>
          <Link href={'/'} passHref={true}>
            <NavLogo>Logo</NavLogo>
          </Link>
        </LogoContainer>
        <NavUl>
          <NavLi>
            <NavLink href={'/feed'}>피드</NavLink>
          </NavLi>
          <NavLi>
            <NavLink href={'/explore'}>둘러보기</NavLink>
          </NavLi>
          <NavSearchLi>검색</NavSearchLi>
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

export default Header;
