import React from 'react';
import styled from 'styled-components';

type MovieCardProps = {
  imageSrc?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ imageSrc }) => {
  return (
    <MovieCardContainer>
      <MovieCardImage src={imageSrc || 'images/poster.jpg'} />
      MovieCard
    </MovieCardContainer>
  );
};

const MovieCardContainer = styled.a``;

const MovieCardImage = styled.img``;

export default MovieCard;
