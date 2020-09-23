import React from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { tuple } from 'utils/type';

const StyleTypes = tuple('button', 'link');
type StyleType = typeof StyleTypes[number];

interface MenuButtonInterface {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: StyleType;
}

const LinkButton = styled.a``;

const NativeButton = styled.button``;

const getButtonComponent = (
  styleType?: StyleType
): StyledComponent<'button' | 'a', DefaultTheme, {}, never> => {
  switch (styleType) {
    case 'link':
      return LinkButton;
    default:
      return NativeButton;
  }
};

const MenuButton: React.FC<MenuButtonInterface> = (props) => {
  const { children, onClick, type } = props;

  const ButtonComponent = getButtonComponent(type);

  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
};

export default MenuButton;
