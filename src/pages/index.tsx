import React from 'react';
import Head from 'components/Head';
import MovieSection from 'components/MovieSection';

const movies: Movie[] = [
  {
    title: '영화 1',
  },
  {
    title: '영화 2',
  },
  {
    title: '영화 3',
  },
  {
    title: '영화 4',
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
