import { Menu } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  align-items: center;
  margin-right: 32px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>Logo</LogoContainer>
        <NavUl>
          <li>검색</li>
          <li>로그인</li>
          <li>회원가입</li>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
