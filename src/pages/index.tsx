import React from 'react';
import Head from 'components/Head';
import MovieSection from 'components/MovieSection';

const movies: Movie[] = [
  {
    id: 1,
    title: '해리포터와 죽음의 성물 1: 긴 제목 테스트',
  },
  {
    id: 2,
    title: '해리포터와 죽음의 성물 2: 긴 제목 테스트',
  },
  {
    id: 3,
    title: '해리포터와 죽음의 성물 3: 긴 제목 테스트',
  },
  {
    id: 4,
    title: '해리포터와 죽음의 성물 4: 긴 제목 테스트',
  },
  {
    id: 5,
    title: '해리포터와 죽음의 성물 5: 긴 제목 테스트',
  },
  {
    id: 6,
    title: '해리포터와 죽음의 성물 6: 긴 제목 테스트',
  },
  {
    id: 7,
    title: '해리포터와 죽음의 성물 7: 긴 제목 테스트',
  },
  {
    id: 8,
    title: '해리포터와 죽음의 성물 8: 긴 제목 테스트',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Head />
      <MovieSection title={'인기 영화'} movies={movies} />
      <MovieSection title={'새로 나왔어요!'} movies={movies} />
      <MovieSection title={'최근 평점된 영화'} movies={movies} />
    </>
  );
};

export default Home;
