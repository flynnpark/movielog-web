import React from 'react';
import Head from 'next/head';

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>존재하지 않는 페이지입니다</title>
      </Head>
      존재하지 않는 페이지입니다.
    </>
  );
};

export default NotFound;
