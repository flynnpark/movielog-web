import React from 'react';
import { NavLink as RouterNavLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const NavLink: React.FC<LinkProps> = ({ children, to }) => {
  return <StyledMenu to={to}>{children}</StyledMenu>;
};

const StyledMenu = styled(RouterNavLink)`
  display: inline-flex;
  color: ${({ theme }) => theme.typography.secondary};
  padding: 4px 15px;
  line-height: 1.5715;
  font-weight: 500;
  text-decoration: none;

  .active {
    color: ${({ theme }) => theme.typography.primary};
  }
`;

export default NavLink;
