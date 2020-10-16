import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavLink: React.FC<LinkProps> = ({ as, children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref={true}>
      <StyledMenu $isActive={asPath === href || asPath === as}>
        {children}
      </StyledMenu>
    </Link>
  );
};

const StyledMenu = styled.a<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.typography.primary : theme.typography.secondary};
  font-weight: 500;
  text-decoration: none;
`;

export default NavLink;
