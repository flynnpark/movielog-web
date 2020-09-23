import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const HeaderContainer = styled.header`
  height: 64px;
  line-height: 64px;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.shadow};
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

const Header: React.FC = () => {
  const history = useHistory();

  const handleClickMenu = (to: string) => () => history.push(to);

  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>Logo</LogoContainer>
        <NavUl>
          <NavLi>
            <MenuButton type="link" onClick={handleClickMenu('/')}>
              피드
            </MenuButton>
          </NavLi>
          <NavLi>
            <MenuButton type="link">둘러보기</MenuButton>
          </NavLi>
          <NavSearchLi>검색</NavSearchLi>
          <NavLi>
            <MenuButton>로그인</MenuButton>
          </NavLi>
          <NavLi>
            <MenuButton>회원가입</MenuButton>
          </NavLi>
        </NavUl>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
