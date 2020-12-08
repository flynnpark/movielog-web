import React from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
  title?: string;
}

const globalTitle = '무비로그';

const Head: React.FC<HeadProps> = ({ children, title }) => {
  console.log(title);
  return (
    <Helmet>
      <title>{title ? `${title} | ${globalTitle}` : globalTitle}</title>
      {children}
    </Helmet>
  );
};

export default Head;
