import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet title={'존재하지 않는 페이지입니다'} />
      존재하지 않는 페이지입니다.
    </>
  );
};

export default NotFound;
