import React from 'react';
import styled from 'styled-components';

type MovieCardProps = {
  imageSrc?: string;
} & Movie;

const MovieCard: React.FC<MovieCardProps> = ({ title, imageSrc }) => {
  return (
    <MovieCardContainer>
      <MoviePosterPlacer>
        <MoviePosterContainer>
          <MovieCardImage src={imageSrc || 'images/poster.jpg'} />
        </MoviePosterContainer>
      </MoviePosterPlacer>
      {title}
    </MovieCardContainer>
  );
};

const MovieCardContainer = styled.a`
  width: 100%;
  text-decoration: none;
`;

const MoviePosterPlacer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 145.37037037037038%;
`;

const MoviePosterContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const MovieCardImage = styled.img`
  vertical-align: top;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
  background: rgb(248, 248, 248);
  transition: all 300ms ease 0s;
`;

export default MovieCard;
