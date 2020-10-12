import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledMenu = styled.a<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.typography.primary : theme.typography.secondary};
  font-weight: 500;
  text-decoration: none;
`;

type NavLinkProps = React.PropsWithChildren<LinkProps>;

const NavLink: React.FC<NavLinkProps> = ({ as, children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref={true}>
      <StyledMenu $isActive={asPath === href || asPath === as}>
        {children}
      </StyledMenu>
    </Link>
  );
};

export default NavLink;
