import React from 'react';
import styled from 'styled-components';
import Head from 'components/head';

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Home: React.FC = () => {
  return (
    <>
      <Head />
      <PageTitle>인기 영화</PageTitle>
      <PageTitle>새로 나왔어요!</PageTitle>
      <PageTitle>최근 평점된 영화</PageTitle>
    </>
  );
};

export default Home;
