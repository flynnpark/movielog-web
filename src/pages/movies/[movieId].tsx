import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MovieDetail: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>영화 상세</title>
      </Head>
      영화 상세
    </>
  );
};

export default MovieDetail;
