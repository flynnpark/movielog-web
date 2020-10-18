import React from 'react';
import styled from 'styled-components';

type MovieCardProps = {
  imageSrc?: string;
} & Movie;

const MovieCard: React.FC<MovieCardProps> = ({ title, imageSrc }) => {
  return (
    <MovieCardContainer>
      <MovieCardImage src={imageSrc || 'images/poster.jpg'} />
      {title}
    </MovieCardContainer>
  );
};

const MovieCardContainer = styled.a`
  display: inline-block;
  width: 100%;
`;

const MovieCardImage = styled.img``;

export default MovieCard;
