import React from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

type NavButtonProps = { isPrimary?: boolean } & LinkProps;

const NavButton: React.FC<NavButtonProps> = ({ children, href, isPrimary }) => {
  return (
    <Link href={href} passHref={true}>
      <StyledButton $isPrimary={isPrimary}>{children}</StyledButton>
    </Link>
  );
};

const StyledButton = styled.a<{ $isPrimary?: boolean }>`
  display: inline-flex;
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? '#fff' : theme.typography.primary};
  background-color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.palette.primary : 'none'};
  padding: 4px 15px;
  border: 1px solid
    ${({ theme, $isPrimary }) =>
      $isPrimary ? theme.palette.primary : theme.palette.border};
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  line-height: 1.5715;
`;

export default NavButton;
