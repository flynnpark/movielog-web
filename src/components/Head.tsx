import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
}

const globalTitle = '무비로그';

const Head: React.FC<HeadProps> = ({ children, title }) => {
  return (
    <NextHead>
      <title>{title ? `${title} | ${globalTitle}` : globalTitle}</title>
      {children}
    </NextHead>
  );
};

export default Head;
