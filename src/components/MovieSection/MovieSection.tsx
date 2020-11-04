import React from 'react';
import styled from 'styled-components';
import MovieCard from 'components/MovieCard';

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <HorizontalContainer>
        <MovieListContainer>
          <MovieListUl>
            {movies.map((movie) => (
              <MovieListLi key={movie.id}>
                <MovieCard {...movie} />
              </MovieListLi>
            ))}
          </MovieListUl>
        </MovieListContainer>
      </HorizontalContainer>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 16px;
`;

const HorizontalContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MovieListContainer = styled.div`
  display: block;
  margin: 0 -5px;

  @media (min-width: 1100px) {
    margin: 0 -8px;
  }
`;

const MovieListUl = styled.ul`
  display: block;
  white-space: nowrap;
`;

const MovieListLi = styled.li`
  box-sizing: border-box;
  display: inline-block;
  width: 33.3333%;
  padding: 0 5px;

  @media (min-width: 600px) {
    width: 25%;
  }

  @media (min-width: 760px) {
    width: 20%;
  }

  @media (min-width: 1100px) {
    width: 16.666666666666668%;
    padding: 0 8px;
  }
`;

export default MovieSection;
