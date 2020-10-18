import React from 'react';
import styled from 'styled-components';
import MovieCard from 'components/MovieCard';

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <HorizontalList>
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </HorizontalList>
    </>
  );
};

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const HorizontalList = styled.div`
  display: flex;
  flex-direction: row;
`;

export default MovieSection;
