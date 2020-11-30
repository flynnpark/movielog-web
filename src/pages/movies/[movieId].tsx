import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { globalContainer } from 'styles/mediaQuery';

const MovieDetail: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>영화 상세</title>
      </Head>
      <MovieDetailContainer>
        <BackdropContainer $backdropSrc={'/images/backdrop.jpg'}>
          백드롭
        </BackdropContainer>
        <MovieDetailInfoContainer>
          <MoviePosterContainer>
            <MoviePosterImage src="/images/poster.jpg" />
          </MoviePosterContainer>
          테스트
        </MovieDetailInfoContainer>
      </MovieDetailContainer>
    </>
  );
};

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const BackdropContainer = styled.div<{ $backdropSrc?: string }>`
  display: block;
  height: 300px;
  width: 100%;
  ${(props) => {
    const { $backdropSrc } = props;
    if ($backdropSrc) {
      return `
        background-image: url(${$backdropSrc});
        background-size: cover;
        background-repeat: no-repeat;
      `;
    }
    return '';
  }}
`;

const MovieDetailInfoContainer = styled.div`
  ${globalContainer}
`;

const MoviePosterContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 128px;
  border: 2px solid #fff;
  border-radius: 2px;

  @media (min-width: 760px) {
    width: 154px;
  }

  @media (min-width: 1100px) {
    width: 160px;
  }
`;

const MoviePosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default MovieDetail;
