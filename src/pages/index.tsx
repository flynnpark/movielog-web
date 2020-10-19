import React from 'react';
import Head from 'components/Head';
import MovieSection from 'components/MovieSection';

const movies: Movie[] = [
  {
    id: 1,
    title: '영화 1',
  },
  {
    id: 2,
    title: '영화 2',
  },
  {
    id: 3,
    title: '영화 3',
  },
  {
    id: 4,
    title: '영화 4',
  },
  {
    id: 5,
    title: '영화 5',
  },
  {
    id: 6,
    title: '영화 6',
  },
  {
    id: 7,
    title: '영화 7',
  },
  {
    id: 8,
    title: '영화 8',
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
